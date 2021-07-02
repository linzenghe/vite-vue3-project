/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-07-01 17:12:42
 */

import axios,{AxiosInstance} from 'axios'
import Keys from '@/utils/keys'
import {
  setToken,
  setRefreshToken,
  getToken,
  getRefreshToken,
  removeToken
 } from '@/utils/cookies'

 import {ElMessage} from 'element-plus'

export class Interceptors {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
        baseURL: import.meta.env.BASE_URL, // 基础路径
        timeout: 10000 // 请求超时 10s
    })
  }
  // 初始化拦截器
  init() {
    // 请求拦截器
    this.instance.interceptors.request.use(config =>{
      if(getToken()){
        config.headers[Keys.tokenKey] = getToken()
        config.headers[Keys.refreshTokenKey] = getRefreshToken()
      }
      return config
    },err=>{
      return Promise.reject(err)
    })
    // 响应拦截器
    this.instance.interceptors.response.use(response => {
      const res = response.data;
      if(!response.status.toString().startsWith("2") || res.code === -1){
        ElMessage.error('系统错误，请假查API是否正常')
        return Promise.reject(res)
      }
      if(res.code !== 0){
        if (res.code === -3) {
          ElMessage.warning('登录过期')
          removeToken()
        } else {
          if (res.msg) {
            ElMessage.error(res.msg)
          }
        }
        return Promise.resolve(res);
      }else{
        const headers = response.headers;
        const token = headers.token;
        const refresh_token = headers["refresh-token"];
        if (token && refresh_token) {
          setToken(token);
          setRefreshToken(refresh_token);
        }
        return res;
      }
    }, error=>{
      if (error.message === "Request failed with status code 500") {
        ElMessage.error('系统错误，请假查API是否正常')
        return;
      }
      let code = -110
      if (error && error.response && error.response.status) {
        code = error.response.status;
        // 登陆过期
        if (code === 401 || code === -3) {
          removeToken()
        }
      } else {
        ElMessage.error(error.message)
      }
      const err = { errCode: -110, errMsg: error.message || "Error" };
      return Promise.reject(err);
    })
  }
  // 返回一下
  getInterceptors() {
    return this.instance
  }
}
