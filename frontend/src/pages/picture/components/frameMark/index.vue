<template>
 <div class="select-frame">
  <div id="img-content" :style="contentStyle">
    <img id="labeled-image" :src="image"  style="width:100%;height:100%;"/>
    <canvas id="canvas" ref="refCanvas"></canvas>
  </div>
 </div>
</template>
<script src="./index.ts" lang="ts"></script>
<style lang="less" src='./index.less'></style>