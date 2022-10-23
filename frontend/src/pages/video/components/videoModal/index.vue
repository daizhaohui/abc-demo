<template>
   <a-modal
      v-model:visible="showDialog"
      title="Video Palyer"
      width = "800px"
      height = "600px"
      @ok="handleOk"
    >
    <video-player :url="url" :poster="poster" :visible="showDialog"></video-player>
    </a-modal>
</template>
<script src="./index.ts" lang="ts"></script>