<template>
  <a-result
    status="404"
    title="404"
    sub-title="对不起, 您访问的页面不存在."
  >
    <template #extra>
      <a-button
        type="primary"
        @click="onBack"
      >
        返回
      </a-button>
    </template>
  </a-result>
</template>

<script src="./index.ts" lang="ts"></script>
