<template>
  <div
    v-if="data.breadcrumbs && data.breadcrumbs.length"
    class="page-header"
  >
    <a-page-header
      :sub-title="subTitle"
      :back-icon="false"
      v-bind="extProps"
    >
      <template
        v-if="title"
        #title
      >
        <span
          v-if="showBack"
          class="back-icon"
        >
          <a
            href="#"
            @click.prevent="onBack"
          >
            <icon-arrow-left
              class="g-layout-icon"
            />
          </a>
        </span>
        <span class="ant-page-header-heading-title">{{ title }}</span>
      </template>
      <template #breadcrumb>
        <a-breadcrumb>
          <a-breadcrumb-item
            v-for="(item,index) in data.breadcrumbs"
            :key="item.id"
          >
            <template v-if="index===data.breadcrumbs.length-1 || !item.route">
              {{ item.text }}
            </template>
            <a
              v-else
              @click.prevent="toPage(item)"
            >
              {{ item.text }}
            </a>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </template>
      <template #tags>
        <slot name="tags" />
      </template>
      <template #extra>
        <slot name="extra" />
      </template>
      <template #footer>
        <slot name="footer" />
      </template>
    </a-page-header>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" scoped src='./index.less'></style>
