import http from '../http/'

export function login (data: object) {
  return http.request({
    url:'/user/login',
    method:'post',
    data
  })
}
