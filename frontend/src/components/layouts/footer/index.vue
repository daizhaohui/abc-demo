<template>
  <div class="main-layout-footer">
    <div class="global-footer">
      <div class="links">
        <a
          v-for="link in links"
          :key="link.key"
          :title="link.title"
          :target="link.blankTarget ? '_blank' : '_self'"
          :href="link.href"
        >
          {{ link.title }}
        </a>
        <div class="copyright">
          <div>
            Copyright
            <icon-copyright-circle
              class="g-layout-icon"
              style="font-size:14px;"
            /> 2021 Daizhaohui
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" scoped src='./index.less'></style>
