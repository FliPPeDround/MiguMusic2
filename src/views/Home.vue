<template>
  <h2>歌单推荐</h2>
  <h2>排行榜</h2>
  <el-button @click="loginIt">登陆</el-button>
  <img :src="qrcUrl" alt="二维码" />
</template>

<script setup>
const { ipcRenderer }  = window.require('electron')
import { ref } from 'vue'
const qrcUrl = ref({})
const loginIt = async () => {
  qrcUrl.value = ipcRenderer.sendSync('login')
  console.log(qrcUrl.value)
}

</script>

<style>
h2 {
  text-align: left;
  color: #333;
  font-size: 24px;
}
</style>