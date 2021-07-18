<template >
<div class="playlists">
    <div  class="top-play-list-card">
       <TopPlaylist   
       :desc="topPlaylist.description"
        :id="topPlaylist.id"
        :img="topPlaylist.coverImgUrl"
        :name="topPlaylist.name" />
        </div>
        <div class="tabs">
       <Tabs 
       @tabChange="onChangetab"
       :tabs="tabs"
       v-model="activeTabIndex"
       />
        </div>
       <div class="playlist-cards">
      <PlaylistCard
        :desc="`播放量：${item.playCount}`"
        :id="item.id"
        :img="item.coverImgUrl"
        :key="item.id"
        :name="item.name"
        v-for="item in playlists"
      />
    </div>
     <el-pagination
    layout="prev, pager, next"
    :current-page.sync="currentPage"
      :page-size="PAGE_SIZE"
      :total="total"
      @current-change="onPageChange"
      class="pagination"
   >
  </el-pagination>
    

    </div>
</template>
<script>
import { getPlaylists,getTopPlaylists } from "../../api/playlist";
import TopPlaylist from "../../components/toplaylist";
import Tabs from '../../components/tabs'
import PlaylistCard from '../../components/playlist-card'
const PAGE_SIZE=50
export default {
    components:{
TopPlaylist,
Tabs,
PlaylistCard
    },
    data(){
        return{
 activeTabIndex: 0,
      playlists: [],
      currentPage: 0,
      total: 0,
      topPlaylist: {},
    
        }
    },
  async created() {
         this.PAGE_SIZE = PAGE_SIZE
  this.initData()
  
        this.tabs = [
      "全部",
      "欧美",
      "华语",
      "流行",
      "说唱",
      "摇滚",
      "民谣",
      "电子",
      "轻音乐",
      "影视原声",
      "ACG",
      "怀旧",
      "治愈",
      "旅行"
    ]
    },
    methods:{
  // 获取歌单和精品歌单
    async initData() {
      this.getPlaylists()
      this.getTopPlaylists()
    },
    async getPlaylists() {
      const { playlists, total } = await getPlaylists({
        limit: PAGE_SIZE,
        offset: (this.currentPage-1)* PAGE_SIZE,
        cat: this.tabs[this.activeTabIndex]
      })
      this.playlists = playlists
      this.total = total
      // console.log(this.playlists);
    },
    async getTopPlaylists() {
      const { playlists } = await getTopPlaylists({
        limit: 1,
      //  cat: this.tabs[this.activeTabIndex]
      cat:"全部"
      })
      this.topPlaylist = playlists[0] || {}
    },

   onChangetab(){
       console.log(this.activeTabIndex);
          this.initData()
    },
    async onPageChange(page){
        this.currentPage=page
      this.getPlaylists()
    }

    },
 
}
</script>
<style lang="scss" scoped>
    .playlists{
        padding: 12px;
    }
    .top-play-list-card {
    margin-bottom: 16px;
  }

  .playlist-cards {
    display: flex;
    flex-wrap: wrap;
  }
.pagination{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
}
</style>