<template>
   <a-modal
      v-model:visible="showDialog"
      title="Video Palyer"
      width = "800px"
      height = "600px"
      @ok="handleOk"
    >
      <div style="height:100%; height:100%">
        <video-player :url="video && video.url" :poster="video && video.url" ></video-player>
      </div>
    </a-modal>
</template>
<script src="./index.ts" lang="ts"></script>