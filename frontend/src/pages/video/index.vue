<template>
  <page-wrapper
    :spinning="spinning"
    :show-back="false"
    :title="视频管理"
  >
    <video-modal v-model:visible="videoModalVisible" :video="videoOptions" />
    <div
      class="video-manage"
      :style="{height: contentHeight}"
    >
      <div class="list g-card-radius">
        <query-condition
          :count="3"
          :model="queryState"
          @reset="onReset"
          @query="onQuery"
        >
          <template #condition1>
            <a-form-item
              label="地区"
              name="area"
            >
            <a-select
              v-model:value="queryState.area"
              :options="areaOptions"
              @change="handleAreaChange"
            ></a-select>
            </a-form-item>
          </template>
          <template #condition2>
            <a-form-item
              label="地铁线"
              name="line"
            >
            <a-select
              v-model:value="queryState.line"
              :options="lineOptions"
              @change="handleLineChange"
            ></a-select>
            </a-form-item>
          </template>
          <template #condition3>
            <a-form-item
              label="地铁站"
              name="station"
            >
            <a-select
              v-model:value="queryState.station"
              :options="stationOptions"
            ></a-select>
            </a-form-item>
          </template>
        </query-condition>
        <div style="margin-top:16px;">
          <a-list
            :grid="{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 4, xxxl: 6 }"
            :pagination="pagination"
            :data-source="dataSource"
          >
            <template #renderItem="{ item }">
              <a-list-item>
                <a-card hoverable>
                  <template #cover>
                    <img alt="example" :src="item.thumbnail" style="height: 200px;" />
                  </template>
                  <template #actions>
                    <icon-delete />
                    <icon-edit  @click="handleEdit(item)"/>
                    <icon-ellipsis  />
                  </template>
                  <a-card-meta :title="item.title || ''">
                    <template #description></template>
                  </a-card-meta>
                </a-card>
              </a-list-item>
            </template>
          </a-list> 
        </div>
      </div>
    </div>
  </page-wrapper>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" src='./index.less'></style>
