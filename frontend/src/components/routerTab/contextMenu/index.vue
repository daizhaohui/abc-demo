<template>
  <a-dropdown
    :trigger="['contextmenu']"
    @visibleChange="onVisibleChange"
  >
    <slot />
    <template #overlay>
      <a-menu>
        <a-menu-item
          key="refresh"
          :disabled="disables.refresh"
          @click="onItemClick('refresh')"
        >
          <span class="g-s-icon"><icon-reload />  刷新当前</span>
        </a-menu-item>
        <a-menu-item
          key="close"
          :disabled="disables.close"
          @click="onItemClick('close')"
        >
          <span class="g-s-icon"><icon-close />  关闭当前</span>
        </a-menu-item>
        <a-menu-item
          key="closeOthers"
          :disabled="disables.closeOthers"
          @click="onItemClick('closeOthers')"
        >
          <span class="g-s-icon"><icon-close_square />  关闭其他</span>
        </a-menu-item>
        <a-menu-item
          key="closeToRight"
          :disabled="disables.closeToRight"
          @click="onItemClick('closeToRight')"
        >
          <span class="g-s-icon"><icon-delete-row />  关闭右侧</span>
        </a-menu-item>
        <a-menu-item
          key="closeAll"
          :disabled="disables.closeAll"
          @click="onItemClick('closeAll')"
        >
          <span class="g-s-icon"><icon-close-circle />  关闭所有</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script src="./index.ts" lang="ts"></script>
