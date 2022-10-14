<template>
  <div>
    <div v-if="data.length===0">
      <img
        v-if="emptyImage"
        :src="emptyImage"
        alt="not found"
      >
      <div v-if="emptyText">
        {{ emptyText }}
      </div>
    </div>
    <a-list
      v-else
      class="list"
    >
      <a-list-item
        v-for="(item,index) in data"
        :key="item.key||index"
        :class="item.read?'item read':'item'"
        @click="handleItemClick"
      >
        <a-list-item-meta class="meta">
          <template
            v-if="item.avatar"
            #avatar
          >
            <span class="icon-element">
              <a-avatar
                v-if="typeof item.avatar === 'string'"
                class="avatar"
                :src="item.avatar"
              />
              <template v-else>
                {{ item.avatar }}
              </template>
            </span>
          </template>
          <template #title>
            <div class="title">
              {{ item.title }}
              <div class="extra">
                {{ item.extra || '' }}
              </div>
            </div>
          </template>
          <template #description>
            <div>
              <div
                class="description"
                :title="item.description"
              >
                {{ item.description || '' }}
              </div>
              <div class="datetime">
                {{ item.datetime || '' }}
              </div>
            </div>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
    <div
      v-if="data.length>0"
      class="clear"
      style="text-align:center;"
      @click="onClear"
    >
      清空
    </div>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" scoped src='./index.less'></style>
