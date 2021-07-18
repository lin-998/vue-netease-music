<template >
    <div>
        <Banner />
        <NewPlaylists/>
        
        <NewSongs />
        <NewMvs />
    </div>
</template>
<script>
import Banner from "./banner";
import NewPlaylists from "./new-playlists";
import NewMvs from "./new-mvs"
import NewSongs from "./new-songs"
export default {
    components:{
        Banner,
        NewPlaylists,
        NewMvs,
        NewSongs
    }
}
</script>
<style lang="scss" scoped>
    
</style>