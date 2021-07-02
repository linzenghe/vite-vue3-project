/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 10:52:47
 */
import { getToken } from '@/utils/cookies'

export interface UserState{
  token: string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  email: string
}

export const state:UserState = {
  token: getToken() || '',
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  email: ''
}
