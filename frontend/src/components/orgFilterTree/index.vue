<template>
  <a-card
    title="机构树"
    :class="classNames"
  >
    <template #extra>
      <a-input-search
        v-model:value="searchValue"
        placeholder="机构名称"
        style="width: 100%;margin-left:10px;"
      />
    </template>
    <a-directory-tree
      v-model:expandedKeys="expandedKeys"
      :tree-data="treeData"
      :auto-expand-parent="autoExpandParent"
      multiple
      :replace-fields="{children:'children', title:'text', key:'id',value: 'id'}"
      @select="handleSelectTreeNode"
      @expand="onExpand"
    >
      <template #title="{ text }">
        <span v-if="text.indexOf(searchValue) > -1">
          {{ text.substr(0, text.indexOf(searchValue)) }}
          <span style="color: #f50">{{ searchValue }}</span>
          {{ text.substr(text.indexOf(searchValue) + searchValue.length) }}
        </span>
        <span v-else>{{ text }}</span>
      </template>
    </a-directory-tree>
  </a-card>
</template>
<script src="./index.ts" lang="ts"></script>
