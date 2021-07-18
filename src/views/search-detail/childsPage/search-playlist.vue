<template >
    <div class="search-playlist">
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
      :page-size="limit"
      :total="playlistCount"
      @current-change="onPageChange"
      class="pagination"
   >
  </el-pagination>

    </div>
</template>
<script>
import { search } from "../../../mixin/components/search";
import { getSearch } from "../../../api/search";
import PlaylistCard from "../../../components/playlist-card"
export default {
    mixins:[search],
    components:{
        PlaylistCard
    },
    data() {
        return {
            searchType:1000,
            playlists:[],
            playlistCount:0,
            limit:40,
            page:1
        }
    },
    created() {
        this.Search()
    },
    methods: {
        async Search(){
            const{ result: { playlists, playlistCount } }=await getSearch(
               {
                   type:this.searchType,
                   limit:this.limit,
                    keywords:this.keywords,
                 offset: (this.page - 1) * this.limit
               }

            )
            this.playlists=playlists
            this.playlistCount=playlistCount
            this.$emit("setData",this.playlistCount,"歌单")
        },
        onPageChange(val){
this.page=val
this.Search()
        }
    },
}
</script>
<style lang="scss" scoped>
.search-playlist{
    margin: auto;
    max-width: 1100px;
}
    .playlist-cards{
        display: flex;
        flex-wrap: wrap;
    }
    .pagination{
       display: flex;
       justify-content: flex-end;
    }
</style>