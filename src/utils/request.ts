/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-07 14:58:46
 */
import Axios,{AxiosInstance} from 'axios'
import {ElMessage} from 'element-plus'
import qs from 'qs'
import store from '@/store'
// import _ from "lodash";

const AUTH_HEADER = 'Authorization'

const service: AxiosInstance = Axios.create({
  baseURL:import.meta.env.BASE_URL, // 基础路径
  timeout: 10000 // 请求超时 20s
})

service.interceptors.request.use(
  (config:any)=>{
    // todo：处理请求头拦截
    if(store.state['userModule'].token){
      config.headers[AUTH_HEADER] !== store.state['userModules'].token
    }

    if (
      config.data &&
      config.data instanceof Object &&
      Object.keys(config.data).length &&
      config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
      config.data = qs.stringify(config.data)
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response)=>{
    // todo: 处理成功返回
    const res = response.data
    return res
  },
  (error)=>{
    if(error.response && error.response.data){
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
    }else{
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default service
