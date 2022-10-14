<template>
  <a-tooltip
    :title="$t('topRightMenu.help')"
    placement="bottomLeft"
  >
    <span
      :class="['right-content-item',{'right-content-dark':theme==='dark'||theme===''}]"
      @click="handleHelpClick"
    >
      <icon-question-circle
        class="g-layout-icon"
      />
    </span>
  </a-tooltip>
</template>

<script src="./index.ts" lang="ts"></script>
