<template>
  <div
    :style="wrapStyle"
    class="play-icon-wrap"
  >
     <i class="el-icon-caret-right"  :size="iconSize" > </i>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'PlayIcon',
  props: {
    size: {
      type: Number,
      default: 24,
    }
  },
  computed: {
    wrapStyle() {
      return { width: `${this.size}px`, height: `${this.size}px` }
    },
    iconSize() {
      const iconSize = this.size * 0.6
      return iconSize
    }
  }
}
</script>

<style lang="scss" scoped>
.play-icon-wrap {
display: flex;
justify-content: center;
align-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);

  .play-icon {
    color: red;
  }
}
</style>
