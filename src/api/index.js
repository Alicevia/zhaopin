import axios from 'axios'
import {Toast} from 'antd-mobile'
// axios.default.baseURL = ''
axios.interceptors.request.use((data)=>{
    Toast.loading('加载中',0);
    return data
})
axios.interceptors.response.use((data)=>{
    Toast.hide();
    return data
})

export default axios