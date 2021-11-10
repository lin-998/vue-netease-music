import Vue from 'vue'
import VueRouter from 'vue-router'
import Mv from "../views/mv/Mv";
import  MvDetail  from "../views/mv/MvDetail";
import DisCovery from "../views/discovery/index";
import AllMusicList from "../views/musiclist/allmusiclist"
import NewSongs from "../views/newsong/newsongs"
import MusicPlayDetail from "../views/musiclistDetail/index"
import SearchDetail from "../views/search-detail/search-detail.vue";
import SearchSongs from "../views/search-detail/childsPage/search-songs";
import SearchMvs from "../views/search-detail/childsPage/search-mvs"
import SearchPlaylist from "../views/search-detail/childsPage/search-playlist"
import CollectMusic from "../views/collectMusic"
/**解决router重复报错 */
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/discovery'
    },
    
  {
    path: '/search-detail/:keywords',
    name: 'search-detail',
    component: SearchDetail,
    children:[
      {path:'/',
    redirect:'songs'
    },
    {
      path:'songs',
      component:SearchSongs,
    },
    {
      path:'playlist',
      component:SearchPlaylist,
    },
    {
      path:'mv',
      component:SearchMvs,
    },
    ]
  },
  {
    path: '/mv',
    name:'mv',
    component: Mv
  },
  {
    path: '/mv/:id',
  name:'mv-detail',
    component: MvDetail,
   props: (route) =>  ({id: +route.params.id}),
  },
  {
    path: '/discovery',
    name:'discovery',
    component: DisCovery
  },
  {
    path: '/allmusiclist',
    name:'allmusiclist',
    component: AllMusicList
  },
  {
    path: '/allmusiclist/:id',
    name:'allmusiclist',
    component: MusicPlayDetail
  },
  {
    
    path: '/new-songs',
    name:'new-songs',
    component: NewSongs
  },
  {
    path: '/collectmusic',
    name:'collectmusic',
    component: CollectMusic
  },


]

const router = new VueRouter({
  routes
})

export default router
