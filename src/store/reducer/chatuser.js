import * as TYPES from '../action-types'


export default function chatuser(state={
    bossAndGeniusListInfo:[],
    chatmsg:[],
    users:{},
    unread:0,

    
},action){
    state = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case TYPES.GETBOSSGENIUSLIST:
            state={...state,bossAndGeniusListInfo:action.data}
            break;
        case TYPES.MSG_LIST:
            state = {...state,users:action.data.users,chatmsg:action.data.msg,
                unread:action.data.msg.filter(item=>!item.read&&item.to===action.data.userid).length}
            break;
        case TYPES.MSG_READ:
            let {from,num} = action.data
            state={...state,chatmsg:state.chatmsg.map(v=>({...v,read:from===v.from?true:v.read})),unread:state.unread-num}
            break;



        case TYPES.MSG_RECV:
           state={...state,chatmsg:[...state.chatmsg,action.data],unread:action.data.to===action.userid?state.unread+1:null}
           break;
    }
    return state
}