<template>
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
const visible = ref(false)
const onFocus = () => {
  console.log('this is focus')
  visible.value = true
}
const onInput = () => {
  console.log('this is input')
}
const onBlur = () => {
  console.log('this is blur')
  visible.value = false
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
