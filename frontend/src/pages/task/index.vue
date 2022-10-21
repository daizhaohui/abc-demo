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
          <a-row  class="row">
            <a-col :span="24">
              <a-card>
                <div class="total-statistics">
                  总共:<span>{{totalStatistics.total}},</span>已处理:<span>{{totalStatistics.labeled}},</span>
                  未处理:<span>{{totalStatistics.total-totalStatistics.labeled}},</span>总进度：<span>{{ Math.round(100*totalStatistics.labeled/totalStatistics.total) }}%</span>
                </div>
              </a-card>
            </a-col>
          </a-row>
          <a-row class="row">
            <a-col :span="24">
              <a-card title="按地区统计">
                <echart-statistics id="areaContainer" :option="areaChartOption"  style="width:100%;height:360px;" />
              </a-card>
            </a-col>
          </a-row>
          <a-row  class="row">
            <a-col :span="24">
              <a-spin :spinning="lineSpinning">
                <a-card title="按地铁线统计">
                  <template #extra>
                      <div class="operations">
                        <div class="title">选择地区: </div>   
                        <a-select
                          v-model:value="lineArea"
                          :options="areaOptions"
                          @change="handleLineAreaChange"
                        ></a-select>
                      </div>
                  </template>
                  <echart-statistics id="lineContainer" :option="lineChartOption"  style="width:900px; height:360px;"/>
                </a-card>
              </a-spin>
            </a-col>
          </a-row>
          <a-row  class="row">
            <a-col :span="24">
              <a-spin :spinning="stationSpinning">
              <a-card title="按地铁站统计">
                <template #extra>
                  <div class="operations">
                    <div class="title">地区: </div>   
                    <a-select
                      v-model:value="stationArea"
                      :options="areaOptions"
                      @change="handleStationAreaChange"
                    ></a-select>
                    <div class="title">地铁线: </div>   
                    <a-select
                      v-model:value="stationLine"
                      :options="lineOptions"
                      @change="handleStationLineChange"
                    ></a-select>
                  </div>
                </template>
                <echart-statistics id="stationContainer" :option="stationChartOption"  style="width:100%; height:360px;" />
              </a-card></a-spin></a-col>
          </a-row>
      </div>
    </div>
  </page-wrapper>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" src='./index.less'></style>
