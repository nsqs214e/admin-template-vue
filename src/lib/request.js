/*
 * @Author: your name
 * @Date: 2021-02-11 00:31:05
 * @LastEditTime: 2021-02-11 15:34:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\src\lib\request.js
 */
import axios from 'axios';
const request = axios.create({
    baseUrl: process.env.NODE_ENV === 'production' ? '':'http://192.168.0.103:8080/dev',
    timeout:10000
})
//请求拦截
request.interceptors.request.use(config=>{
    config.headers.Authorization = `bearer $('ACCESS_TOKEN')}`
    return config
},errorHandler)

//响应拦截
request.interceptors.response.use(response=>{
    if(response.status==200){
        return response.data
    }
},errorHandler)

//异常处理
const errorHandler = (error) => {
    const status = error.status
    switch (status) {
        case 400: error.message = '请求错误'; break;
        case 401: error.message = '未授权，请登录'; break;
        case 403: error.message = '拒绝访问'; break;
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break;
        case 408: error.message = '请求超时'; break;
        case 500: error.message = '服务器内部错误'; break;
        case 501: error.message = '服务未实现'; break;
        case 502: error.message = '网关错误'; break;
        case 503: error.message = '服务不可用'; break;
        case 504: error.message = '网关超时'; break;
        case 505: error.message = 'HTTP版本不受支持'; break;
        default: break;
    }
    return Promise.reject(error)
}

export default request

