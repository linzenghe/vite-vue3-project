/*
 * @Dsc: 文件描述 
 * @Author: zenghe
 * @Date: 2021-06-02 15:07:44
 */
import {createApp} from 'vue'

/**
 * @des: 导入文件功能对比
 * vite ：import.meta.globEager("./*.ts") 一步到位，已经是文件
 * webpack : require.context('.', true, /\.ts$/)  一个简单的对象，需要一次import
 */
export function loadAllPlugins(app: ReturnType<typeof createApp>){
  const files:Object = import.meta.globEager("./*.ts")
  for(let key in files){
    if(typeof files[key].default === 'function'){
      files[key].default(app)
    }
  }
}