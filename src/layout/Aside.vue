<template >
    <div class="aside_wrap">
      <div class="user">
        <div class="user_info"> <img src="userInfo.avatarUrl" alt=""><span>{{userInfo.userName}}</span></div>
        <div class="user_fav"><span>我的喜欢</span></div>
        <div class="user_music_list" @click="getCollect"><span>我的收藏</span></div>
      </div>
        <div class="menu" ref="menu">
      <b-menu
        :menu="menuList"
        vertical
        item-width="100%"
        item-height="50px"
        text-color="var(--font-color-grey2)" 
        background-color="var(--menu-bgcolor)"
      active-color="#d33a31"
        active-background-color="var(--menu-item-active-bg)"
        hover-background-color="var(--menu-item-hover-bg)"
        hover-color="#d33a31"
      ></b-menu>
    </div>
     </div>
</template>
<script>
import {
  mapState,
 mapMutations,
} from "@/store/helper/user"
import { getToken } from '@/utils/auth'
import {  Login } from "../api/login";
export default {
    name:"LayoutAside",
    data(){
        return{
  menuList: [
        {
          link: "/discovery",
          icon: "iconfont icon-music",
          content: "发现音乐",
        },
        { link: "/allmusiclist", icon: "iconfont icon-gedan", content: "推荐歌单" },
        {
          link: "/ranklist",
          icon: "iconfont icon-PCbofangye_paihangbang",
          content: "最新排行",
        },
        {
          link: "/artist-list",
          icon: "iconfont icon-mansingle",
          content: "最热歌手",
        },
        { link: "/mv", icon: "iconfont icon-shipin", content: "推荐MV" },
        // { link: "/mv-list", icon: "iconfont icon-MV", content: "全部MV" },
        {
          link: "/new-songs",
          icon: "iconfont icon-musicnoteeighth",
          content: "最新音乐",
        },
      ],
      userInfo:JSON.parse(getToken('userInfo'))
        }
    },
    methods: {
        getCollect(){
          this.$router.push('/collectmusic')
          Login.getUserSubcount().then(res=>{
            console.log(res);
          })
         .catch(error=>{console.log(error);})
        }
    },
    computed:{
      ...mapState(
        ['userName','avatarUrl']

)
    }
}
</script>
<style lang="scss" scoped>
  .aside_wrap{
    .user_info{
      display: flex;
      img{
        width: 50px;
        height: 50px;
        border-radius: 25px;
      }
    }
    .user{
       background-color:var(--menu-bgcolor)
    }
  }
</style>