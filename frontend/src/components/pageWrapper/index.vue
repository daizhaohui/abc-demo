<template>
  <div
    :class="['page-wrapper']"
  >
    <div ref="refPageHeader">
      <page-header
        v-if="pageHeaderIsVisible"
        :title="title"
        :sub-title="subTitle"
        :show-back="showBack"
        @pageHeaderBack="onBack"
      >
        <!--请参照ant-design-vue的PageHeader(a-page-header)-->
        <template #tags>
          <slot name="tags" />
        </template>
        <template #backIcon>
          <slot name="backIcon" />
        </template>
        <template #extra>
          <slot name="extra" />
        </template>
        <template #footer>
          <slot name="footer" />
        </template>
      </page-header>
    </div>
    <a-spin :spinning="spinning">
      <div
        :style="contentStyle"
      >
        <slot />
      </div>
    </a-spin>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" scoped src='./index.less'></style>
