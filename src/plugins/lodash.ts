/*
 * @Dsc: 文件描述
 * tips： setup 在生命周期beforecreate 和created前执行，此时vue对象还未创建，要用getCurrentInstance代替this
 * @Author: zenghe
 * @Date: 2021-06-02 15:07:51
 */


import lodash from 'lodash'

export default function install(app: any) {
  app.config.globalProperties.$_ = lodash // vue3 通过app.config.globalProperties来挂载 全局方法，全局变量 todo: 不能挂在下划线，故使用$_
  console.log(app.config.globalProperties)
}