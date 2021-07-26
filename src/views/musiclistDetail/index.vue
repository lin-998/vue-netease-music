<template >
    <div>
        <div> <Header :playlist="playlist" /></div>
        <div class="tabs-wrap">
<Tabs  :tabs="tabs"  v-model="activeTab" class="tab"/>
<el-input

        @blur="onInputBlur"
        @focus="onInputFocus"
        class="input"
        placeholder="搜索歌单音乐"
        prefix-icon="el-icon-search"
        v-model="searchValue"
        v-show="activeTab === 0"
      ></el-input>
        </div>
     <div v-show=" activeTab===0">
          <el-table
    :data="filteredSongs"
    style="width: 100%"
    :cell-style=" tableRowClassName"
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
      prop="albumName"
      width="240"
      label="音乐标题"
      >
    </el-table-column>
    <el-table-column
      prop="artistsText"
      width="240" 
       label="歌手"
      >
    </el-table-column>
    <el-table-column
      prop="name"
       width="240"
        label="专辑"
>
    </el-table-column>
      <el-table-column
      prop="durationSecond"
       width="240"
        label="时长"
>
    </el-table-column>
  </el-table>
     </div>
      <div class="comments" v-show=" activeTab===1"> 
          <Comments :id="id"  type="playlist" />
          </div>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from "@/store/helper/music"
import PlayIcon from '../../components/play-icon'
import { getListDetail } from "../../api/song-list";
import { getSongDetail } from "../../api/song";
import { createSong } from "../../utils/business";
import Header from "./header"
import Tabs from '../../components/tabs'
import Comments from '../../components/comments'
export default {
    components:{
Header,
PlayIcon,
Tabs,
Comments
    },
    data() {
        return {
             inputFocus: false,
            playlist:{},
            songs:[],
             tabs: ["歌曲列表", "评论"],
      activeTab:0,
      searchValue:"",
        }
    },
    created(){
this.init()
    },
    methods: {
       
        async init(){
const{playlist} =await getListDetail({id:this.id})
this.playlist=playlist
console.log(this.playlist);
this.getSongList(playlist)

        },
        async getSongList(playlist){
 const trackIds = playlist.trackIds.map(({ id }) => id)
 const songDetail=await getSongDetail(trackIds.slice(0,500))
 const songs=songDetail.songs.map(({id, name, al, ar, mv, dt})=>
   createSong({
          id,
          name,
          artists: ar,
          duration: dt,
          mvId: mv,
          albumName: al.name,
          img: al.picUrl,
        }),
 )
 this.songs=songs
 console.log(this.songs);
        },
         rowclick(song){
this.startSong(song)
this.setPlaylist(this.songs)

      },
       tableRowClassName({row, column, rowIndex, columnIndex}) {
  if(columnIndex!=0)
   { return 'font-size:12px'}
      },
       onInputBlur(){
            this.inputFocus=false
        },
        onInputFocus(){
this.inputFocus=true
        },
       ...mapActions(["startSong"]),
        ...mapMutations(["setPlaylist"]),
        
    },
    computed:{
        id(){
            return Number(this.$route.params.id)
        },
        filteredSongs(){
return this.songs.filter(({name, artistsText, albumName})=>
`${name}${artistsText}${albumName}`.toLowerCase().includes(this.searchValue.toLowerCase())
)
        },
          ...mapState(["currentSong",]),
         
    }
}
</script>
<style lang="scss" scoped>
.tabs-wrap{
    margin-top: 20px;
display: flex;
justify-content: space-between;
align-items: center;
.tab{
    
}
.input{
    width: 125px;
}
}
.comments{
margin-top: 40px;
}

     .img-wrap {
         cursor: pointer;
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