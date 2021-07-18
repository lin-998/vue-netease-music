<template >
    <div class="footer_wrap">
       <player />
    </div>
</template>
<script>
 import player from "../player/Player";
export default {
   
    name:"LayoutFooter",
    components:{
        player
    }
}
</script>
<style lang="less" scoped>
    .footer_wrap{
        width: 100%;
    }
</style>