/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-07-02 11:00:26
 */
import { AxiosPromise, AxiosResponse } from "axios";
import { Interceptors } from './interceptors'

export class HttpRequest{
  axios: any;
  constructor(){
    this.axios = new Interceptors().getInterceptors();
  }
  request(config: any):AxiosPromise{
    return new Promise((resolve,reject)=>{
      this.axios(config).then((res:AxiosResponse)=>{
        resolve(res)
      }).catch((err:any)=>{
        reject(err)
      })
    })
  }
}

const http = new HttpRequest()

export default http
