<template >
    <div class="miniplayer">
<!-- 歌曲内容 -->
    <div class="song">
      <template v-if=" hasCurrentSong" >
        <div @click="togglePlayerShow" class="img-wrap">
          <div class="mask"></div>
          <img :src="currentSong.img" class="blur" />
          <div class="player-control">
          <i class="el-icon-caret-top"></i>
          </div>
        </div>
        <div class="content">
          <div class="top">
            <p class="name">{{ currentSong.name }}</p>
            <p class="split">-</p>
            <p class="artists">{{ currentSong.artistsText }}</p>
          </div>
          <div class="time">
            <span class="played-time">
            00:00
           </span>
            <span class="split">/</span>
            <span class="total-time">{{
             currentSong.duration /1000
            }}</span>
          </div>
        </div>
      </template>
    </div>
 <!-- 控制台 -->
    <div class="control">
      <i  @click="prev" class="iconfont icon-shangyiqu101"></i>
     
        <div @click="togglePlaying" class="play-icon" slot="reference">
         <i :class="PlayIcon"></i>
        </div>

     <i  @click="next" class="iconfont icon-xiayiqu101"></i>
    </div>
    <div class="mode">
      <!-- 模式 -->
      <el-popover placement="top" trigger="hover" width="160">
         <p>{{ playModeText }}</p>
        <i @click="onChangePlayMode"
          :class="modeIcon "
          slot="reference"></i>
      </el-popover>
      <!-- 播放列表 -->
     
       
        <i @click="togglePlaylistShow"
          class="mode-item  iconfont icon-bofangliebiao"
          slot="reference"
          type="playlist"></i>
      <!-- 音量 -->
      <div class="volume-item">
     <Volume :volume="volume" @volumeChange="onVolumeChange" />
      </div>
      <!-- github -->
     <i class="iconfont icon-huaban88"></i>
    </div>
     <div class="progress-bar-wrap">
      <ProgressBar
       :disabled="!hasCurrentSong"
       :percent="playedPercent"
        @percentChange="onProgressChange"
      />
    </div>
        <audio 
        :src="currentSong.url"
        ref="audio"
        @canplay="ready"
        @ended="end"
        @timeupdate="updateTime"
        autoplay
        ></audio>
    </div>
</template>
<script>
import {
  mapState,
  mapMutations,
  mapGetters,
  mapActions
} from "@/store/helper/music"
import Storage from "good-storage"
import { isDef } from "../utils/common"
import { playModeMap, VOLUME_KEY} from "../utils/config"
import ProgressBar from "../components/progress-bar"
import Volume from './volume'
const DEFAULT_VOLUME = 0.75
export default {
    components:{
ProgressBar,
Volume
    },
    data() {
        return {
         songReady: false,
           volume: Storage.get(VOLUME_KEY, DEFAULT_VOLUME)
        }
    },
    created(){

    },
    methods: {
        prev(){

        },
        next(){

        },
        togglePlaying(){
if(!this.currentSong.id){
  return
}
 this.setPlayingState(!this.playing)
        },
        onProgressChange(percent){
 this.audio.currentTime = this.currentSong.durationSecond * percent
this.setPlayingState(true)
        },
        togglePlaylistShow(){
this.setPlaylistShow(!this.isPlaylistShow)
        },
        togglePlayerShow(){
this.setPlayerShow(!this.isPlayerShow)
        },
        onChangePlayMode(){
const modekeys=Object.keys(playModeMap)
const currentModeIndex =modekeys.findIndex(
  key=>playModeMap[key].code===this.playMode
)
const nextIndex=(currentModeIndex+1)%modekeys.length
const nextModeKey=modekeys[nextIndex]
const nextMode=playModeMap[nextModeKey]
this.setPlayMode(nextMode.code)
        },
        onVolumeChange(percent){
 this.audio.volume = percent
      Storage.set(VOLUME_KEY, percent)
        },
         async play() {
        try {
          await this.audio.play()
        } catch (error) {
          // 提示用户手动播放
          this.setPlayingState(false)
        }
      
    },
      pause() {
      this.audio.pause()
    },
    ready(){
this.songReady=true
    },
    end(){

    },
    updateTime(e){
const time=e.target.currentTime
this.setCurrentTime(time)
    },
    ...mapMutations([
     
      "setPlayingState",
      "setCurrentTime",
      "setPlayMode",
      "setPlaylistShow",
       "setPlayerShow"
    ]),
         ...mapActions(["startSong"])
    },
    computed:{
        hasCurrentSong(){
return isDef(this.currentSong.id)
        },
        // 播放的进度百分比
    playedPercent() {
      const { durationSecond } = this.currentSong
      return Math.min(this.currentTime / durationSecond, 1) || 0
    },
    audio() {
      return this.$refs.audio
    },
    PlayIcon(){
return this.playing?"el-icon-video-pause":"el-icon-video-play"
    },
    playModeText(){
return this.currentMode.name
    },
    modeIcon(){
return this.currentMode.icon
    },
     currentMode() {
      return playModeMap[this.playMode]
    },


 ...mapState([
      "currentSong",
      "playing",
      "currentTime",
      "isPlayerShow",
       "playMode",
       "isPlaylistShow"
 ])
    },
    watch:{
        playing() {
      return  this.playing ? this.play() : this.pause()
    }
    }
}
</script>
<style lang="scss" scoped>
    .miniplayer{
        height: 60px;
        position: relative;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        //  background-color: rgba(0, 0, 0, 0.4);
         background: var(--body-bgcolor);
        padding: 8px 16px;
  padding-right: 24px;
  display: flex;
  justify-content: space-between;
  .song{
    display: flex;
    flex: 4;
    overflow: hidden;
    .img-wrap {
   position: relative;
   margin-right: 8px;
      cursor: pointer;
     overflow: hidden;
      height: 40px;
    width: 40px;
      border-radius: 6px;
  .mask {

  }

  img.blur {
height: 100%;
width: 100%;
filter: blur(2px);
  }

  .player-control {
    position: absolute;
    left: 50%;
top: 50%;
transform: translate(-50%,-50%);
    i {
color: #fff;
    }
  }
}

.content {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top {
    display: flex;
    align-items: flex-end;
    white-space: nowrap;
    p.name {
color:#dcdde4;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
    }

    p.split {
      font-size: 12px;
  margin: 0 4px;
    }

    p.artists {
      color: #b1b1b1;
font-size: 12px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
    }
  }

  .time {
    margin-bottom: 4px;
    font-size: 12px;
    color: #5c5c5c;
    span.played-time {

    }

    span.split {
  margin: 0 4px;
    }

    span.total-time {

    }
  }
}
  }
         .control {
             position: absolute;
             width: 200px;
             height: 100%;
             top: 0;
             left: 50%;
             transform: translateX(-50%);
             display: flex;
             align-items: center;
             justify-content: center;
  i {
     color: #cccccc;
font-size: 20px;
cursor: pointer;
  }

  .play-icon {
    i {
      color: #cccccc;
font-size: 45px;
cursor: pointer;
    }
  }

  i{
     color: #cccccc;
font-size: 20px;
cursor: pointer;
  }
}

.mode {
    display: flex;
    flex: 6;
    justify-content: flex-end;
    align-items: center;
    i {
margin-right: 16px;
    
  }

  i.mode-item {
    display: block;
   margin-right: 16px;
      width: 22px;
  }

  .volume-item {
    margin-right: 22px
    i {

    }
  }

  i {

  }
}

.progress-bar-wrap {
 position: absolute;
 left: 0;
    right: 0;
    top: -14px;
}

    }
    .iconfont{
      color: var(--iconfont-color);
    }
</style>