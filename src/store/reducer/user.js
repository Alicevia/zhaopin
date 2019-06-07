import * as TYPES from '../action-types'
import {getRedirectPath} from '../../utils/utils'

export default function user(state={
    msg:'',
    user:'',
    type:'genius',
    redirectTo:'',
    category:[
        {
            path:'/boss',
            text:'牛人',
            icon:'boss',
            headerTitle:'牛人列表',
            // component:Boss,
            hide:'genius'
        },
        {
            path:'/genius',
            text:'boss',
            icon:'job',
            headerTitle:'BOSS列表',
            // component:Genius,
            hide:'boss'
        },
        {
            path:'/msg',
            text:'消息',
            icon:'msg',
            // component:Msg,
            headerTitle:'消息列表',
        },
        {
            path:'/me',
            text:'我',
            icon:'user',
            // component:User,
            headerTitle:'个人中心',
        }
    ],
    bossAndGeniusListInfo:[]
 
},action){
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
        case TYPES.GETBOSSGENIUSLIST:
            state={...state,bossAndGeniusListInfo:action.data}
    }
    return state
}