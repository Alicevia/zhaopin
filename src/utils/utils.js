import * as TYPES from '../store/action-types'
//for reducer

export function getRedirectPath({type,avatar}={}){
    
    let url = (type==='boss')?'/boss':'/genius'
    if (!avatar) {
        url+='info'
    }
    return url
}

export function getChatId(userId,targetId){
    return [userId,targetId].sort().join('_')
}


// for action

export function authSuccess(data){
    return {type:TYPES.AUTH_SUCCESS,data}
}

export function errorMsg(msg){
    return { msg, type:TYPES.ERROR_MSG }
}

export function getBossAndGeniusListSuccess(data){
    return {type:TYPES.GETBOSSGENIUSLIST,data}
}



//message
export function msgList(msg,users,userId){
    return {type:TYPES.MSG_LIST,data:{msg,users,userId}}
}

export function msgRecv(data){
    return {type:TYPES.MSG_RECV,data}
}