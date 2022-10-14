<template>
  <main-layout
    :menu-items="menuItems"
    :footer-links="footerLinks"
    :layout-spinning="layoutSpinning"
    :menu-theme="menuTheme"
    :menu-layout="menuLayout"
    :collapsed="menuCollapsed"
    :logo="$Images.Logo"
    :show-footer="showFooter"
    :page-layout="pageLayout"
    :max-top-menu-header-width="1280"
    :drawer-settings="drawerSettings"
  />
</template>

<script src="./index.ts" lang="ts"></script>
