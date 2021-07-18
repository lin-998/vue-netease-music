<template>
      <div @click="onClick" class="horizontal-card">
    <slot name="img-wrap">
      <div class="img-wrap">
        <img :src=img />
        <slot name="img-mask"></slot>
      </div>
    </slot>
    <div class="content">
      <div class="name">{{ name }}</div>
      <div class="desc">
        <slot name="desc">{{ desc }}</slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"Card",
    props:["img","name","desc"],

    methods:{
        onClick(e){
            this.$emit('click',e)
        }
    },
}
</script>
<style lang="scss" scoped>
    
    .horizontal-card {
        display: flex;
  padding: 0 4px;
  cursor: pointer;
width: 140px;
 height: 78.4px;
  
    .img-wrap {
//         position: relative;
//  width: 140px;
//  height: 78.4px;
      img {
border-radius: 4px;


    }
  }

  .content {
   display: flex;
   flex-direction: column;
   justify-content: center;
    .name {
margin-bottom: 4px;
overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #4a4a4a;
    }

    .desc {
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #bebebe;
    }
  }
}
</style>