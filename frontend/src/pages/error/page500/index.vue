<template>
  <a-result
    status="500"
    title="500"
    :sub-title="errorDescription"
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

<script src="./index.ts" lang="js"></script>
