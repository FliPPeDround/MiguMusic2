import { defineStore } from "pinia"
import axios from "axios"

export const useStore = defineStore({
  id: "homeState",
  state: () => ({
    bannerList: [],
    songList: [],
    newsongList: [],
    newalbum: []
  }),
  actions: {
    async requestMigu () {
      const bannerRes = await axios.get('https://m.music.migu.cn/migumusic/h5/home/banner')
      this.bannerList = bannerRes.data.data

      const songListRes = await axios.get('https://m.music.migu.cn/migumusic/h5/home/songlist')
      this.songList = songListRes.data.data[0].items

      const newsongRes = await axios.get('https://m.music.migu.cn/migumusic/h5/home/newsong')
      this.newsongList = newsongRes.data.data

      const newalbumRes = await axios.get('https://m.music.migu.cn/migumusic/h5/home/newalbum')
      this.newalbumList = newalbumRes.data.data
    }
  }
})
