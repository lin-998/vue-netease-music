import axios from "axios";

export const playMusic={
    methods: {
        playMusic(index=0){
             /**播放列表唯一标识处理，防止一个页面中多个songList播放标时出错
             * 使用songList时一定要加ref="songList"，歌单详情页面id是歌单ID，这样才能获取到正确的唯一标识
             */
            let id=this.$refs.songList&&this.$refs.songList.id||this.id||'no-id';
            let musicList;
            musicList=this.musicList;
            let url = null;
            let playList = [];
           for (let i = 0; i < playList.length; i++) {
             axios({
                 url:'',
                 methods:'get',
                 params:{
                     id:musicList[i].id
                 }
             }).then(res=>{
                 url=res.data.data[0].url;
                 let song=new Song(i,musicList[i],url,musicList[i].id)
                 playList.push(song);
                 if(i==playList.length-1){
                      /**全局播放事件
                         * @playList         处理后的播放列表
                         * @index            音乐列表中音乐开始播放的位置
                         * @musicList        歌曲列白，用于播放器中歌单展示
                         * @id               唯一标识，用于显示当前播放歌曲的列表
                         */
                     this.$bus.$emit("playMusic",playList,index,musicList,id)
                 }
             })
               
           }
            
        }
    },
}