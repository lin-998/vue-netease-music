<template>
    <div class="header" v-if="playlist.id">
    <div class="img-wrap">
      <img :src="playlist.coverImgUrl" />
    </div>
    <div class="content">
      <div class="title-wrap">
        <p class="title">{{ playlist.name }}</p>
      </div>
      <div class="creator-wrap">
        <img :src="playlist.creator.avatarUrl" class="avatar" />
        <p class="creator">{{ playlist.creator.nickname }}</p>
        <p class="create-time">
        {{ playlist.createTime }} 创建
        </p>
      </div>
      <div class="action-wrap">
        <Button class="button">
          <i class="el-icon-video-play"></i>
          <span class="middle">播放全部</span>
        </Button>
      </div>
      <div class="desc-wrap">
        <p class="desc" v-if="tagsText">
          <span>标签：{{ tagsText }}</span>
        </p>
        <p class="desc" v-if="playlist.description">
          <span class="value">简介：{{ playlist.description }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '../../components/button'
export default {
  components:{
Button
  },
    props:{
        playlist:{
            type:Object,
            default:()=>({})
        }
    },
     computed: {
    tagsText() {
      return this.playlist.tags.join("/")
    },
  },
}
</script>
<style lang="scss" scoped>
    .header {
        display: flex;
        
  .img-wrap {
        width: 200px;
    height: 200px;
    margin-right: 24px;
    img {
width: 100%;
height: 100%;
    }
  }

  .content {
       display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .title-wrap {
      p.title {
color: #333333;
      }
    }

    .creator-wrap {
        display: flex;
        align-items: center;
      img.avatar {
  width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 8px;
      }

      p.creator {
font-size: 14px;
color: #4A4A4A;
      }

      p.create-time {
font-size: 14px;
color: #4A4A4A;
      }
    }

    .action-wrap {
      .button{
  background: #f95043;
  background: linear-gradient(to right, #fa5143, #f44d41, #d53b32);
  color: #fbdfdd;
  border: none;
 }
        i{
        }
      span.middle {
 vertical-align: middle;
      }
    }

    .desc-wrap {
      p.desc {
          .value{
               display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
          }
        span {
font-size: 14px;
color: #4A4A4A;
        }
      }
    }
  }
}
</style>