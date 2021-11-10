<template>
    <div class="header_wrap" >
        <div class="left">
           
   <div class="item">
          <transition name="header-side">
            <i class="iconfont icon-home"  v-show="isShow"/>
          </transition>
          </div>
          <div class="item">
          <transition name="header-side">
            <i class="iconfont icon-zuixiaohua"  v-show="isShow"/>
          </transition>
          </div>
          <div class="item">
          <transition name="header-side">
            <i class="iconfont icon-zuidahua"  v-show="isShow"/>
          </transition>
          </div>
          
           <div class="back" @click="go(-1)">
              <i class="el-icon-arrow-left"></i>
           </div>
           <div class="forword" @click="go(1)">
           <i class="el-icon-arrow-right"></i>
           </div>
          </div>
          <div class="music-sousuo">
            <Search />
        </div>
             <div class="right">
      <b-avatar
          size="35px"
          class="avatar"
@click.native="handle"
:url=avatarUrl
         />
          <Theme />
        </div>
    
    </div>
    
</template>
<script>
import Search from '../components/search'
import Theme from '../components/theme.vue'
import {
  mapState,
 mapMutations,
} from "@/store/helper/user"
export default {
  components:{
Search,
Theme,
  },
    name:"LayoutHeader",
    data(){
        return{
            isShow:false,
            isSearch:false,
        }
    },
    create(){
     
    },
    methods: {
      handleClose(){

      },
      handle(){
         console.log(this.avatarUrl);
this.setLoginStaus(true);
      },
         handleMouseEnter() {
      this.isShow = true;
    },
    handleMouseLeave() {
      this.isShow = false;
    },
  
go(index){
      this.$router.go(index)
    },
    ...mapMutations([
     
     "setLoginStaus",
    ]),
    
    },
    computed:{
... mapState(
["loginStaus","avatarUrl"]
)
    }
    
}
</script>
<style lang="less" scoped>
   .header_wrap{
       display: flex;
       align-items: center;
       background-color: var(--header-bgcolor);
       height: 58px;
       width: 100%;
   }
   
   .left{
     width: 250px;
       display: flex;
       .back{
         margin-left: 30px;
         margin-right: 30px;
         cursor: pointer;
       }
       .forword{
 cursor: pointer;
       }
   }
    .item {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        line-height: 18px;
        overflow: hidden;
        cursor: pointer;
        margin-left: 20px;
        i {
          display: inline-block;
        }
      }
      .item:nth-child(1) {
        background: #ed655a;
      }
      .item:nth-child(2) {
        background: #e0c04c;
      }
      .item:nth-child(3) {
        background: #72be47;
      }
      .music-sousuo{
        flex: 3;
      }
      .right{
        flex:1;
        display: flex;
        align-items: center;
       justify-content: flex-end;
       margin-right: 50px;
       .avatar{
         margin-right: 20px;
       }
       .btn{
         font-size: 20px;
       }
      }
</style>