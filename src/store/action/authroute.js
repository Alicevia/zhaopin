import * as TYPES from '../action-types'
import {sendUserInfo} from '../../api/allRequest'

let authroute = {
    doCheckUserInfo(callback){
        return async dispatch=>{
            let result =await sendUserInfo()
            if (result.status===200 && result.data.code===0) {
                dispatch({
                    type:TYPES.LOAD_DATA,
                    data:result.data.data
                })
            }else{
                callback&& callback()
            }

        }
    }
}

export default authroute