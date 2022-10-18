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
        <a-select
          v-model:value="value"
          show-search
          placeholder="Select a person"
          style="width: 200px"
          :options="options"
          :filter-option="filterOption"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
          ></a-select>
      </div>
      <div class="picture">
        <a-image
            style="width: 360px; height: 480px;"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
      </div>
    </div>
    </a-modal>

</template>
<script src="./index.ts" lang="ts"></script>
<style lang="less" src='./index.less'></style>