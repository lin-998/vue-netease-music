<template >
    <div class="search">
    <b-input search v-model="keywords" placeholder="音乐/歌单/用户" @search="handleSearchForword" @keyupEnter="handleSearchForword" />
     <div
        class="search-panel"
        v-show="searchPanelShow"
      >
        <div
          class="search-suggest"
          v-if="suggestShow"
        >
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
               keywords:"",
                searchHots: [],
                searchPanelShow: true,
                suggestShow:false
        }
    },
    methods:{
handleSearchForword(){
    this.$router.push(`/search-detail/${this.keywords}`)
}
    },
}
</script>
<style lang="scss" scoped>
.search{
    position: relative;
}
.search-panel{
position: fixed;
left: 0;
width: 350px;
background: #ccc;
}
</style> 
    
