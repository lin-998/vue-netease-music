import storage from "good-storage"
import { PLAY_HISTORY_KEY } from "../../../utils/config";
import { getSongImg } from "../../../utils/business";
export default{
    async startSong({commit,state},rawSong){
        const song=Object.assign({},rawSong)
        if(!song.img){
            if(song.albumId){
                song.img=await getSongImg(song.id,song.albumId)
            }
        }
        commit('setCurrentSong',song)
        commit('setPlayingState', true)
        //历史记录
        const {playHistory}=state
        const playHistoryCopy =playHistory.slice()
        const findedIndex=playHistoryCopy.findIndex(({id})=>song.id===id)
          if(findedIndex!==-1){
              //删除旧的那一项，插入到最前面
            playHistoryCopy.splice(findedIndex,1)
          } 
          playHistoryCopy.unshift(song)
          commit('setPlayHistory',playHistoryCopy)
          storage.set(PLAY_HISTORY_KEY,playHistoryCopy) 
        
    }
}