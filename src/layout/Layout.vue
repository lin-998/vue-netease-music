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
  </div>
</template>
<script>
import  LayoutAside from "./Aside";
import  LayoutHeader from "./Header";
export default {
    components:{
        LayoutAside,
        LayoutHeader
    }
}
</script>
<style lang="scss" scoped>
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
        min-width: 700px;
        margin-bottom: 50px;
        .router-view{
        
          margin: auto;
          max-width: 1200px;
        }
      }
    }
  }
  

</style>