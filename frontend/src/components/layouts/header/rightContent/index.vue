<template>
  <div class="right-content">
    <component
      :is="comp.name"
      v-for="comp in HeaderItems"
      :key="comp.name"
      :theme="theme"
    />
    <a-tooltip
      title="更多设置"
    >
      <span
        :class="['right-content-item',{'right-content-dark':theme==='dark'||theme===''}]"
        style="margin-right:10px;"
        @click="onMoreSettingClick"
      >
        <icon-ellipsis class="g-layout-icon" />
      </span>
    </a-tooltip>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" scoped src='./index.less'></style>
