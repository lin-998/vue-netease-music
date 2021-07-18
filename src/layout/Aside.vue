<template >
    <div class="aside_wrap">
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
        }
    },
    methods: {
        
    },
}
</script>
<style lang="scss" scoped>
  
</style>