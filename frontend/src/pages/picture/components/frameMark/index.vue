<template>
 <div class="select-frame">
    <div id="content" :style="contentStyle">
      <div id="img-content">
        <img id="labeled-image" :src="image" />
        <canvas id="canvas" ref="refCanvas"></canvas>
      </div>
    </div>
 </div>
</template>
<script src="./index.ts" lang="ts"></script>
<style lang="less" src='./index.less'></style>