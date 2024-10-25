import { defineStore, acceptHMRUpdate } from "pinia";

import type { loginResponseData } from '@/api/type'
import type { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { reqLogin, reqUserInfo } from '@/api/api'

const useUserStore = defineStore("user", {
  // id: 
  state: () => {
    return {
      username: 'libieke',
      avatar: '',
      fold: false, // 用户控制菜单折叠还是收起
      token: GET_TOKEN(),//存储用户唯一标识,本地存储持久化token
    }
  },
  getters: {

  },
  actions: {
    async userLogin(data: any) {
      // 登录请求
      let result: any = await reqLogin(data);
      console.log(result);
      //登录请求：成功200->token
      //登录请求：失败201->登录失败错误的信息
      if (result.code == 200) {
        //由于pinia|vuex存储数据其实利用js对象
        //pinia仓库存储一下token
        this.token = result.data.token;
        //本地存储持久化存储一份
        // localStorage.setItem('TOKEN', result.data.token as string)
        SET_TOKEN((result.data.token as string))
        // 能保证当前asnyc函数返回一个成功的promise
        return 'ok';
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    async userInfo() {
      // 获取用户信息进行存储仓库当中（用户头像、名字）
      let result: any = await reqUserInfo()
      // 如果获取信息成功，存储下用户信息
      if (result.code === 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
      }
    },

    userLogout() {
      // 目前没有mock接口：退出登录接口（通知服务器本地用户唯一标识失败）
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
    }

  }
});

// Pinia 是 vuex 新替代方案。Pinia 中热更新实现，借助 import.meta
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}


export default useUserStore