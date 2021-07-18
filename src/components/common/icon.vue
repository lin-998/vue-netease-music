<script>
export default {
    name:"Icon",
props:{
    size:{
        type:Number,
        default:16
    },
    type:{
        type:String,
        require:true
    },
    color:{
        type:String,
        default:""
    }
},
methods:{
    getIconCls(){
        let cls=`icon-${this.type}`
        if(this.color){
            cls+=` icon-color-${this.color}`
        }
return cls
    },
onClick(e){
    this.$emit("click",e)
}
},
render(){
    const Icon=(
<i
onClick={this.onClick} 
class={`iconfont icon-component ${this.getIconCls()}`}
/>
    )
     
}
}
</script>
<style lang="scss" scoped>
    
</style>