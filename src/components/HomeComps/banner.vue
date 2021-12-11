<template>
  <el-carousel
    :interval="4000"
    type="card"
    height="138px"
    indicator-position="none"
    >
    <el-carousel-item
      v-for="(item, index) in store.bannerList"
      :key="index">
      <img
        class="banner-img"
        ref="imgHight"
        :src="'https:'+item.image"
        @click="handleClick(item.url)"
        @load="imgLoad"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import { useStore } from './../../store/home.js'
const { shell } = window.require('electron')

const store = useStore()

// 测试方法
const playMusic = (cid) => {
  console.log(cid)
}
const toAlbumPage = (cid) => {
  console.log(cid)
}

// banner点击事件处理
const handleClick = (url) => {
  switch (url.split('/')[5]) {
    case 'song':
      playMusic(url.split('/')[6])
      break
    case 'album':
      toAlbumPage(url.split('/')[6])
      break
    default:
      shell.openExternal(url)
  }
}
</script>

<style scoped lang="scss">
.banner-img{
  width: 100%;
  border-radius: 8px;
}
</style>
