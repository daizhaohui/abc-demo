<template>
  <page-wrapper
    :spinning="spinning"
    :show-back="false"
    :title="图片管理"
  >
    <picture-modal v-model:visible="pictureModalVisible" :id="pictureId"  @onUpdate="handleOnUpdate"/>
    <upload-modal v-model:visible="uploadModalVisible" @onSuccess="handleUpload"/>
    <div
      class="picture-manage"
      :style="{height: contentHeight}"
    >
      <div class="list g-card-radius">
        <query-condition
          :count="6"
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
          <template #condition4>
            <a-form-item
              label="是否打标签"
              name="labeled"
            >
            <a-select
              v-model:value="queryState.labeled"
              :options="labeledOptions"
            ></a-select>
            </a-form-item>
          </template>
          <template #condition5>
            <a-form-item
              label="所属分类"
              name="category"
            >
            <a-select
              v-model:value="queryState.category"
              :options="categoryOptions"
            ></a-select>
            </a-form-item>
          </template>
          <template #condition6>
            <a-form-item
              label="关键字"
              name="key"
            >
            <a-input v-model:value="queryState.key" />
            </a-form-item>
          </template>
        </query-condition>
        <div style="margin-top:">
          <a-button
              type="primary"
              @click="handleShowUpload"
            >
              上传图片
              <template #icon>
                <icon-upload />
              </template>
          </a-button>
        </div>
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
                    <img alt="example" :src="item.thumbnail" style="height: 200px;"  @click="handleEdit(item)"/>
                    <div style="z-index:9999';position: absolute;top:6px; left: 6px;" v-if="item.labeled+'' ==='1'">
                      <img :src="$Images.Label" style="height: 30px; width: 30px;" alt="已打标签"/>
                    </div>
                  </template>
                  <template #actions>
                    <a-popconfirm title="确定删除该图片吗?" @confirm="handleDelete()" okText="确定" cancelText="取消">
                      <icon-delete />
                    </a-popconfirm>
                    <icon-edit  @click="handleEdit(item)"/>
                    <icon-ellipsis  alt="开发中..."/>
                  </template>
                  <a-card-meta :title="item.title||''">
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
