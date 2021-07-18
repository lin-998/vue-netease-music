<template >
    <div
    class="recommend"
    v-if="list.length"
  >
  <div class="title">推荐歌单</div>
    <div class="list-wrap">
         <PlaylistCard
        :desc="item.copywriter"
        :id="item.id"
        :img="item.picUrl"
        :key="item.id"
        :name="item.name"
        v-for="item in list"
      />
    </div>
    </div>
</template>
<script>
import { getPersonalized } from "../../api/discovery";
import PlaylistCard  from "../../components/playlist-card";
export default {
    components:{
PlaylistCard
    },
    data(){
return{
    list:[],
}
    },
   async created() {
        const { result } = await getPersonalized({ limit: 10 })
    this.list = result
    },
}
</script>
<style lang="scss" scoped>
    .recommend {
  .title {
color:var(--font-color-white)
  }

  .list-wrap {
      margin-top: 20px;
      display: flex;
   flex-wrap: wrap;
  }
}
</style>