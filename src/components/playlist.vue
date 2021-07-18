<template >
 <Toggle
 :reserveDoms="reserveDoms"
    :show="isPlaylistShow"
    @update:show="setPlaylistShow(false)"
 >
    <div
      class="playlist"
      ref="playlist"
      v-show="isPlaylistShow"
    >
      <Tabs
        :tabs="tabs"
        align="center"
        v-model="activeTab"
      />
      <div class="header">
        <p class="total">总共{{dataSource.length}}首</p>
        <div
          @click="clear"
          class="remove"
          v-if="dataSource.length"
        >
       <i class="iconfont icon-fenxiang"></i>
          <span class="text">清空</span>
        </div>
      </div>
      <template>
        <div
          class="song-table-wrap"
          v-if="dataSource.length"
        >
          <el-table
    :data="dataSource"
    style="width: 100%"
    @row-click="rowclick"
    :cell-style="timeStyle"
   
    > 
       <el-table-column
      prop="albumName"
      width="130"
      label="音乐标题"
      >
    </el-table-column>
    <el-table-column
      prop="artistsText"
      width="130" 
       label="歌手"
      >
    </el-table-column>
      <el-table-column
      prop="durationSecond"
       width="130"
        label="时长"
>
    </el-table-column>
    </el-table >
        </div>
        <div
          class="empty"
          v-else
        >你还没有添加任何歌曲</div>
      </template>
    </div>
 </Toggle>
</template>
<script>
import Tabs from '../components/tabs'
import Toggle from '../components/toggle'
import { mapState, mapMutations, mapActions } from "@/store/helper/music"
export default {
    components:{
        Tabs,
        Toggle
    },
    data() {
        this.tabs = ["播放列表", "历史记录"]
    this.LIST_TAB = 0
    this.HISTORY_TAB = 1
        return {
              activeTab: this.LIST_TAB,
      reserveDoms: null
        }
    },
    created(){
    
    },
    methods: {
          rowclick(song){
this.startSong(song)
          },
      clear(){

      },
      timeStyle(){
return " text-overflow: ellipsis, overflow: hidden"
      },
        
           ...mapMutations(["setPlaylistShow", "setPlaylist"]),
   ...mapActions(["startSong"])
    },
    computed:{
      dataSource(){
return this.isPlaylist?this.playlist:this.playHistory
      },
         isPlaylist() {
      return this.activeTab === this.LIST_TAB
    },
  ...mapState(["isPlaylistShow", "playlist", "playHistory"])
    },

}
</script>
<style lang="scss" scoped>
    .playlist{
        position: fixed;
  top: 0;
  right: 0;
  bottom: 60px;
  width: 400px;
  background: #ffffff;
  z-index:1001;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  .header {
    display: flex;
    justify-content: space-between;
     height: 40px;
    margin: 0 20px;
  p.total {
font-size: 24px;
  }

  .remove {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    i.iconfont.icon-fenxiang {

    }

    span.text {
display: inline-block;
        margin-left: 4px;
    }
  }
}
.song-table-wrap{
  height: 100%;
overflow: hidden;
}
    }
</style>