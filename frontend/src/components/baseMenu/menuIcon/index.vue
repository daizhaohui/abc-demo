<template>
  <component
    :is="url"
    v-if="isComponent"
    class="g-layout-icon"
  />
  <img
    v-else-if="url"
    style="min-width:14px;min-height:14px; max-width:20px;max-height:20px;"
    :src="url"
  >
</template>

<script src="./index.ts" lang="ts"></script>
