<template >
         <div class="comment" v-if="comment">
    <div class="avatar">
      <img  :src=comment.user.avatarUrl />
    </div>
    <div class="content">
      <div class="comment-text">
        <span class="username">{{ comment.user.nickname }}:</span>
        <span class="text">{{ comment.content }}</span>
      </div>
      <div class="replied" v-if="comment.beReplied.length">
        <div class="comment-text">
          <span class="username"
            >{{ comment.beReplied[0].user.nickname }}:</span
          >
          <span class="text">{{ comment.beReplied[0].content }}</span>
        </div>
      </div>
      <div class="bottom">
        <span class="date">{{ comment.time }}</span>
        <div class="actions">
        <i class="el-icon-thumb"></i>
          {{ comment.likedCount }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:["comment"],

    created() {
        //console.log(this.comment);
    },
}
</script>
<style lang="scss" scoped>
   
  .comment {
       display: flex;
         padding-top: 20px;
    .avatar {
        margin-right: 12px;
      img {
height: 40px;
width: 40px;
border-radius: 20px;
      }
    }

    .content {
     width: 100%;
     padding-bottom: 20px;
     font-size: 12px;
     .comment-text {
        span.username {
            display: inline-block;
              margin-right: 4px;
              color: #517eaf;
        }

        span.text {
line-height: 1.5;
        }
      }

      .replied {
       .comment-text {
          span.username {
  display: inline-block;
  margin-right: 4px;
    color: #517eaf;
          }

          span.text {
line-height: 1.5;
          }
        }
      }

      .bottom {
    display: flex;
      justify-content: space-between;
      margin-top: 8px;
      color: #bebebe;
        span.date {

        }

        .actions {
          i.el-icon-thumb {

          }
        }
      }
    }
  }
</style>