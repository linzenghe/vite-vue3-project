/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 10:52:47
 */
import { RouteLocationNormalized } from 'vue-router'

export interface TagView extends Partial<RouteLocationNormalized>{
  title?:string
}

export interface TagsViewState{
  visitedViews: TagView[]
  cachedViews: any[]
}

export const state:TagsViewState = {
  visitedViews:[],
  cachedViews:[]
}
