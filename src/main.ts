import { createApp } from 'vue'
import './style.scss';
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import router from "@/routes/index";
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import ElementPlus from 'element-plus'
import http from '@/utils/request.ts'


const app = createApp(App)


app.use(http)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')