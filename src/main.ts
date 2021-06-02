import { createApp } from 'vue'
import App from './App.vue'

import { loadAllPlugins } from './plugins'
const app = createApp(App)
// 加载所有插件
loadAllPlugins(app)


app.mount('#app')
