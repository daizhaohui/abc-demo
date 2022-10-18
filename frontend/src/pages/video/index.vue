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
          :model="formState"
          @reset="onReset"
          @query="onQuery"
        >
          <template #condition1>
            <a-form-item
              label="地区"
              name="area"
            >
            <a-select
              v-model:value="area"
            ></a-select>
            </a-form-item>
          </template>
          <template #condition2>
            <a-form-item
              label="地铁线"
              name="line"
            >
            <a-select
              v-model:value="line"
            ></a-select>
            </a-form-item>
          </template>
          <template #condition3>
            <a-form-item
              label="地铁站"
              name="station"
            >
            <a-select
              v-model:value="station"
            ></a-select>
            </a-form-item>
          </template>
        </query-condition>
        <div style="margin-top:16px;">
          <a-list
            :grid="{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 3, xxxl: 4 }"
            :pagination="pagination"
            :data-source="dataSource"
          >
            <template #renderItem="{ item }">
              <a-list-item>
                <a-card hoverable>
                  <template #cover>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style="height: 300px;" />
                  </template>
                  <template #actions>
                    <icon-delete />
                    <icon-edit  @click="handleEdit(item)"/>
                    <icon-ellipsis  />
                  </template>
                  <a-card-meta :title="item.title">
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
