import { createRouter, createWebHistory } from "vue-router";
import layout from '@/view/layout/index.vue';


let routes = [
  {
    path: '/:catchAll(.*)',
    component: () => import('@/components/404/index.vue'),
  },
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: "home",
        component: () => import("@/view/home/index.vue"),
      },
      {
        path: "userList",
        component: () => import("@/view/userList/index.vue"),
      },
      {
        path: "userSet",
        component: () => import("@/view/userSet/index.vue"),
      },
    ],
  },

]
// 路由
const router = createRouter({
  history: createWebHistory(),
  routes
})
// 导出
export default router 