<!-- 布局1 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding: 0">
        <headBar></headBar>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <sideBar></sideBar>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup></script>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100%;
}
</style>
