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
        // case TYPES.MSG_READ:
        //     state={...state,chatmsg:[...state.chatmsg,action.data]}
        //     break;
        case TYPES.MSG_RECV:
           state={...state,chatmsg:[...state.chatmsg,action.data],unread:state.unread+1}
           break;
    }
    return state
}