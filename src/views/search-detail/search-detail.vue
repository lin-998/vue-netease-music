<template >
    
  <div class="search-wrap">
      <div class="search-result">
       <span class="keywords">{{ keywords }}</span>
        
        <span class="count">共找到{{ count }}</span
        >
        <span class="count">个{{ searchType }}</span>
      </div>
        <b-menu
        class="search-menu"
        :menu="menuList"
        item-height="30px"
        item-width="55px"
        @click="handleChildrenRouter"
      />
       <div class="search-detail-container">
        <router-view @setData="handlesetData" />
    </div>
      </div>
      
    
</template>
<script>
import  { menuList } from "./data";
export default {
    name:"SearchDetail",
    //导出data到inject中 
    provide(){
return{
  search:this
}
    },
    data(){
        return{
keywords:'',
count:0,
searchType:"单曲",//搜索类型
menuList,
        }
    
    },
    methods: {
        /**子路由 */
    handleChildrenRouter(index) {},
    forword(path, keywords = this.keywords) {
      this.$router.push({
        path,
        query: {
          keywords,
        },
      });
    },
    /**子路由反馈处理
     * @param count        搜索项个数
     * @param type         搜索结果类型--->如search-songs反馈单曲
     */
    handlesetData(count, type) {
      this.count = count;
      this.searchType = type;
    },
  },
  watch: {
    $route: {
      handler() {
        if (this.$route.path.indexOf("/search-detail") >= 0) {
          this.keywords = this.$route.params.keywords;
        }
      },
      immediate: true,
    },

    },
    created(){
    }

}
</script>
<style lang="scss" scoped>
    .search-wrap {
  .search-result {
  margin-top: 20px;
  margin-bottom: 20px;
    span.keywords {
font-size: 24px;
color: #4a4a4a;
margin-right: 20px;
    }

    span.count {
font-size: 12px;
color: #bebebe;
    }
  }

.search-menu {
    margin-left: 40px;
    margin-bottom: 20px;
    .search-detail-container {
     
    }
  }
}
</style>