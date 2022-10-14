<template>
  <a-drawer
    :title="$t('moreSetting.title')"
    placement="right"
    :closable="false"
    :visible="isVisible"
    width="480"
    :z-index="999999"
    @close="togglerContent"
  >
    <div class="drawer-settings content">
      <div
        v-for="comp in SettingItems"
        :key="comp.name"
      >
        <component
          :is="comp.name"
          :value="settings[comp.reactiveName]"
        />
        <a-divider />
      </div>
    </div>
    <div
      :style="{
        position: 'absolute',
        right: 0,
        bottom: 0,
        height: '64px',
        width: '100%',
        borderTop: '1px solid #e9e9e9',
        padding: '10px 16px',
        background: '#fff',
        textAlign: 'right',
        zIndex: 1,
        textAlign: 'center'
      }"
    >
      <popconfirm
        :title="$t('confirm.exit')"
        @confirm="onConfirm"
      >
        <a-button
          type="primary"
          style="width:100%"
        >
          {{ $t("common.exit") }}
          <template #icon>
            <icon-logout />
          </template>
        </a-button>
      </popconfirm>
    </div>
  </a-drawer>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" src='./index.less'></style>
