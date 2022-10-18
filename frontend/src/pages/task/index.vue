<template>
  <page-wrapper
    :spinning="spinning"
    :show-back="false"
    :title="任务管理"
  >
    <div
      class="task-manage"
      :style="{height: contentHeight}"
    >
      <div class="list g-card-radius">
          <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" class="row">
            <a-col :span="24">
              <a-card>
                <div>
                  总共1110张图片, 已处理xxx张，未处理xxx张， 进度：80%
                </div>
              </a-card>
            </a-col>
          </a-row>
          <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  class="row">
            <a-col :span="12">
              <a-card title="按区域统计">
                <div>
                  图表1
                </div>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="按地铁线统计">
                <template #extra>
                  <div class="operations">
                    <div class="title">选择地区: </div>   
                    <a-select
                      v-model:value="area"
                    ></a-select>
                  </div>
                </template>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
              </a-card>
            </a-col>
          </a-row>
          <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  class="row">
            <a-col :span="12"> <a-card title="按地铁站统计">
                <template #extra>
                  <div class="operations">
                    <div class="title">地区: </div>   
                    <a-select
                      v-model:value="area"
                    ></a-select>
                    <div class="title">地铁线: </div>   
                    <a-select
                      v-model:value="area"
                    ></a-select>
                  </div>
                </template>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
              </a-card></a-col>
            <a-col :span="12">Col</a-col>
          </a-row>
      </div>
    </div>
  </page-wrapper>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" src='./index.less'></style>
