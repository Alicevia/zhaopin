import {sendMsgList,sendReadMsg} from '../../api/allRequest'
import {msgList,errorMsg,msgRecv,msgRead} from '../../utils/utils'
import io from 'socket.io-client'
let socket = io('ws://localhost:3001')

let message = {
    getMsgList(){
        return async (dispatch,getState)=>{
            let result =await sendMsgList();
            if (result.status===200 && result.data.code===0) {
                let userid = getState().user._id
                dispatch(msgList(result.data.data,result.data.users,userid))               
            }else {
                dispatch(errorMsg(result.data.msg))
            }
        }
    },
    pushMsg({from,to,msg}){
        return (dispatch)=>{
            socket.emit('sendmsg',{from,to,msg})
        }
    },
    recvMsg(){
        return (dispatch,getState)=>{
             socket.on('recvmsg',(data)=>{      
                let userid = getState().user._id
                dispatch(msgRecv(data,userid))
            })
        }
    },
    readMsg(from){
        return async (dispatch,getState)=>{
            let result =await sendReadMsg({from})
            let userid = getState().user._id
            console.log(result)
            if (result.status===200 && result.data.code===0) {
                dispatch(msgRead({userid,from,num:result.data.num}))
            }
           
        }
    }



}

export default message