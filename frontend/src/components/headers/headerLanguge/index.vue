<template>
  <a-tooltip
    :title="$t('topRightMenu.language')"
    placement="bottomRight"
  >
    <a-dropdown
      placement="bottomRight"
      trigger="click"
      class="action"
    >
      <span :class="['right-content-item',{'right-content-dark':theme==='dark'||theme===''}]">
        <icon-global class="g-layout-icon" />
      </span>
      <template #overlay>
        <a-menu>
          <a-menu-item
            v-for="language in languages"
            :key="language.value"
            @click="handleSwtichLanguge(language.value)"
          >
            <div style="display:inline-block;width:20px;">
              <icon-checkout v-show="checkedValue===language.value" />
            </div>
            <div style="display:inline-block;">
              {{ language.label }}
            </div>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-tooltip>
</template>

<script src="./index.ts" lang="ts"></script>
