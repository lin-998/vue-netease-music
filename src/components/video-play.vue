<template>
  <div class="video-player" ref="player"></div>
</template>
<script type="text/ecmascript-6">
import Player from "xgplayer";
export default {
  name: "VideoPlayer",
  props: ["url", "poster"],
  mounted() {
    this.initPlayer();
  },
  methods: {
    initPlayer() {
      if (!this.url) return;
      this.player = new Player({
        el: this.$refs.player,
        url: this.url,
        poster: this.poster,
        videoInit: true,
        lang: "zh-cn",
        width: "100%",
      });
    },
   
  },
  watch: {
    url(url, oldUrl) {
      if (url && url !== oldUrl) {
        if (!this.player) {
          this.initPlayer();
        } else {
          this.player.src = url;
          this.player.reload();
        }
      }
    },
    poster(newPoster) {
      console.log('newPoster: ', newPoster);
    }
  },
};
</script>

<style>
.xgplayer-error {
  display: none;
}
</style>