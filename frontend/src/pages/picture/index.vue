<template>
  <page-wrapper
    :spinning="spinning"
    :show-back="false"
    :title="图片管理"
  >
    <picture-edit-modal v-model:visible="pictureModalVisible" :video="pictureOptions" />
    <div
      class="video-manage"
      :style="{height: contentHeight}"
    >
      <div class="list g-card-radius">
        <query-condition
          :count="5"
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
          <template #condition4>
            <a-form-item
              label="是否打标签"
              name="label"
            >
            <a-select
              v-model:value="label"
            ></a-select>
            </a-form-item>
          </template>
          <template #condition5>
            <a-form-item
              label="所属分类"
              name="category"
            >
            <a-select
              v-model:value="category"
            ></a-select>
            </a-form-item>
          </template>
        </query-condition>
        <div style="margin-top:16px;">
          <a-list
            :grid="{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 4, xl: 4, xxl: 6, xxxl: 8 }"
            :pagination="pagination"
            :data-source="dataSource"
          >
            <template #renderItem="{ item }">
              <a-list-item>
                <a-card hoverable>
                  <template #cover>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style="height: 100px;" />
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
