<template>
  <a-button
    type="link"
    size="small"
    style="marginLeft:6px;padding: 0 0!important;"
    :disabled="disableButton"
    @click="onClick"
  >
    <slot />
    <template
      v-if="name"
      #icon
    >
      <component
        :is="name"
        class="g-s-icon"
        style="marginRight:-4px;"
      />
    </template>
  </a-button>
</template>

<script src="./index.ts" lang="ts"></script>
