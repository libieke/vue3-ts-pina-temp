<template>
  <ContentTitle>
    <div class="item">
      <ChartBar></ChartBar>
    </div>
  </ContentTitle>
</template>

<script setup>
import { FlashSessionListApi } from "@/api/api.ts";

onMounted(() => {
  FlashSessionListApi()
    .then((result) => {
      console.log("result :>> ", result);
    })
    .catch((err) => {});
});
</script>

<style lang="scss" scoped>
.item {
  width: 800px;
  height: 400px;
}
</style>
