<template>
  <div class="sidebar">
    <!-- 布局2使用 -->
    <!-- <div class="sidebar-logo flex-center">
      <svg-icon icon-class="logo" />
      <span>VitalityAdmin</span>
    </div> -->
    <el-menu
      active-text-color="#fff"
      background-color="#001529"
      :default-active="$route.path"
      text-color="#999"
      :unique-opened="true"
      router
    >
      <SidebarItem :routerList="routerList" />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter().getRoutes();
const routerList = router.filter((v) => v.meta && v.meta.isShow);
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  // background-color: #799197;
  border-right: none;
  /* .sidebar-logo {
    height: 48px;
    background-color: #002140;
    color: #fff;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
    font-size: 20px;
  } */

  .el-menu {
    height: calc(100% - 60px);
  }
}
</style>
