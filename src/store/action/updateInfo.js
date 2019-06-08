
import {sendUpdateInfo,sendQueryBossAndGenius} from '../../api/allRequest'
import {authSuccess,errorMsg,getBossAndGeniusListSuccess} from '../../utils/utils'
import * as TYPES from '../action-types'

let updateInfo = {
    doUpdateInfo(payload={}){
        return async dispatch=>{
            let result = await sendUpdateInfo(payload)
            if (result.status===200 && result.data.code===0) {
                dispatch(authSuccess(result.data.data))
            }else{
                dispatch(errorMsg(result.data.msg))
            }
        }
    },
    getBossAndGeniusInfoList(data){
        return async dispatch=>{
            let result =await sendQueryBossAndGenius(data)
            if (result.status===200 && result.data.code===0) {
                dispatch(getBossAndGeniusListSuccess(result.data.data))
            }else{
                dispatch(errorMsg(result.data.msg))
            }
            
        }
    },
    logoutSubmit(){
        return {
            type:TYPES.LOGOUT
        }
    }




}

export default updateInfo