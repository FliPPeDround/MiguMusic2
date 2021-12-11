<template>
  <div class="section-box">
    <div
      class="item-box"
      v-for="(item, index) in store.songList"
      :key="index"
      @click="handleClick(item.id)"
    >
      <div class="img-box">
        <img :src="item.image" alt="item.title" class="item-img" ref="playlistImg" @load="loadImg" />
        <img class="cf-play" src="./../../assets/btn-play.png" @click.stop="getPlaylist" />
      </div>
      <div class="item-info">{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '../../store/home.js'

// 引用vuex
const store = useStore()

// 测试方法
const toPlaylistPage = (id) => {
  console.log(id)
}
const getPlaylist = () => {
  console.log('getPlaylist')
}

// 处理Click点击事件
const handleClick = (id) => {
  toPlaylistPage(id)
}

</script>

<style lang='scss' scoped>
.section-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 1.5vw;
  row-gap: .7vw;
  .item-box {
    width: calc(12.8vw - 6.67px);
    // width: 12vw;
    cursor: pointer;
    transition: all 0.5s;
    &:nth-child(n + 5) {
      margin-bottom: 0;
    }
    .img-box {
      width: 100%;
      position: relative;
      &:hover {
        .cf-play {
          opacity: 1;
        }
      }
      .item-img {
        width: 100%;
        border-radius: 8px;
      }
      .cf-play {
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 64px;
        height: 64px;
        text-align: center;
        line-height: 64px;
        border-radius: 50%;
        overflow: hidden;
        margin: auto;
        color: #fff;
        cursor: pointer;
        z-index: 3;
        border: 0px solid rgba(232, 26, 133, 0.5);
        transition: border 0.8s ease-out, opacity 0.4s;
        &:hover {
          border: 20px solid rgba(232, 26, 133, 0);
        }
      }
    }
    .item-info {
      display: inline-block;
      white-space: nowrap;
      width: 100%;
      padding-top: 5px;
      text-align: left;
      color: #333;
      vertical-align: bottom;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: color 0.4s;
      &:hover {
        color: #e50078;
      }
    }
  }
}
</style>