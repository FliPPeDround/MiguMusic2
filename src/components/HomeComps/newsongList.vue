<template>
  <el-tabs>
    <el-tab-pane :label="item.groupName" v-for="(item, index) in store.newsongList" :key="index">
      <div class="song-box" v-for="(item, index) in item.items.slice(0, 9)" :key="index">
        <el-image :src="item.image" class="item-img" alt fit="fill"/>
        <div class="song-info">
          <h3>{{ item.songName }}</h3>
          <span
            v-for="(item, index) in item.singers"
            :key="index"
          >
            <span>{{ index > 0 ? ' / ' : '' }}</span>
            <span class="singer-txt">{{ item.singerName }}</span>
          </span>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { useStore } from './../../store/home.js'

const store = useStore()

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
  column-gap: 1.5vw;
  row-gap: .4vw;
  .song-box {
    width: calc(27.1vw - 13.33px);
    display: grid;
    grid-template-columns: 1fr 4fr;
    column-gap: 1.5vw;
    align-items: baseline;
    .item-img {
      cursor: pointer;
      border-radius: 8px;
    }
    .song-info {
      cursor: pointer;
      font-size: 1vw;
      color: #333;
      .singer-txt {
        &:hover {
          color: #e50078;
        }
      }
    }
  }
}
</style>
