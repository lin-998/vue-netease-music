<template>
  <div class="wrap">
 <div class="login_header"> <span>登录</span>
<i class="el-icon-close"></i>
</div>
<div class="scan_main">
    <div class="left"></div>
<div class="right">
    <div class="title">扫码登录</div>
    <div class="qr"></div>
    <span>使用网易云app登录</span>
</div>
</div>
<div class="btn_other" @click="handle"><span>选择其他登录方式</span></div>
  </div>
</template>

<script>
export default {
data(){
    return{

    }
},
methods:{
    handle(){
        let name='loginWay'
        this.$emit("passName",name)
    }
}
}
</script>

<style lang='scss' scoped>
.wrap{
   .login_header {
background-color: #2d2d2d;
height: 40px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px 0 10px;
} 
.scan_main {
    margin-top: 20px;
    display: flex;
  .left {
width: 250px;
height: 250px;
  }

  .right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    .title {

    }

    .qr {
        width: 200px;
        height: 200px;
background-color: pink;
    }

    span {

    }
  }
}

.btn_other {
    display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
  span {
       width:130px ;
      height: 30px;
      border: 1px solid #ccc;
border-radius:15px;
line-height: 30px;
text-align: center;
  }
}
}
</style>