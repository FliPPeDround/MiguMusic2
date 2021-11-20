<template>
  <div class="header-box">
    <div class="logo-box">
      <img src="./../../assets/logo.png">
    </div>
    <Input v-model="searchWord"/>
    <div class="frame-box">
      <el-icon @click="minimize"><Minus /></el-icon>
      <el-icon @click="close"><Close /></el-icon>
    </div>
  </div>
</template>

<script setup>
import Input from './../CommonComps/mgInput/mg-input.vue'
import { Minus, Close } from '@element-plus/icons'
import { ref } from 'vue'
const { ipcRenderer }  = window.require('electron')

const searchWord = ref('')

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
</style>
