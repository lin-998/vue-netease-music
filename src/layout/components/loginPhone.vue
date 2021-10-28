<template>
  <div class="wrap">
      <div class="phoneLoginTitle"><span>手机号登录</span><i class="el-icon-close"></i>
     </div>
 <div class="phone_main">
<el-form :model="loginForm" :rules="rules" ref="Form" >
    <el-form-item>
        <el-input v-model="phone" placeholder="请输入手机号"></el-input>
    </el-form-item>
     <el-form-item class="identify_code">
        <el-input  v-model="checkCode" placeholder="请输入验证码"></el-input>
        <el-button @click.native="getCode">获取验证码</el-button>
    </el-form-item>
</el-form>
<div class="to_login">
<span>密码登录</span>
 <el-checkbox v-model="checked">自动登录</el-checkbox>
 </div>
 <div class="btn_login" @click="submitLogin"><span>登录</span></div>
 </div>
 <div class="phone_footer">
     <span>其他登录方式</span>
     <span>没有账号?免费注册</span>
 </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.phoneLoginTitle{
background-color: #2d2d2d;
height: 40px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px 0 10px;
margin-bottom: 20px;
color: #ffffff;
}
.phone_main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 100px 0 100px;
    .el-form-item /deep/ .el-form-item__content{
display: flex;
    }
    .to_login{
display: flex;
margin-bottom: 20px;
span{
   display: inline-block;
   width: 200px;
}
.el-checkbox{
  flex: 1;
}
    }
    .btn_login{
          display: flex;
    align-items: center;
    justify-content: center;
background-color: #3787d2;
color: #ffffff;
width: 100%;
height: 40px;
margin-bottom: 20px;
    }
}
.phone_footer{
    display: flex;
    justify-content: space-between;
    background-color: #f7f7f7;
}
</style>