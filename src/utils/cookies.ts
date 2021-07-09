/*
 * @Description: cookies封装
 * @Author: ZY
 * @Date: 2020-12-17 16:06:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-09 14:29:03
 */
import Keys from './keys'
import Cookies from 'js-cookie'

export const getSidebarStatus = () => Cookies.get(Keys.sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(Keys.sidebarStatusKey, sidebarStatus)

export const getSize = () => Cookies.get(Keys.sizeKey)
export const setSize = (size: string) => Cookies.set(Keys.sizeKey, size)

export const getToken = () => Cookies.get(Keys.tokenKey)
export const setToken = (token: string) => Cookies.set(Keys.tokenKey, token)
export const removeToken = () => {
  Cookies.remove(Keys.tokenKey)
  Cookies.remove(Keys.refreshTokenKey)
}

export const getRefreshToken = () => Cookies.get(Keys.refreshTokenKey)
export const setRefreshToken = (token: string) => Cookies.set(Keys.refreshTokenKey, token)
export const removeRefreshToken = () => Cookies.remove(Keys.refreshTokenKey)
