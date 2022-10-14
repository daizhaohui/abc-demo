<template>
  <a-spin
    tip="Loading..."
    :spinning="layoutSpinning"
    size="large"
  >
    <a-layout class="main-layout">
      <sider-menu
        v-if="menuLayout===$Consts.MenuLayout.Sider || menuLayout===$Consts.MenuLayout.SiderTop"
        :collapsed="menuIsCollapsed"
        :menu-items="siderMenuItems"
        :title="title"
        :logo="logo"
        :mode="menuMode"
        :theme="menuTheme"
        @menuItemClick="onSiderMenuItemClick"
      />
      <a-layout>
        <a-layout-header
          :class="['main-layout-header']"
          style="padding:0 0;"
        >
          <div
            ref="refHeader"
          >
            <div
              v-if="menuLayout===$Consts.MenuLayout.Sider || menuLayout===$Consts.MenuLayout.SiderTop"
              class="sider-header-wrapper"
            >
              <div
                class="trigger"
                style="margin-left:20px;display:inline-block;float:left;"
              >
                <icon-menu-unfold
                  v-show="menuIsCollapsed"
                  class="g-layout-icon"
                  @click="onUnfold"
                />
                <icon-menu-fold
                  v-show="!menuIsCollapsed"
                  class="g-layout-icon"
                  @click="onFold"
                />
              </div>
              <div
                v-if="menuLayout===$Consts.MenuLayout.SiderTop"
                style="margin-left:20px;display:inline-block;"
              >
                <base-menu
                  theme="light"
                  mode="horizontal"
                  :data="topMenuItems"
                  menu-style="border: 'none'; height: 64px; min-width:360px;"
                  @menuItemClick="onTopMenuItemClick"
                />
              </div>
              <right-content :theme="menuTheme" />
            </div>
            <div
              v-else
              class="menu-nav-header"
            >
              <menu-nav-header
                :menu-items="topMenuItems"
                :logo="logo"
                :collapsed="menuIsCollapsed"
                :mode="menuMode"
                :theme="menuTheme"
                :title="title"
                :max-top-menu-header-width="maxTopMenuHeaderWidth"
                @menuCollapsed="collapseMenu"
                @menuItemClick="onTopMenuItemClick"
              />
            </div>
          </div>
        </a-layout-header>
        <a-layout-content :style="contentStyle">
          <router-tab
            v-if="pageLayout===$Consts.PageLayout.Tab"
            :menu-layout="menuLayout"
            :page-layout="pageLayout"
            :max-top-menu-header-width="maxTopMenuHeaderWidth"
          />
          <Suspense v-else>
            <template #default>
              <router-view
                v-slot="{ Component, route }"
              >
                <transition
                  :name="route.meta && route.meta.transition || 'fade'"
                  mode="out-in"
                >
                  <component
                    :is="Component"
                  />
                </transition>
              </router-view>
            </template>
            <template #fallback>
              Loading...
            </template>
          </Suspense>
        </a-layout-content>
        <div
          ref="refFooter"
        >
          <a-layout-footer
            v-if="showFooter"
            style="padding: 16px 0 16px 0;"
          >
            <main-footer :links="footerLinks" />
          </a-layout-footer>
        </div>
      </a-layout>
    </a-layout>
    <drawer-setting
      :visible="showDrawSettings"
      :value="drawerSettings"
      @close="onCloseSettingDrawer"
    />
  </a-spin>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" scoped src='./index.less'></style>
