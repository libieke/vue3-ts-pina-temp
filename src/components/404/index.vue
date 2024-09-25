<template>
  <Result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <Button type="primary">
        <RouterLink to="/">返回首页</RouterLink>
      </Button>
    </template>
  </Result>
</template>

<script lang="ts" setup>
import { Result ,Button } from 'ant-design-vue';
</script>
