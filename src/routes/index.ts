import { createRouter, createWebHistory } from "vue-router";
import layout from '@/components/layout/index.vue';


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
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "plant",
        component: () => import("@/views/farmer/plant/index.vue"),
      },
      {
        path: "breed",
        component: () => import("@/views/farmer/breed/index.vue"),
      },
      {
        path: "mechanic",
        component: () => import("@/views/farmer/mechanic/index.vue"),
      },
      {
        path: "personnel",
        component: () => import("@/views/farmer/personnel/index.vue"),
      },
      {
        path: "company",
        component: () => import("@/views/agriculture/company/index.vue"),
      },
      {
        path: "machinery",
        component: () => import("@/views/agriculture/machinery/index.vue"),
      },
      {
        path: "permit",
        component: () => import("@/views/agriculture/permit/index.vue"),
      },
      {
        path: "subject",
        component: () => import("@/views/agriculture/subject/index.vue"),
      },
      {
        path: "infrastructure",
        component: () => import("@/views/countryside/infrastructure/index.vue"),
      },
      {
        path: "environment",
        component: () => import("@/views/countryside/environment/index.vue"),
      },
      {
        path: "homestead",
        component: () => import("@/views/countryside/homestead/index.vue"),
      },
      {
        path: "basic",
        component: () => import("@/views/service/basic/index.vue"),
      }
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