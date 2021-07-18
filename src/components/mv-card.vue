<template>
    <div class="mv-crad" @click="goMv" >
        <div class="img-wrap">
             <img :src=img />
      <div class="play-count-wrap" >
     <i class="el-icon-caret-right"> </i>
      {{ playCount}}
      </div>
      <div class="play-icon-wrap">
         <i class="el-icon-caret-right"> </i>
      </div>
      <div class="duration-wrap" v-if="duration">
        {{duration }}
      </div>
            </div>
            <p class="name">{{name}}</p>
                 <p class="author">{{author}}</p>
    </div>
</template>
<script>
import { isDef } from "../utils/common";
export default {
    name:"MvCard",
    props: ["id", "img", "duration", "playCount", "name", "author"],
data(){
    return{

}},
methods: {
    goMv(){
         // 如果传入id 则点击直接跳转mv页面
      if (isDef(this.id)) {
        this.$router.push(`/mv/${this.id}`)
      }
    }
},

}
</script>
<style lang="scss" scoped>
    .mv-crad { 
         min-width: 140px;
         cursor: pointer;
  .img-wrap {
      position: relative;
    img {
width: 100%;
height: 100%;
border-radius: 4px;
    }
    .duration-wrap{
        position: absolute;
        right: 4px;
        bottom: 4px;
        font-size: 12px;
        color: #fff;
    }

    .play-count-wrap {
        position: absolute;
        display: flex;
        align-items: center;
        right: 4px;
        top: 4px;
        color: #fff;
        font-size: 12px;
      i.el-icon-caret-right {
font-size: 15px;
      }
    }

    .play-icon-wrap {
         position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
         &:hover{
             i.el-icon-caret-right{
                 opacity: 1;
             }
         }
      i.el-icon-caret-right {
          display: flex;
          align-items: center;
          justify-content: center;
       opacity: 0;
        transition: opacity 0.3s;
        width: 48px;
        height: 48px;
        border-radius: 24px;
         background: rgba(255, 255, 255, 0.5);
        font-size: 15px;
        color:#ccc
      }
    }
  }

  p.name {
 overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #4a4a4a;
  }

  p.author {
 overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color:#bebebe
  }
}
</style>