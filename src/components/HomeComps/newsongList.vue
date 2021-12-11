<template>
  <el-tabs>
    <el-tab-pane label="华语">
      <div class="song-box" v-for="(item, index) in MandarinSongs" :key="index">
        <el-image :src="item.image" class="item-img" alt />
        <div class="song-info">
          <h3>{{ item.songName }}</h3>
          <span
            v-for="(item, index) in item.singers"
            :key="index"
          >
          <span>{{ index > 0 ? ' / ' : '' }}</span>
          <span>{{ item.singerName }}</span>
          </span>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="欧美">
      <div class="song-box" v-for="(item, index) in WesternSongs" :key="index">
        <el-image :src="item.image" class="item-img" alt />
        <div class="song-info">
          <h3>{{ item.songName }}</h3>
          <p v-for="(item, index) in item.singers" :key="index">{{ item.singerName }}</p>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="日韩">
      <div class="song-box" v-for="(item, index) in JapKorSongs" :key="index">
        <el-image :src="item.image" class="item-img" alt />
        <div class="song-info">
          <h3>{{ item.songName }}</h3>
          <p v-for="(item, index) in item.singers" :key="index">{{ item.singerName }}</p>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { useStore } from './../../store/home.js'
import { computed } from 'vue'

const store = useStore()
const MandarinSongs = computed(() => store.newsongList[0]?.items.slice(0, 9))
const WesternSongs = computed(() => store.newsongList[1]?.items.slice(0, 9))
const JapKorSongs = computed(() => store.newsongList[2]?.items.slice(0, 9))

const getsingers = (singers) => {
  singers.map((item) => {
    item.singerName
  })
}
</script>

<style>
.el-tabs__nav {
  float: right;
}
</style>

<style lang="scss" scoped>
.el-tab-pane {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .song-box {
    display: flex;
    .item-img {
    }
  }
}
</style>