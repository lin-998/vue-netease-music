import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import { getToken } from "./auth";
import store from '@/store'
// const BASE_URL = 'https://api.mtnhao.com/'
const BASE_URL = 'http://localhost:3000/'
const request = axios.create({
    baseURL:BASE_URL,
    timeout:30000,
    withCredentials: true,
})
//添加请求拦截器
request.interceptors.request.use(function(config){
  //  window.console.log(config)
  // console.log(store.getters.token);
  // if(store.getters.token){
    
  //   config.headers['X-Requested-Token'] = getToken()
  // }
  if(!config.params){
    config.params = {}
  }
  config.params.t = Date.now()
  //在发送请求之前做某事
  return config;
},function(error){
  //请求错误时做些事
  
  return Promise.reject(error);
})



// 注册响应拦截器
// Add a response interceptor
request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const res=response.data
    if(res.code&&res.code!==200){
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    }
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error);
  });

export default request