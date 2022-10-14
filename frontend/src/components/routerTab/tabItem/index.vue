<template>
  <div
    :class="['router-tab-item',{actived: isActive || isMouseOn}]"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
    @mousedown="onMousedown"
    @click.right="onRightClick"
  >
    <div class="tab-item-container">
      <div
        class="icon"
      >
        <component :is="icon?icon:'icon-file'" />
      </div>
      <div
        class="title"
        @click.left="onLeftClick"
      >
        <router-link :to="to">
          {{ title }}
        </router-link>
      </div>
      <div
        class="close"
      >
        <div
          v-show="closable!==false"
          class="close-inner"
        >
          <icon-close
            style="font-size:12px;"
            @click.stop.prevent="onClose"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" scoped src='./index.less'></style>
