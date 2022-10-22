<template>
   <a-modal
      v-model:visible="showDialog"
      title="Upload Picture"
      width = "600px"
      height = "880px"
      :footer="null"
    >
    <a-spin :spinning="spinning">
      <div class="picture-upload">
        <a-form
          :model="formState"
          name="validate_other"
          @finish="handleSubmit"
          v-bind="formItemLayout"
        >
        <a-form-item
          name="title"
          label="标题:"
          :rules="[{ required: true, message: 'Please input title!' }]"
        >
        <a-input v-model:value="formState.title" />
      </a-form-item>
      <a-form-item
        name="area"
        label="地区:"
        has-feedback
        :rules="[{ required: true, message: 'Please select area!' }]"
      >
        <a-select
          v-model:value="formState.area"
          :options="areaOptions"
          @change="handleAreaChange"
        ></a-select>
      </a-form-item>
      <a-form-item
        name="line"
        label="地铁线"
        has-feedback
        :rules="[{ required: true, message: 'Please select line!' }]"
      >
        <a-select
          v-model:value="formState.line"
          :options="lineOptions"
          @change="handleLineChange"
        ></a-select>
      </a-form-item>
      <a-form-item
        name="line"
        label="地铁站"
        has-feedback
        :rules="[{ required: true, message: 'Please select station!' }]"
      >
        <a-select
          v-model:value="formState.station"
          :options="stationOptions"
        ></a-select>
      </a-form-item>
    
      <a-form-item name="file" label="图片" extra="" :rules="[{ required: true, message: 'Please select file!' }]">
        <a-upload
          v-model:fileList="fileList"
          :max-count="1"
          name="file"
          list-type="picture"
          :customRequest="handleCustomRequest"
          @change="handleFileChange"
        >
          <a-button>
            <template #icon><icon-upload /></template>
            Click to upload
          </a-button>
        </a-upload>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 24}" style="text-align:center;">
        <a-button @click="handleCancel" class="cancel-btn">Cancel</a-button>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
      </div>
    </a-spin>
  </a-modal>

</template>
<script src="./index.ts" lang="ts"></script>
<style lang="less" src='./index.less'></style>