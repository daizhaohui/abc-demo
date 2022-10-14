<template>
  <a-tooltip
    :title="tooltipTitle"
    placement="bottomLeft"
  >
    <span
      :class="['right-content-item',{'right-content-dark':theme==='dark'||theme===''}]"
      @click="onFullScreen"
    >
      <icon-fullscreen
        v-show="!isFullscreen"
        class="g-layout-icon"
      />
      <icon-fullscreen-exit
        v-show="isFullscreen"
        class="g-layout-icon"
      />
    </span>
  </a-tooltip>
</template>

<script src="./index.ts" lang="ts"></script>
