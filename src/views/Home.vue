<template>
  <banner/>
  <h2>推荐歌单</h2>
  <songList/>
  <h2>新歌速递</h2>
  <newsongList/>
  <h2>新碟上架</h2>
  <newalbumList/>
</template>

<script setup>
import banner from './../components/HomeComps/banner.vue'
import songList from '../components/HomeComps/songList.vue'
import newsongList from '../components/HomeComps/newsongList.vue'
import newalbumList from '../components/HomeComps/newalbumList.vue'
</script>

<style>
h2 {
  text-align: left;
  color: #333;
  font-size: 24px;
  margin: 1vw 0;
}
</style>
