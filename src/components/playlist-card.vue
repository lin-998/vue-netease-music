<template >
    <div @click="onClickCard" class="playlist-card">
    <div class="img-wrap">
      <img :src="img" />
      <div class="desc-wrap" v-if="desc">
        <span class="desc">{{ desc }}</span>
      </div>
      <div class="play-icon">
      <i class="el-icon-caret-right"> </i>
      </div>
    </div>
    <p class="name">{{ name }}</p>
  </div>
</template>
<script>
export default {
     props: ["id", "img", "name", "desc"],
     methods:{
         onClickCard(){
this.$router.push(`/allmusiclist/${this.id}`)
         }
     }
}
</script>
<style lang="scss" scoped>
    .playlist-card {
 position: relative;
  width: calc(20% - 8px);
  margin: 4px;
  margin-bottom: 32px;
  cursor: pointer;
  .img-wrap {
 position: relative;
    width: 100%;
    padding-top: 100%;
    margin-bottom: 8px;
    border-radius: 4px;
    overflow: hidden;
     
    img {
         position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
height: 100%;
width: 100%;
    }

    .desc-wrap {
    position: absolute;
      padding: 6px;
      left: 0;
      right: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.4);
      transform: translateY(-100%);
      transition: all 0.3s;
    .desc {
font-size: 12px;
color:#fff;
      }
    }

    i.el-icon-caret-right {
        opacity: 0;
font-size: 24px;
transition: all 0.3s;
position: absolute;
right: 4px;
bottom: 4px;
color: #fff;
    }
    &:hover{
        .desc-wrap{
            transform: translateY(0);
        }
        i.el-icon-caret-right{
opacity: 1;
        }
    }
  }

  p.name {
font-size: 12px;
 overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
color: #fff;
  }
}
</style>