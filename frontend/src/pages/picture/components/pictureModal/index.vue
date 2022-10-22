<template>
   <a-modal
      v-model:visible="showDialog"
      title="上传图片"
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
        <div class="clear-btn"><a-button @click="handleClearMarks"  type="primary" :disabled="rectMarks.length<=0" >清空标记框</a-button></div>
      </div>
      <div class="picture" v-if="picture && picture.url">
        <frame-mark :width="pictureWidth" :height="pictureHeight" :image="picture.url"  v-model:marks="rectMarks"/>
      </div>
    </div>
    </a-modal>

</template>
<script src="./index.ts" lang="ts"></script>
<style lang="less" src='./index.less'></style>