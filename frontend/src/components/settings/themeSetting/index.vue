<template>
  <div class="drawer-item">
    <h3>{{ $t("moreSetting.theme") }}</h3>
    <a-radio-group
      v-model:value="checkedValue"
      :options="ThemeOptions"
    />
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
