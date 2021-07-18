<template >
     <div class="volume">
         <span>
    <i
      :class="getIconType()"
      @click="toggleSilence"
      class="icon"
     ></i>
    </span>
    <div class="progress-wrap">
      <ProgressBar
        :percent="volumePercent"
        @percentChange="onProgressChange"
       
      />
    </div>
  </div>
</template>
<script>
import ProgressBar from './progress-bar'
export default {
    components:{
ProgressBar
    },
    props:{
 volume: {
      type: Number,
      default: 1,
    }
    },
    data() {
        return {
            volumePercent:this.volume,
        }
    },
    created(){

    },
    methods: {
        getIconType(){
return this.isSilence?"iconfont icon-jingyin":"iconfont icon-yinliang"

        },
        toggleSilence(){
this.isSilence=!this.isSilence
        },
        onProgressChange(percent){
              if (percent < 0.05) {
        percent = 0
      }
      this.volumePercent = percent
      this.$emit('volumeChange', percent)
        }
    },
    computed:{
      isSilence: {
      get() {
        return this.volumePercent === 0
      },
      set(newSilence) {
        const target = newSilence ? 0 : this.lastVolume
        if (newSilence) {
          this.lastVolume = this.volumePercent
        }
        this.volumePercent = target
        this.onProgressChange(target)
      }
    }
    }


}
</script>
<style lang="scss" scoped>
    .volume {
  display: flex;
  align-items: center;
  width: 80px;
    i.icon {
cursor: pointer;
    }
  

  .progress-wrap {
   flex: 1;
  }
}
.iconfont{
  color: var(--iconfont-color);
}
</style>