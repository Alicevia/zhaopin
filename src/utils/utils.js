import * as TYPES from '../store/action-types'
//for reducer

export function getRedirectPath({type,avatar}={}){
    console.log(type,avatar)
    let url = (type==='boss')?'/boss':'/genius'
    if (!avatar) {
        url+='info'
    }
    return url
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