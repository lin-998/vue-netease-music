<template >
    <div
    class="recommend"
    v-if="list.length"
  >
  <div class="title">最新音乐</div>
    <div class="list-wrap">
         <el-table
    :data="list"
    style="width: 100%"
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
  </el-table>
    </div>
    </div>
</template>
<script>
import { getNewSongs } from "../../api/discovery";
import PlayIcon from "../../components/play-icon";
import { createSong } from "../../utils/business";
export default {
    components:{
PlayIcon
    },
    data() {
        return {
            list:[]
        }
    },
    created() {
        this.getSongs()
    },
    methods:{
        async getSongs(){
           const {result}=await getNewSongs()
            console.log(result);
     this.list=result.map(song=>{
         const {
        id,
        name,
        song: {
          mvid,
          artists,
          album: { blurPicUrl },
          duration
        }
      } = song
      return createSong({
        id,
        name,
        img: blurPicUrl,
        artists,
        duration,
        mvId: mvid
      })
    })
    console.log(this.list);
        }
    }
}
</script>
<style lang="scss" scoped>
.list-wrap{
  display: flex;
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