import Home from './../views/Home.vue'
import SongList from './../views/SongList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/songlist',
    name: 'SongList',
    component: SongList
  }
]

export default routes
