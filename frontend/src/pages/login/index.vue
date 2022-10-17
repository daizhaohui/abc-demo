<template>
  <div class="login-container">
    <canvas
      id="canvas"
      width="933"
      height="878"
    />
    <div class="content">
      <div class="top">
        <div class="header">
          <img
            alt="logo"
            class="logo"
            :src="$Images.Logo"
          >
          <span class="title">
            Demo
          </span>
        </div>
        <div class="desc" />
      </div>
      <div class="login-form">
        <a-form
          ref="formRef"
          :model="formState"
          :rules="rules"
        >
          <a-tabs
            :animated="false"
            :default-active-key="activeKey"
            @change="onSwitchTab"
          >
            <a-tab-pane
              key="1"
              tab="账户密码登录"
            >
              <a-form-item
                name="userId"
              >
                <a-input
                  v-model:value="formState.userId"
                  placeholder="用户名"
                  size="large"
                >
                  <template #prefix>
                    <icon-user class="g-layout-icon" />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                name="password"
              >
                <a-input
                  v-model:value="formState.password"
                  type="password"
                  placeholder="密码"
                  size="large"
                >
                  <template #prefix>
                    <icon-lock class="g-layout-icon" />
                  </template>
                </a-input>
              </a-form-item>
            </a-tab-pane>
            <a-tab-pane
              key="2"
              tab="手机号登录"
            >
              <a-form-item
                name="mobile"
              >
                <a-input
                  v-model:value="formState.mobile"
                  placeholder="手机号"
                  size="large"
                >
                  <template #prefix>
                    <icon-phone class="g-layout-icon" />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item name="captcha">
                <a-row
                  :gutter="8"
                  style="padding: 0px;"
                >
                  <a-col :span="16">
                    <a-input
                      v-model:value="formState.captcha"
                      placeholder="验证码"
                      size="large"
                    >
                      <template #prefix>
                        <icon-key class="g-layout-icon" />
                      </template>
                    </a-input>
                  </a-col>
                  <a-col :span="8">
                    <send-captcha-button
                      v-model="start"
                      :second="60"
                      class="get-captcha"
                      @click="send"
                    />
                  </a-col>
                </a-row>
              </a-form-item>
            </a-tab-pane>
          </a-tabs>
          <div>
            <a-checkbox
              v-model:checked="formState.rememberMe"
              @change="onSwithLogin"
            >
              记住密码
            </a-checkbox>
            <a
              style="float:right;"
              href="#"
            > 忘记密码 </a>
          </div>
          <a-form-item>
            <a-button
              size="large"
              class="submit"
              type="primary"
              :disabled="disableLoginButton"
              @click="onSubmit"
            >
              登录
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="login-copyright">
      Copyright
      <icon-copyright-circle
        class="g-layout-icon"
        style="font-size:14px;"
      /> 2021 Daizhaohui
    </div>
  </div>
</template>
<script src="./index.ts" lang="ts"></script>
<style lang="less" src='./index.less'></style>
