<template >
      <div class="wrap" @click="onClickCard">
    <div class="top-playlist-card">
      <div class="img-wrap">
        <img :src=img />
      </div>
      <div class="content">
        <div class="tag-wrap">
          <span>精品歌单</span>
        </div>
        <p class="name">{{ name }}</p>
        <p class="desc">{{ desc }}</p>
      </div>
    </div>
    <div class="background" :style="{ backgroundImage: `url(${img})` }"></div>
    <div class="background-mask"></div>
  </div>
</template>
<script>
export default {
    props:[  "desc","id","img","name"],
    created() {
        // console.log(this.topPlaylist);
    },
    methods: {
        onClickCard(){

        },
    },
}
</script>
<style lang="scss" scoped>
    .wrap {
        position: relative;
        overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  .top-playlist-card {
       position: relative;
    z-index: 1;
    display: flex;
    padding: 16px;
      display: flex;
    .img-wrap {
        margin-right: 8px;
           height: 140px;
        width: 140px;
      img {
        height: 100%;
        height: 100%;
border-radius: 4px;
      }
    }

    .content {
        flex: 1;
        margin-right: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .tag-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 30px;
          width: 110px;
          border-radius: 4px;
          border: 1px solid #e7aa5a;
        span {
color: #e7aa5a;
font-size: 14px;
        }
      }

      p.name {
font-size: 16px;
color: #ffffff;
margin-top: 12px;
margin-bottom: 10px;
      }

      p.desc {
font-size: 12px;
color: #ffffff80;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
      }
    }
  }

  .background {
position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
     filter: blur(16px);
    z-index: 0;
  }

  .background-mask {
position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
}
</style>