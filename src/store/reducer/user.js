import * as TYPES from '../action-types'
import {getRedirectPath} from '../../utils/utils'

let initState ={
    msg:'',
    user:'',
    type:'',
    redirectTo:'',
    category:[
        {
            path:'/boss',
            text:'牛人',
            icon:'boss',
            headerTitle:'牛人列表',
            hide:'genius'
        },
        {
            path:'/genius',
            text:'boss',
            icon:'job',
            headerTitle:'BOSS列表',
            hide:'boss'
        },
        {
            path:'/msg',
            text:'消息',
            icon:'msg',
            headerTitle:'消息列表',
        },
        {
            path:'/me',
            text:'我',
            icon:'user',
            headerTitle:'个人中心',
        }
    ],
 
}

export default function user(state=initState,action){
    state = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case TYPES.AUTH_SUCCESS:
            state = {...state,...action.data}
            state.redirectTo = getRedirectPath({type:action.data.type,avatar:action.data.avatar})
            break;
        case TYPES.LOAD_DATA:
            state={...state,...action.data}
            break;
        case TYPES.ERROR_MSG:
            state.msg = action.msg
            break;
        case TYPES.LOGOUT:
            state={...initState};
            break;
    }
    return state
}