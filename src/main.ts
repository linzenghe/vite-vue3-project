import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import  store, { key } from '@/store'
import router from './router'

import '@/styles/index.scss' // global css
import '@/assets/iconfont/iconfont.css' // iconfont

// 加载所有插件
import { loadAllPlugins } from './plugins'
loadAllPlugins(app)


app.use(store,key).use(router).mount('#app')
