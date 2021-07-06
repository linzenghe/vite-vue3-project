import http from '../http'

/**
 * @des: 登录
 * @param {object} data
 * @return {*}
 */
export function loginRequest (data: object) {
  // return http.request({
  //   url:'/user/login',
  //   method:'post',
  //   data
  // })
  return new Promise<object>((resolve)=>{
    const data = {
      code:200,
      data: {accessToken: "admin-token"},
      msg:'success'
    }
    console.log('登录')
    resolve(data)
  })
}

/**
 * @des: 获取用户信息
 * @param {*}
 * @return {*}
 */
export function userInfoRequest () {
  // return http.request({
  //   url:'/user/info',
  //   method:'get',
  // })
  return new Promise<object>((resolve)=>{
    const data = {
      code:200,
      data:{
        id: 0,
        username: "admin",
        password: "any",
        name: "Super Admin",
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        email: "admin@test.com",
        introduction: "I am a super administrator",
        phone: "1234567890",
        roles: ["admin"],
      },
      msg:'success',
    }
    console.log('获取用户信息')
    resolve(data)
  })
}

