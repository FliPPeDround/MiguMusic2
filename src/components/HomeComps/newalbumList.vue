<template>
  <div class="album-list">
    <div class="album-box" v-for="(item, index) in store.newalbumList.slice(0, 6)" :key="index">
      <el-image :src="'https:'+item.image" class="item-img" alt fit="fill"/>
      <div class="album-info">
        <h3 class="album-name">{{item.albumName}}</h3>
        <div class="singer-name">
          <span
              v-for="(item, index) in item.singers"
              :key="index"
            >
            <span>{{ index > 0 ? ' / ' : '' }}</span>
            <span class="singer-txt">{{ item.singerName }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from './../../store/home.js'

const store = useStore()

</script>

<style lang="scss" scoped>
.album-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 1.5vw;
  .album-box {
    width: calc(12.8vw - 6.67px);
    position: relative;
    .item-img {
      width: calc(12vw - 6.67px);
      z-index: 1;
      cursor: pointer;
      border-radius: 8px;
    }
    &::after {
        content:'';
        width: calc(12vw - 6.67px);
        height: calc(12vw - 6.67px);
        position: absolute;
        right: -0.8vw;
        top: 0px;
        background: url('./../../assets/album.png') no-repeat;
        background-size: auto 100%;
      }
    .album-info {
      display: inline-block;
      white-space: nowrap;
      width: 100%;
      padding-top: 5px;
      text-align: left;
      color: #333;
      vertical-align: bottom;
      font-size: 1vw;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: color 0.4s;
      cursor: pointer;
      .singer-name {
      .singer-txt {
        &:hover {
          color: #e50078;
        }
      }
    }

    }
  }
}

</style>
