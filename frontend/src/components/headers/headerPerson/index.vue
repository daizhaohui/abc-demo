<template>
  <a-dropdown
    placement="bottomRight"
    trigger="click"
  >
    <span
      :class="['right-content-item',{'right-content-dark':theme==='dark'||theme===''}]"
    >
      <a-avatar
        size="small"
        class="avatar"
        :src="headImage"
        alt="avatar"
      />
      <span class="name">{{ userName }}</span>
    </span>
    <template #overlay>
      <a-menu
        class="menu"
      >
        <a-menu-item
          key="userCenter"
          @click="handleItemClick('userCenter')"
        >
          <icon-user class="g-layout-icons" />
          个人中心
        </a-menu-item>
        <a-menu-item
          key="userSetting"
          @click="handleItemClick('userSetting')"
        >
          <icon-setting class="g-layout-icons" />
          个人设置
        </a-menu-item>
        <a-menu-item
          key="triggerError"
          @click="handleItemClick('triggerError')"
        >
          <icon-close-circle class="g-layout-icons" />
          触发报错
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script src="./index.ts" lang="ts"></script>
