<template>
  <div
    :class="['router-tab']"
  >
    <div
      ref="refPageHeader"
      class="tab-items"
    >
      <div
        class="tab-item-wrapper"
        :style="tabStyle"
      >
        <div
          v-show="showTabArrow"
          class="arrow-left"
        >
          <a-button
            type="link"
            shape="circle"
            :disabled="arrowLeftDisabled"
            @click="onArrowLeft"
          >
            <template #icon>
              <icon-left />
            </template>
          </a-button>
        </div>
        <context-menu
          :disabled-buttons="data.disabledButtons"
          @itemClick="onContextMenuItemClick"
          @close="onContextMenuClose"
        >
          <div
            ref="refTabItems"
            class="scroll-tab-items"
            :style="scrollTabStyle"
          >
            <tab-item
              v-for="(tabItem,index) in data.tabItems"
              :key="tabItem.key"
              :title="tabItem.title"
              :icon="tabItem.icon"
              :to="tabItem.to"
              :closable="tabItem.closable"
              :index="index"
              :is-active="data.currentIndex===index || data.rightClickIndex===index"
              @rightClick="onTabItemRightClick"
              @leftClick="onTabItemLeftClick"
              @close="onTabItemClose"
            />
            <div class="line" style="display:inline-block;" />
          </div>
        </context-menu>
        <div
          v-show="showTabArrow"
          class="arrow-right"
        >
          <a-button
            type="link"
            shape="circle"
            :disabled="arrowRightDisabled"
            @click="onArrowRight"
          >
            <template #icon>
              <icon-right />
            </template>
          </a-button>
        </div>
        <div class="line" />
      </div>
    </div>

    <div
      v-if="data.tabItems.length"
      class="tab-page-layout"
      :style="tabStyle"
    >
      <Suspense>
        <template #default>
          <router-view
            v-slot="{ Component, route }"
          >
            <transition
              :name="route.meta && route.meta.transition || 'fade'"
              mode="out-in"
            >
              <keep-alive
                v-if="(!route.meta || route.meta.keepAlive!==false)"
                ref="aliveKeeper"
                :max="maxCacheItems"
              >
                <component
                  :is="Component"
                  :key="getKey(route)"
                />
              </keep-alive>
              <component
                :is="Component"
                v-else
              />
            </transition>
          </router-view>
        </template>
        <template #fallback>
          Loading...
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" scoped src='./index.less'></style>
