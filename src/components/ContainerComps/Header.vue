<template>
  <el-dialog
      v-model="loginDialog"
      title="扫码登陆"
      width="20%"
      center
      destroy-on-close
      @close="handleClose"
    >
    <img
      class="qrcode"
      :src="qrcUrl"
      alt="二维码">
  </el-dialog>
  <div class="header-box">
    <div class="logo-box">
      <img src="./../../assets/logo.png">
    </div>
    <el-popover
      v-model:visible="visible"
      placement="bottom"
      trigger="manual"
      :width="300"
    >
      <div>歌曲-歌手</div>
      <template #reference>
        <Input
          v-model="searchWord"
          @focus="onFocus"
          @input="onInput"
          @blur="onBlur"/>
      </template>
    </el-popover>
    <div class="methods-box">
      <el-avatar :icon="UserFilled" :size="30" @click="login" class="login-bar"></el-avatar>
      <div class="frame-box">
        <el-icon @click="minimize"><Minus /></el-icon>
        <el-icon @click="close"><Close /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import Input from './../CommonComps/mgInput/mg-input.vue'
import { Minus, Close, UserFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'
const { ipcRenderer } = window.require('electron')

// search-box
const searchWord = ref('')
const visible = ref(false)
const onFocus = () => {
  visible.value = true
}
const onInput = () => {
}
const onBlur = () => {
  visible.value = false
}

// login
const loginDialog = ref(false)
const qrcUrl = ref('')
const login = () => {
  qrcUrl.value = ipcRenderer.sendSync('login')
  loginDialog.value = true
}
const handleClose = () => {
  ipcRenderer.send('dialogClosed')
}

// frame-box
const minimize = () => {
  ipcRenderer.send('minimize')
}
const close = () => {
  ipcRenderer.send('close')
}
</script>

<style lang="scss" scoped>
.header-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-box {
    height: 40px;
    display: flex;
    align-items: center;
    img {
      height: 4vh;
      pointer-events:none;
      cursor: pointer;
    }
  }

  .methods-box {
    height: 40px;
    width: 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .login-bar {
      -webkit-app-region: no-drag;
    }
    .frame-box {
      height: 40px;
      display: flex;
      align-items: center;
      -webkit-app-region: no-drag;
      i {
        color: #999999;
        font-size: 18px;
        &:hover {
          color: #e50076;
        }
      }
      i + i {
        padding-left: 10px;
      }
    }
  }
}
</style>

<!-- 修改el-ui默认样式 -->
<style lang='scss'>
.el-dialog {
  .el-dialog__body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 !important;
    .qrcode {
      object-fit: fill;
      width: 20vw;
      height: 20vw;
      border-radius: 8px;
    }
  }
}

</style>
