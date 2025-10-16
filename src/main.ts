import { createApp } from 'vue'
import App from '@/App.vue'
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'

const app = createApp(App)
app.component('Header', Header)
app.component('Footer', Footer)
app.mount('#app') //将APP主组件挂载到id为app的元素上， 该元素在public/index.html中
