<template >
     <el-carousel :interval="4000" type="card" height="200px" class="banner-carousel">
    <el-carousel-item v-for="item in banners" :key="item.scm">
      <img :src=item.imageUrl  class="banner-img"/>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import { getBanner } from "../../api/discovery";
export default {
    data(){
return{
    banners:[]
}
    },
    created() {
        this.getData()
    },
    methods:{
async getData(){
    const{banners}=await getBanner()
console.log(banners);
this.banners=banners
}
    },
}
</script>
<style lang="scss" scoped>

.banner-img{
       height: 100%;
       width: 100%;
       border-radius: 4px;

    }

    
</style>