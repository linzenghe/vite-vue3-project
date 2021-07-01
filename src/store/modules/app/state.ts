/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 10:52:47
 */
import { getSidebarStatus, getSize } from '@/utils/cookies'
export enum DeviceType {
  Mobile,
  Desktop,
}


export interface AppState{
  device: DeviceType
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  size: string
}

export const state:AppState = {
  device: DeviceType.Desktop,
  sidebar: {
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  },
  size: getSize() || 'medium'
}
