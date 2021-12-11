<template>
  <banner/>
  <h2>推荐歌单</h2>
  <songList/>
  <h2>新歌速递</h2>
</template>

<script setup>
import banner from './../components/HomeComps/banner.vue'
import songList from '../components/HomeComps/songList.vue'
</script>

<style>
h2 {
  text-align: left;
  color: #333;
  font-size: 24px;
}
</style>