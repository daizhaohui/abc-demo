<template>
  <div class="drawer-item">
    <h3>{{ $t("moreSetting.nav") }}</h3>
    <a-radio-group
      v-model:value="checkedValue"
      :options="NavOptions"
    />
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
