<template>
     <div class="search-songs">
       <el-table
    :data="songs"
    style="width: 100%"
    :cell-style=" tableRowClassName"
    @row-click="rowclick"
    >
    <el-table-column
      type="index"
    >
    </el-table-column>
    <el-table-column
    label="标题"
      prop="name"
      width="300">
    </el-table-column>
    <el-table-column
    label="歌手"
      prop="artistsText"
      width="300">
    </el-table-column>
    <el-table-column
    label="专辑"
      prop="albumName"
       width="300"
>
    </el-table-column>
      <el-table-column
      label="时长"
      prop="durationSecond"
       width="300"
>
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from "@/store/helper/music"
import { search } from "../../../mixin/components/search";
import { getSearch } from "../../../api/search";
import { createSong } from "../../../utils/business";
export default {
    name:"SearchSongs",
    mixins:[search],
  
    data(){
        return{
            searchType:1,
            songCount:0,
           songs:[],
        }
      
    },

     created() {
            this.Search()
         
        },
        methods: {
          async Search(){
                 if (this.keywords == "") return;
      this.songs = [];
      const{ result: { songs, songCount }}=await getSearch(
         {
             limit:30,
             keywords:this.keywords
         }
      )
      this.songs = songs.map(song => {
        const { id, mvid, name, alias, artists, duration, album } = song
        return createSong({
          id,
          name,
          alias,
          artists,
          duration,
          mvId: mvid,
          albumName: album.name,
          albumId: album.id
        })
      })
      this.songCount = songCount
      //console.log(this.songs);
      this.$emit("setData", this.songCount, "单曲")
            },
            tableRowClassName({row, column, rowIndex, columnIndex}) {
  if(columnIndex!=0)
   { return 'font-size:13px'}
      },
            rowclick(song){
this.startSong(song)
            },
            ...mapActions(["startSong"]),
        },
        computed:{
              ...mapState(["currentSong"]),
        }
}
</script>
<style lang="scss">
    .search-songs{
       margin:auto;
  max-width: 1100px;
    }
</style>