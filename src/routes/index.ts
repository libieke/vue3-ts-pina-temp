import { createRouter, createWebHistory } from "vue-router";
import layout from '@/view/layout/index.vue';
import { color } from "echarts";


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
        meta: {
          isShow: true,
          title: '首页',
          icon: 'menu-home',
        }
      },
      {
        path: "userList",
        component: () => import("@/view/userList/index.vue"),
        meta: {
          isShow: true,
          title: '用户列表',
          icon: 'menu-list',
        }
      },
      {
        path: "userSet",
        component: () => import("@/view/userSet/index.vue"),
        meta: {
          isShow: true,
          title: '用户设置',
          icon: 'menu-user',
        }
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