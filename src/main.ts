import { createApp } from 'vue'
import App from '@/App.vue'
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
const app = createApp(App)
console.log(import.meta.env)
app.component('Header', Header)
app.component('Footer', Footer)
app.use(router)
app.use(ElementPlus, {locale: zhCn,})
app.mount('#app') //将APP主组件挂载到id为app的元素上， 该元素在public/index.html中
