<template>
  <a-table
    v-bind="newProps"
    :pagination="tablePagination"
  >
    <template
      v-for="slot in slotNames"
      #[slot]="data"
    >
      <slot
        v-bind="{...data}"
        :name="slot"
      />
    </template>
    <template
      v-if="showFooter"
      #footer
    >
      <slot name="footer" />
    </template>
  </a-table>
</template>

<script src="./index.ts" lang="ts"></script>
