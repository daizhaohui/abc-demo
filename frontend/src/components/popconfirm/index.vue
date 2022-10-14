<template>
  <a-popconfirm
    :title="title"
    ok-text="确定"
    cancel-text="取消"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <template #title>
      <p v-if="title">
        {{ title }}
      </p>
      <slot
        v-else
        name="title"
      />
    </template>
    <slot />
  </a-popconfirm>
</template>

<script src="./index.ts" lang="ts"></script>
