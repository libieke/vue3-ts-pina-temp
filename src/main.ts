import { createApp } from 'vue'
import "@/styles/index.scss";
import "normalize.css/normalize.css";
import router from "@/routes/index";
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import http from '@/utils/request.ts'


const app = createApp(App)


app.use(http)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')