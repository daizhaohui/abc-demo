<template>
   <a-modal
      v-model:visible="showDialog"
      title="Label Picture"
      width = "800px"
      height = "880px"
      @ok="handleOk"
    >
    <div class="picture-edit">
      <div class="operations">
        <div class="title"> 所属分类:</div>
        <div>
          <a-select
          v-model:value="category"
          :options="categoryOptions"
          style="width: 200px;"
        ></a-select>
        </div>
        <div class="title">关键字:</div>
        <div><a-input  v-model:value="key"/></div>
      </div>
      <div class="picture">
        <a-image
            style="width: 480; height: 480px;"
            :src="picture && picture.url"
          />
      </div>
    </div>
    </a-modal>

</template>
<script src="./index.ts" lang="ts"></script>
<style lang="less" src='./index.less'></style>