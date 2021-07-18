<template >
    <div
    @click="progressClick"
    class="progress-bar"
    ref="progressBar"
  >
    <div class="bar-inner">
      <div
        class="progress"
        ref="progress"
      ></div>
      <div
        class="progress-btn-wrapper"
        ref="progressBtn"
      >
        <div
          class="progress-btn"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { prefixStyle } from "../utils/dom";
const transform = prefixStyle("transform")
export default {
    name: "ProgressBar",
    props:{
percent:{
    type: Number,
    default:0
},
 disabled: {
      type: Boolean,
      default: false
    }
    },
    data() {
        return {
            
        }
    },
    created(){
       this.touch = {}
    },
    mounted() {
      if(this.percent>0){
        //console.log(this.percent);
 this.setProgressOffset(this.percent)
      }
    },
    methods:{
        progressClick(e){

if(!this.disabled){
     const rect = this.$refs.progressBar.getBoundingClientRect()
        const offsetWidth = Math.max(
          0,
          Math.min(e.pageX - rect.left, this.$refs.progressBar.clientWidth)
        )
        console.log(offsetWidth);
        this._offset(offsetWidth)
        // 这里当我们点击 progressBtn 的时候，e.offsetX 获取不对
        // this._offset(e.offsetX)
        this._triggerPercent()
        
}
        },
        setProgressOffset(percent){
          if(percent>0 && !this.touch.initiated){
            const barWidth = this.$refs.progressBar.clientWidth
            const offsetWidth = percent * barWidth
            this._offset(offsetWidth)
          }
        },
        _offset(offsetWidth){
          // const offsetRem=toCurrentRem(offsetWidth)
 this.$refs.progress.style.width=`${offsetWidth}px`
 this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px,0,0)`
        },
        _triggerPercent(){
          this.$emit("percentChange",this._getPercent())
        },
        _getPercent(){
       const barWidth = this.$refs.progressBar.clientWidth
      return this.$refs.progress.clientWidth / barWidth
        },
      //   progressTouchStart(e) {
      //   this.touch.initiated = true // 已经被初始化了
      //   this.touch.startX = e.touches[0].pageX // 横向坐标
      //   this.touch.left = this.$refs.progress.clientWidth // 进度条的初始偏移量，进度条已经走过的长度
      // },
      // progressTouchMove(e) {
      //   if (!this.touch.initiated) {
      //     return
      //   }
      //   const deltaX = e.touches[0].pageX - this.touch.startX // 计算偏移量
      //   // this.touch.left + deltaX为相对于整个界面的偏移，但是不能超出整个进度条的宽度                   // 已经偏移的量加上deltaX，值要大于0
      //   const offsetWidth = Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX))
      //   // 设置进度条的偏移和btn的transform
      //   this._offset(offsetWidth)
      // },
      // progressTouchEnd() { // 重置为false
      //   this.touch.initiated = false
      //   this._triggerPercent()  // 派发事件，将拖动进度条信息派发出去
      // }
    },
    watch:{
      percent(newPercent){
        // console.log(newPercent);
        //  if(newPercent && !this.touch.initiated){
        //     const barWidth = this.$refs.progressBar.clientWidth
        //     const offsetWidth = newPercent * barWidth
        //     this._offset(offsetWidth)
        //   }
        this.setProgressOffset(newPercent)
      }
    }
}
</script>
<style lang="scss" scoped>
    .progress-bar{
         height: 30px;
  cursor: pointer;
  .bar-inner {
       position: relative;
    top: 14px;
    height: 2px;
    background: #fff;
    .progress {
 position: absolute;
      height: 100%;
    background-color: rgba(0, 0, 0, 0.4)
    }

    .progress-btn-wrapper {
         position: absolute;
      left: -15px;
      top: -13px;
      width: 30px;
      height: 30px;
      .progress-btn {
          display: none;
position: relative;
  top: 8px;
 left: 9px;
width: 12px;
height: 12px;
border-radius: 50%;
background: #ccc;
box-sizing: border-box;
      }
    }
     &:hover {
    .progress-btn {
      display: block !important;
    }
     }
  }
}
</style>