<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    :width="siderMenuWidth"
    :class="className"
    :theme="theme"
  >
    <div
      id="logo"
      key="logo"
      class="logo"
      @click="handleClickLogo"
    >
      <img
        :src="$Images.Logo"
        alt="logo"
      >
      <h1>{{ title }} </h1>
    </div>
    <base-menu
      :data="menuItems"
      :theme="theme"
      :open-keys="openKeys"
      :selected-keys="selectedKeys"
      menu-style="padding: '16px 0'; width: '100%'"
      @menuItemClick="onMenuItemClick"
    />
  </a-layout-sider>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" scoped src='./index.less'></style>
