<template >
    <div class="wrap">
      <div class="tab">
<Tabs @tabChange="onChangetab"
       :tabs="tabs"
       v-model="activeTabIndex" />
      </div>
      <el-table
    :data="songs"
    style="width: 100%"
    :cell-style=" tableRowClassName"
    :row-class-name="tableClassName"
    @row-click="rowclick"
    >
    <el-table-column
      type="index"
    >
    </el-table-column>
    <el-table-column
width="180"
    >
    <template slot-scope="scope">
        <div class="img-wrap">
            <img :src="scope.row.img"/>
            <PlayIcon :size=20  class="play-icon"/>
        </div>
        </template>
    </el-table-column>
    <el-table-column
      prop="name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="artistsText"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
       width="180"
>
    </el-table-column>
      <el-table-column
      prop="durationSecond"
       width="180"
>
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from "@/store/helper/music"
import PlayIcon from "../../components/play-icon";
import { getTopSongs,getSongUrl,getSongDetail } from "../../api/song";
import { createSong } from "../../utils/business";
import Tabs from '../../components/tabs'
export default {
    components:{
       PlayIcon,
       Tabs
    },
    data() {
        return {
    activeTabIndex: 0,
      songs: []
        }
    },
    created() {
      this.getTopSongs()
        this.tabs = [
      { title: "全部", type: 0 },
      { title: "华语", type: 7 },
      { title: "欧美", type: 96 },
      { title: "日本", type: 8 },
      { title: "韩国", type: 16 }
    ]
    },
    methods:{
      rowclick(song){
this.startSong(song)
      },
 async getTopSongs(){
    const {data}=await getTopSongs(0)
    // console.log(data);
    this.songs=data.map(song=>{
        const{ id,
          name,
          artists,
          duration,
          mvid,
          album: { picUrl, name: albumName }}=song
return createSong({
      id,
          name,
          artists,
          duration,
          albumName,
          img: picUrl,
          mvId: mvid
})
    })
// console.log(this.songs);
},
onChangetab(){
this.getTopSongs()
},
 tableRowClassName({row, column, rowIndex, columnIndex}) {
  if(columnIndex!=0)
   { return 'font-size:12px'}
      },
      tableClassName(row,rowIndex){
        return 'table'
      },
 ...mapActions(["startSong"]),
    },
    computed:{
     ...mapState(["currentSong"]),
    }
}
</script>
<style lang="scss" scoped>
.tab{
  display: flex;
  justify-content: flex-end;
  margin-right: 300px;
}
 .table{
  cursor: pointer;
}
   .img-wrap {
     position: relative;
     display: flex;
     justify-content: center;
     align-items: center;
height: 60px;
width: 60px;
  img {
height: 100%;
width: 100%;
border-radius: 4px;
  }

  .play-icon {
    position: absolute;
    opacity: 0;
color: #FFF;

  }
  &:hover{
    .play-icon{
      opacity: 1;
    }
  }
}

</style>