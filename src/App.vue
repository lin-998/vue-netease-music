<template>
  <div id="app">
   <Layout />
<Player />
   <MiniPlayer />
   <PlayList />
  </div>
</template>

<script>
import Layout from './layout/Layout'
import MiniPlayer from './components/miniplayer' 
import Player from './components/player'
import PlayList from './components/playlist'
export default {
  name: 'app',
 components:{
   Layout,
MiniPlayer ,
Player,
PlayList
 }
}
</script>

<style lang="scss" scoped>
@import url("./styles/index.css");
#app{
   background-color: var(--body-bgcolor);
}

</style>
