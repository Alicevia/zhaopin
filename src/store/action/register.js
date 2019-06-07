
import {sendRegister} from '../../api/allRequest'
import {authSuccess,errorMsg} from '../../utils/utils'
let register = {
    // errorMsg(msg){
    //     return { msg, type:TYPES.ERROR_MSG }
    // },
    // registerSuccess(data){
    //     return {data,type:TYPES.REGISTER_SUCCESS}
    // },
    doRegister({user,pwd,type,repeatPWD}={}){
         if (!user||!pwd||!type) {
             return register.errorMsg('用户名与密码不能为空')
         }
         if (pwd!==repeatPWD) {
            return register.errorMsg('两次输入的密码不一样')
         }

        return async dispatch=>{
            let result = await sendRegister({user,type,pwd})
            console.log(result)
            if (result.status===200 && result.data.code===0) {
                dispatch(authSuccess(result.data.data))
            }else{
                dispatch(errorMsg(result.data.msg))
            }
        }
    }
}


export default register;