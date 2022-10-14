<template>
  <div class="drawer-item">
    <h3>{{ $t("moreSetting.other") }}</h3>
    <a-row>
      <a-col :span="8">
        {{ $t("moreSetting.footer") }}
        <a-switch
          v-model:checked="showFooter"
          :checked-value="1"
          :un-checked-value="0"
          :checked-children="$t('common.display')"
          :un-checked-children="$t('common.hide')"
          @change="onShowFooterChange"
        />
      </a-col>
      <a-col :span="12">
        {{ $t("moreSetting.mutiTab") }}
        <a-switch
          v-model:checked="isTabsMode"
          :checked-value="1"
          :un-checked-value="0"
          :checked-children="$t('common.open')"
          :un-checked-children="$t('common.close')"
          @change="onTabsModeChange"
        />
      </a-col>
      <a-col :span="4" />
    </a-row>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
