
import {sendLogin} from '../../api/allRequest'
import {authSuccess,errorMsg} from '../../utils/utils'

let login = {
    // errorMsg(msg){
    //     return { msg, type:TYPES.ERROR_MSG }
    // },
    // loginSuccess(data){
    //     return {data,type:TYPES.LOGIN_SUCCESS}
    // },
    doLogin({user,pwd}={}){
         if (!user||!pwd) {
             return login.errorMsg('用户名或密码为空')
         }

        return async dispatch=>{
            let result = await sendLogin({user,pwd})
            console.log(result)
            if (result.status===200 && result.data.code===0) {
                dispatch(authSuccess(result.data.data))
            }else{
                dispatch(errorMsg(result.data.msg))
            }
         
        }
    }
}


export default login;