import axios from './index'

export function sendRegister(data){
    return axios.post('/user/register',data);
}

export function sendLogin(data){
    return axios.post('/user/login',data)
}

export function sendUserInfo(){
    return axios.get('/user/info')
}

export function sendUpdateInfo(data){
    return axios.post('/user/update',data)
}

export function sendQueryBossAndGenius(data){
    return axios.get('/user/list',{
        params:{
            ...data
        }
    })
}