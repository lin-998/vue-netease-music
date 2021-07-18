<template >
    <div class="mv">
    <div class="mv-content">
      <div class="left">
        <p class="title">mv详情</p>

        <div class="player">
          <VideoPlayer
            :url="mvPlayInfo.url"
            :poster="mvDetail.cover"
            ref="video"
          />
        </div>

        <div class="author-wrap">
          <div class="avatar">
            <img :src= artist.img1v1Url />
          </div>
          <p class="author">{{ artist.name }}</p>
        </div>

        <p class="name">{{ mvDetail.name }}</p>

        <div class="desc">
          <span class="date"
            >发布：{{
             mvDetail.publishTime
            }}</span
          >
          <span class="count">播放：{{ mvDetail.playCount }}次</span>
        </div>

        <div class="comments">
          <Comments :id="id"  type="mv"/>
        </div>
      </div>
      <div class="right">
        <p class="title">相关推荐</p>
        <div class="simi-mvs">
          <Card
            :desc="`by ${simiMv.artistName}`"
            :key="simiMv.id"
            :name="simiMv.name"
            class="simi-mv-card"
            v-for="simiMv in simiMvs"
            @click="toMv(simiMv.id)"
          >
            <template #img-wrap>
              <MvCard
                :duration="simiMv.duration"
                :img="simiMv.cover"
                :playCount="simiMv.playCount"
              />
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getMvDetail,getMvUrl,getSimiMv,} from "../../api/mv";
import { getArtists } from "../../api/artist";
import MvCard from "../../components/mv-card";
import Card from "../../components/card";
import VideoPlayer from "../../components/video-play";
import  Comments  from "../../components/comments";
export default {
    name:"mv-detail",
    components:{
        MvCard,
        Card,
        VideoPlayer,
        Comments
    },
    props:{
      //从route接收的参数
id:{
    type:Number,
    require:true,
},
    },
    data(){
        return{
      mvDetail: {},
      mvPlayInfo: {},
      artist: {},
      simiMvs: [],
        }
    },
    created(){
this.init()
//console.log(this.id);
    },
    methods:{
async init(){
  const [
        { data: mvDetail },
        { data: mvPlayInfo },
        { mvs: simiMvs },
      ] = await Promise.all([
        getMvDetail(this.id),
        getMvUrl(this.id),
        getSimiMv(this.id),
      ]);
    
 const { artist } = await getArtists(mvDetail.artistId);

      this.mvDetail = mvDetail;
      this.mvPlayInfo = mvPlayInfo;
      this.artist = artist;
      this.simiMvs = simiMvs;
  // console.log(simiMvs);
  //     console.log(mvPlayInfo);
  //     console.log(mvDetail);
  //     console.log(artist);
},
 toMv(id){
this.$router.push(`/mv/${id}`)
    },

    },
    watch: {
    id: 'init',
  },

}
</script>
<style lang="scss" scoped>
    .mv {
     
  .mv-content {
      display: flex;
    .left {
     
      width: 60%;
  
      margin-right: 30px;
      p.title {

      }

      .player {
       
        videoplayer {

        }
      }

      .author-wrap {
        margin-top: 20px;
        display: flex;
        align-items: center;
        .avatar {
          img {
width: 48px;
height: 48px;
border-radius: 24px;
          }
        }

        p.author {
        
font-size: 20px;
color: #4a4a4a;
        }
      }

      p.name {
        margin-top: 12px;
        font-size: 35px;
        color: #4a4a4a;
font-weight: 700;
 white-space: nowrap;
  text-overflow: ellipsis;
   overflow: hidden;
      }

      .desc {
        font-size: 12px;
        color: #bebebe;
        span.date {
margin-right: 20px;
        }

        span.count {

        }
      }

      .comments {
        margin-top: 50px;
        comments {

        }
      }
    }

    .right {
      flex:1;
      p.title {

      }

      .simi-mvs {
         margin-bottom: 20px;
       .simi-mv-card {
            margin-bottom: 20px;
        }
      }
    }
  }
}
</style>