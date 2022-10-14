<template>
  <a-form
    :ref="refForm"
    layout="horizontal"
    :model="model"
    :rules="rules"
    style="margin-right:0px;"
    v-bind="otherProps"
  >
    <template v-for="row in rows">
      <a-row
        v-if="showRow(row)"
        :key="row"
        :gutter="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]"
      >
        <a-col
          v-for="cell in 3"
          :key="`${row}-${cell}`"
          :span="8"
        >
          <slot
            v-if="showCellSlot(row,cell)"
            :name="`condition${(row-1)*3+cell}`"
          />
          <a-form-item
            v-else-if="showCellButtons(row,cell)"
          >
            <a-button
              type="primary"
              :style="{ marginLeft: '10px' }"
              @click="handleQuery"
            >
              查询
              <template #icon>
                <icon-search />
              </template>
            </a-button>
            <a-button
              :style="{ marginLeft: '10px' }"
              @click="handleReset"
            >
              重置
              <template #icon>
                <icon-clear />
              </template>
            </a-button>
            <a-button
              v-if="rows>1"
              type="link"
              @click="toggleForm"
            >
              {{ collapsed ? '展开' : '收缩' }}
              <template #icon>
                <icon-down
                  v-show="collapsed"
                  style="font-size:16px"
                />
                <icon-up
                  v-show="!collapsed"
                  style="font-size:16px"
                />
              </template>
            </a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </template>
    <a-row
      v-if="showButtons()"
      :gutter="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]"
      type="flex"
      justify="end"
    >
      <a-col
        :span="6"
        justify="end"
        type="flex"
      >
        <a-button
          type="primary"
          @click="handleQuery"
        >
          查询
          <template #icon>
            <icon-search />
          </template>
        </a-button>
        <a-button
          :style="{ marginLeft: '10px' }"
          @click="handleReset"
        >
          重置
          <template #icon>
            <icon-clear />
          </template>
        </a-button>
        <a-button
          v-if="rows>1"
          type="link"
          @click="toggleForm"
        >
          {{ collapsed ? '展开' : '收缩' }}
          <template #icon>
            <icon-down
              v-show="collapsed"
              style="font-size:16px"
              @click="toggleForm"
            />
            <icon-up
              v-show="!collapsed"
              style="font-size:16px"
              @click="toggleForm"
            />
          </template>
        </a-button>
      </a-col>
    </a-row>
  </a-form>
</template>

<script src="./index.ts" lang="ts"></script>
