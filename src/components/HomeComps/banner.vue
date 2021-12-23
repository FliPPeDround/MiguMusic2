<template>
  <el-carousel
    :interval="4000"
    type="card"
    height="14.1214vw"
    indicator-position="none"
    >
    <el-carousel-item
      v-for="(item, index) in bannerList"
      :key="index">
      <el-image
        class="banner-img"
        ref="imgHight"
        :src="'https:'+item.image"
        @click="handleClick(item.url)"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import { useStore } from './../../store/home.js'
import { computed } from 'vue'
const { shell } = window.require('electron')

const store = useStore()
const bannerList = computed(() => store.bannerList)

// const bannerHight = ref()
// const imgHight = ref(null)
// const imgLoad = async () => {
//   await nextTick(() => {
//     // bannerHight.value = imgHight.value.height
//     console.log(imgHight.value?.height)
//   })
// }

// onMounted(async () => {
//   await imgLoad()
//   window.addEventListener('resize', () => {
//     // bannerHight = imgHight.value
//     console.log(imgHight.value?.height)
//     imgLoad()
//   }, false)
// })

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
