import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//插件的使用 在main文件中使用app.use()
import ui from '@/components/library'

// 重置样式包
import 'normalize.css'
import './assets/styles/common.less'

createApp(App).use(store).use(router).use(ui).mount('#app')
