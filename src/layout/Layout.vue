<template>
    <div class="layout">
    <LayoutHeader />
    <div class="layout-body">
      <div
        class="layout-aside"
      >
        <LayoutAside />
      </div>
      <div
        class="content"
        id="page-content"
      >
        <router-view  class="router-view"/>
      </div>
    </div>
 <!-- 登录组件 -->
   <div class="contain-content" >
      <component   :is="componentView"  class="component-container-view"  @passName="onHandle">
        <slot />
      </component>
    </div>
  </div>
</template>
<script>
import  LayoutAside from "./Aside";
import  LayoutHeader from "./Header";
import  loginRegisterNext from "./components/loginRegister2.vue";
import  loginRegister from "./components/loginRegister.vue";
import  loginPhone from "./components/loginPhone.vue";
import  loginHome from "./components/loginHome.vue";
export default {
    components:{
        LayoutAside,
        LayoutHeader,
        loginRegisterNext,
        loginHome,
loginPhone,
loginRegister,
},

    data(){
      return{
        componentView:'loginHome',
      }
    },
    methods:{
onHandle(param){
  this.componentView=param;
}
    },
    create(){
    }
}
</script>
<style lang="scss" scoped>

 .contain-content{
      position: fixed;
       width: 500px;
       height: 280px;
       top: 50%;
       left: 50%;
       transform: translate(-50%,-50%);
       background-color: #fff;
       }
    .layout {
      width: 100%;
  height: 100%;
    .layout-body {
      display: flex;
      height: calc(100% - 58px);
      .layout-aside {
   width: 250px;
       background-color: var(--menu-bgcolor);
      }
    

    .content {
        flex: 1;
        overflow-y: auto;
        min-width: 1400px;
        margin-bottom: 50px;
        .router-view{
        
          margin: auto;
          max-width: 1600px;
        }
      }
    }
  }


</style>