<template>
  <div
    :class="`head ${theme===$Consts.Themes.Light?$Consts.Themes.Light:''}`"
  >
    <div
      ref="refPageHeader"
      class="main wide"
      :style="widthStyle"
    >
      <div class="left">
        <div class="logo">
          <div @click="clickLogo">
            <img
              :src="logo"
              alt="logo"
            >
            <h1>{{ title }}</h1>
          </div>
        </div>
        <div
          :style="menuWidthStyle"
        >
          <base-menu
            :theme="theme"
            :mode="mode"
            :data="menuItems"
            menu-style="border: 'none'; height: 64px;min-width:360px;"
            @menuItemClick="onMenuItemClick"
          />
        </div>
      </div>
      <div :class="`right-content ${theme}`">
        <right-content :theme="theme" />
      </div>
    </div>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" scoped src='./index.less'></style>
