<template >
    <div class="comment">
        <div class="block" v-if="shouldHotCommentShow">
            <p class="title">精彩评论</p>
            <Comment 
            :comment="comment"
            :key="comment.id"
            v-for="comment in  hotComments"
            />
        </div>
        <div class="block" v-if="shouldCommentShow">
            <p class="title" >最新评论
                <span class="count">{{total}}</span>
            </p>
            <Comment 
            :comment="comment"
            :key="comment.id"
            v-for="comment in comments"
            />
        </div>
        <!-- <Pagination
        :current-page.sync="currentPage"
        :page-size="PAGE_SIZE"
        :total="total"
        @current-change="onPageChange"
        class="pagination"
      /> -->
       <el-pagination
       :current-page.sync="currentPage"
    layout="prev, pager, next"
    :total="total"
     @current-change="onPageChange"
     >
  </el-pagination>
        <empty v-if="!loading && !shouldHotCommentShow && !shouldCommentShow">还没有评论哦~</empty>
    </div>
</template>
<script>
import { getMvComment,getPlaylistComment ,getSongComment} from "../api/comment";
import empty from "../components/empty";
import Comment from "../components/comment";
const SONG_TYPE = "song"
const PLAYLIST_TYPE = "playlist"
const MV_TYPE = "mv"
const PAGE_SIZE=20
export default {
    components:{
empty,
Comment
    },
    props:{
       id: {
      type: Number,
      required: true
    },
    type: {
      // SONG_TYPE, PLAYLIST_TYPE, MV_TYPE 之一
      type: String,
      default: SONG_TYPE
    }
    },
    data(){
return{
     loading: false,
      hotComments: [],
      comments: [],
      total: 0,
      currentPage: 1
}
    },
    created(){
    },
    methods:{
async getComment(){
     const commentRequestMap = {
        [PLAYLIST_TYPE]: getPlaylistComment,
        [SONG_TYPE]: getSongComment,
        [MV_TYPE]: getMvComment
      }
       const commentRequest = commentRequestMap[this.type]
    const{comments=[],total}=await commentRequest({
        id:this.id,
        offset:(this.currentPage-1)*20
    })
    // console.log(comments);
    this.comments = comments
      this.total = total
},
async onPageChange(val){
    this.currentPage=val
await this.getComment()
}
    },
       watch:{
id: {
      handler(newId) {
        if (newId) {
          this.currentPage = 1
          this.getComment()
        }
      },
      immediate: true
    }
    },
    computed:{
shouldHotCommentShow(){
    return this.hotComments.length>0&&this.currentPage===1
},
shouldCommentShow(){
     return this.comments.length > 0
}

    },
 


}
</script>
<style lang="scss" scoped>
    
</style>