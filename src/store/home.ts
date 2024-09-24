import { defineStore, acceptHMRUpdate } from "pinia";
export const useStore = defineStore({
  id: "index",
  state: () => ({ name: "old name", }),
  getters: {
    myName: (state) => {
      return `getters ${state.name}`
    }
  },
  actions: {
    changeName(name: string) {
      this.name = name
    }
  },
});
// Pinia 是 vuex 新替代方案。Pinia 中热更新实现，借助 import.meta
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
