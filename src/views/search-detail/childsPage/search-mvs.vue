<template >
   
       <div class="mvs">
       <ul class="list-wrap">
        <li
          :key="mv.id"
          class="list-item"
          v-for="mv in mvs"
          @click="toMv(mv.id)"
        >
          <mv-card
            :author="mv.artistName"
            :duration="mv.duration"
            :id="mv.id"
            :img="mv.cover"
            :name="mv.name"
            :playCount="mv.playCount"
          />
        </li>
      </ul>
       <el-pagination
      @current-change="handleCurrentChange"
      :page-size="limit"
         layout="prev, pager, next"
      :total="mvCount"
      class="pagination"
      >
    </el-pagination>

</div>

</template>
<script>
import { search } from "../../../mixin/components/search";
import { getSearch } from "../../../api/search";
import MvCard from "../../../components/mv-card"
export default {
    components:{
         MvCard
    },
   
      mixins:[search],
      data() {
          return {
              mvs:[],
              mvCount:0,
              searchType:1004,
              limit:24,
              page:1
          }
      },
      created() {
          this.Search()
      },
              methods: {
          async Search(){
                 if (this.keywords == "") return;
      this.mvs = [];
      const{ result:{mvCount,mvs}}=await getSearch(
         {
             type:this.searchType,
             limit:this.limit,
             keywords:this.keywords,
              offset: (this.page - 1) * this.limit
         }
      )
   console.log(mvs);
   this.mvs=mvs
   this.mvCount=mvCount
      this.$emit("setData", this.mvCount, "mv")
            },
            handleCurrentChange(val){
this.page=val
this.Search()
            },
            toMv(id){
this.$router.push(`/mv/${id}`)
            }

}
}
</script>
<style lang="scss" scoped>
.mvs{
  margin:auto;
  max-width: 1100px;
}
    .list-wrap{
        display: flex;
        flex-wrap: wrap;
        .list-item{
            width: 22%;
            margin-right: 20px;
        }
      
    }
      .pagination{
         display: flex;
         justify-content: flex-end;
        }
</style>