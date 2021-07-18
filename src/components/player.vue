<template >
     <transition name="slide">
    <div
      v-if="hasCurrentSong"
      :class="getPlayerShowCls()"
      class="player"
    >
      <div class="content">
        <div class="song">
          <div class="left">
            <img
              class="play-bar-support"
              src="@/assets/image/play-bar-support.png"
            />
            <img
              :class="{playing}"
              class="play-bar"
              src="@/assets/image/play-bar.png"
            />
            <div
              class="img-outer-border"
              ref="disc"
            >
              <div
                :class="{paused: !playing}"
                class="img-outer"
                ref="discRotate"
              >
                <div class="img-wrap">
                  <img :src="currentSong.img" />
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="name-wrap">
              <p class="name">{{currentSong.name}}</p>
              <span
                @click="onGoMv"
                class="mv-tag"
                v-if="currentSong.mvId"
              >MV</span>
            </div>
            <div class="desc">
              <div class="desc-item">
                <span class="label">歌手：</span>
                <div class="value">{{currentSong.artistsText}}</div>
              </div>
            </div>
            <empty v-if="nolyric">还没有歌词哦~</empty>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "@/store/helper/music"
import empty from '../components/empty'
import { goMvWithCheck } from "../utils/business";
export default {
    components:{
empty,

    },
    data() {
        return {
            nolyric:false,
        }
    },
    created() {
        console.log(this.currentSong.img);
    },
    methods: {
        onGoMv(){
          this.setPlayerShow(false)
this.$router.push(`/mv/${this.currentSong.mvId}`)
        },
        getPlayerShowCls(){
return this.isPlayerShow?"show":"hide"
        },
      ...mapMutations(["setPlayerShow"]),
    ...mapActions(["startSong"])   
    },
    computed:{
 ...mapState(["currentSong", "currentTime", "playing", "isPlayerShow"]),
  ...mapGetters(["hasCurrentSong"])
    },
    watch:{

    }
}
</script>
<style lang="scss" scoped>
    $img-left-padding: 36px;
$img-outer-border-d: 320px;
$img-outer-d: 300px;
  .player {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 60px;
      top: 58px;
      overflow: hidden;
  overflow-y: auto;
  transition: transform 0.5s;
  background: #F9F9F9;
  z-index: 1000;
  &.hide {
    transform: translateY(110%);
  }
   &.show {
    transform: none;
  }
    .content {
    max-width: 870px;
    margin: auto;
      .song {
          display: flex;
        .left {
            position: relative;
          padding: 80px 70px 0 $img-left-padding;;
            display: flex;
            justify-content: center;
             $support-d: 30px;
        $support-d-half: $support-d / 2;
          img.play-bar-support {
 position: absolute;
          left: $img-left-padding + $img-outer-border-d / 2 - $support-d / 2;
          top: -$support-d-half;
          width: $support-d;
          height: $support-d;
          z-index: 2;
          }
          img.play-bar {
             $w:100px;
             $h:146px;
          position: absolute;
           top: 0;
          left: $img-left-padding + $img-outer-border-d / 2 - 6px;
          width: $w;
          height: $h;
          z-index: 1;
           transform-origin: 0 0;
          transform: rotate(-30deg);
          transition: all 0.3s;

          &.playing {
            transform: rotate(5deg);
          }
          }

          .img-outer-border {
               display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: $img-outer-border-d;
  height: $img-outer-border-d;
  border-radius: 50%;
background: #E6E5E6;
            .img-outer {
                width:$img-outer-d ;
                height: $img-outer-d;
                border-radius: 50%;
                 display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
 background: linear-gradient(-45deg, #333540, #070708, #333540);
 animation: rotate 20s linear infinite;

            &.paused {
              animation-play-state: paused;
            }
              .img-wrap {
                  height: 200px;
                  width: 200px;
                  flex-shrink: 0;
                img {
width: 1005;
height: 100%;
 border-radius: 50%;
                }
              }
            }
          }
        }

        .right {
            flex: 1;
             padding-top: 45px;
          .name-wrap {
               display: flex;
          align-items: center;
          margin-bottom: 16px;
            p.name {
font-size: 24px;
color: #333333;
            }
         span.mv-tag {
             display: inline-block;
 margin-left: 8px;
            padding: 2px;
            border: 1px solid currentColor;
            border-radius: 2px;
            color: #d33a31;
            cursor: pointer;
            }
          }

          .desc {
               display: flex;
          font-size: 12px;
          margin-bottom: 30px;

            .desc-item {
                 display: flex;
            margin-right: 32px;
            text-align: center;
              span.label {
display: inline-block;
              margin-right: 4px;
              }

              .value {
color: #517eaf;
              }
            }
          }

        }
      }
    }
  }
</style>