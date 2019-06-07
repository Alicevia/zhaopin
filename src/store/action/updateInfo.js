
import {sendUpdateInfo,sendQueryBossAndGenius} from '../../api/allRequest'
import {authSuccess,errorMsg,getBossAndGeniusListSuccess} from '../../utils/utils'
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
            console.log(result)

            if (result.status===200 && result.data.code===0) {
                dispatch(getBossAndGeniusListSuccess(result.data.data))
            }else{
                dispatch(errorMsg(result.data.msg))
            }
            
        }
    }



}

export default updateInfo