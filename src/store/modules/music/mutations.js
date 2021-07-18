export default{
    setCurrentSong(state,song){
        state.currentSong=song
    },
    setPlayingState(state,playing){
        state.playing=playing
    },
    setCurrentTime(state,time){
        state.currentTime=time
    },
    setPlayerShow(state, show) {
        state.isPlayerShow = show
      },
      setPlayHistory(state,history){
        state.playHistory=history
      },
      setPlayMode(state, mode) {
        state.playMode = mode
      },
      setPlaylistShow(state,show){
        state.isPlaylistShow=show
      },
      setPlaylist(state,song){
        state.playlist=song
      }
}