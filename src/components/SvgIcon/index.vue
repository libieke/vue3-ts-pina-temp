<template>
  <!-- svg 外层容器节点，内部需要使用use标签结合使用 -->
  <!-- style设置图标大小 -->
  <svg :style="{ width, height }">
    <!-- xlink:href执行行使用哪个图标，属性值务必#icon-图标名字 -->
    <!-- fill属性是设置颜色 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<script setup lang="ts">
defineProps({
  //图标前缀
  prefix: {
    type: String,
    default: "#icon-",
  },
  //图标名称
  name: {
    type: String,
    default: "",
  },
  // 图标颜色
  color: {
    type: String,
    default: "",
  },
  // 图标宽
  width: {
    type: String,
    default: "16px",
  },
  // 图标高
  height: {
    type: String,
    default: "16px",
  },
});
</script>
