<template>
  <a-tree-select
    v-model:value="selectedValue"
    show-search
    :tree-data="treeData"
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="请选择菜单"
    tree-node-filter-prop="title"
    search-placeholder="请输入菜单名称"
    :replace-fields="{children:'children', title:'text', key:'id', value: 'id' }"
    allow-clear
    tree-default-expand-all
    :auto-load-data="autoLoadData"
    @change="onChange"
    @select="onSelect"
  >
    <template #suffixIcon>
      <icon-smile />
    </template>
  </a-tree-select>
</template>
<script src="./index.ts" lang="ts"></script>
