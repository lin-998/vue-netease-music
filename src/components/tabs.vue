<template>
    <div class="wrap">
       <ul class="tabs-wrap" >
          <li class="tab" v-for="(item,index) in Tabs" :key="index"  @click="onChangetab(index)" >
            <span class="title" >{{item.title}}</span>
          </li> 
       </ul>
    </div>
</template>
<script>
const ACTIVE_PROP = "active"
const ACTIVE_CHANGE = "tabChange"
export default {
    props:{
    active: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array,
      default: () => []
    },
    },
    model:{
prop:ACTIVE_PROP,
event:ACTIVE_CHANGE
    },
    computed:{
Tabs(){
    return typeof this.tabs[0]==="string"
    ?this.tabs.map(tab=>({title:tab})):this.tabs
}
    },
    methods:{
        onChangetab(index){
             this.$emit(ACTIVE_CHANGE, index)
        }
    }
}
</script>
<style lang="scss" scoped>
.wrap{
display: flex;
justify-content: center;
margin-top: 20px;
 ul.tabs-wrap {

         display: flex;
        li.tab {
            margin-right: 10px;
            padding: 12px 0;
          cursor: pointer;
          white-space: nowrap;
          font-size: 15px;
          span.title {
color: #7f7f81;
          }
        }
      }
}
.active{
  color: #d33a31 !important
}
</style>