<template>
  <div class="wrap">
 <div >
<div class="login_header"> <span>登录</span>
<i class="el-icon-close"></i>
</div>
<div class="login_mian">
    <div class="left">
        <img src="" alt="">
        <div class="btn-login" @click="phoneLogin=true">手机号登录</div>
<div class="btn-register">注册</div>
    </div>
    <div class="right">
        <ul>
           <li><img src="" alt=""><span>微信登录</span></li>
            <li><img src="" alt=""><span>QQ登录</span></li> 
             <li><img src="" alt=""><span>微博登录</span></li> 
              <li><img src="" alt=""><span>网易邮箱账号登录</span></li>  
        </ul>
    </div>
</div>
<div class="login_footer">
    <div class="rule">
        <input type="checkbox" name="" id="">
    <span>同意《服务条框》</span>
    </div>
    <div class="login-qrcode"></div>
</div>
</div>
  </div>
</template>

<script>
export default {

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

.login_mian {
    display: flex;
  .left {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      border-right: 1px solid #ccc;
      padding: 5px 5px 5px 5px;
      width: 250px;
      height: 250px;
    img {
width: 150px;
height: 150px;
    }

    .btn-login {
display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
     width: 80%; 
      background-color: #2979c7;
    }

    .btn-register {
        margin-top: 10px;
display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f7f7f7;
      height: 30px;
      width: 80%;
    }
  }

  .right {
      flex: 1;
   ul{
       margin-left: 80px;
        display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 10px 20px 0 20px;
       li{
            display: flex;
            align-items: center;
            justify-content: center;
      margin-top: 30px;
      img{
               width: 30px;
               height: 30px;
               border-radius: 15px;
           }
          span{
              margin-left: 20px;
              flex: 1;
          } 
       }
   }
}

.login_footer {
    display: flex;
  .rule {
      display: flex;
    input {

    }

    span {

    }
  }

}
}
}
</style>