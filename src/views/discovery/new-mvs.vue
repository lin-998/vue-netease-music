<template >
     <div
    class="new-mvs"
    v-if="mvs.length"
  >
  <div class="title">推荐mv</div>
   <ul class="list-wrap">
      <li
        :key="mv.id"
        class="list-item"
        v-for="mv in mvs"
      >
        <MvCard
          :author="mv.artistName"
          :id="mv.id"
          :img="mv.picUrl"
          :name="mv.name"
          :playCount="mv.playCount"
        />
      </li>
    </ul>
    </div>
    </div>
</template>
<script>
import MvCard from "../../components/mv-card";
import { getPersonalizedMv } from "../../api/discovery";
export default {
    components:{
        MvCard
     
    },
    data() {
        return {
          mvs:[]  
        }
    },
    created() {
        this.getMvs()
    },
    methods:{
async getMvs(){
    const{result}=await getPersonalizedMv()
    this.mvs=result
    console.log(this.mvs);
}
    },
}
</script>
<style lang="scss" scoped>

    .list-wrap{
        display: flex;
     flex-wrap: wrap;
     margin: 0 -12px;
     margin-top: 12px;
     .list-item{
         width: 25%;
         margin-bottom: 36px;
         padding: 0 12px;
     }
    }
</style>