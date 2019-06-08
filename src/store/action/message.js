import {sendMsgList} from '../../api/allRequest'
import {msgList,errorMsg,msgRecv} from '../../utils/utils'
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
        return dispatch=>{
             socket.on('recvmsg',(data)=>{      
                dispatch(msgRecv(data))
            })
        }
    }



}

export default message