<template>
  <el-button @click="login">登陆</el-button>
  <img :src="qrcUrl" alt="二维码">
</template>

<script setup>
import { ref } from 'vue'

const { ipcRenderer }  = window.require('electron')

const qrcUrl = ref('')
const login = () => {
  qrcUrl.value = ipcRenderer.sendSync('login')
  console.log(qrcUrl.value)
}
</script>