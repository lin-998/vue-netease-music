<template>
  <div class="wrap">
<div class="login_header"> <span>注册</span>
<i class="el-icon-close"></i>
</div>
<div class="phone_main">
<el-form :model="loginForm" :rules="rules" ref="loginForm" >
    <el-form-item>
        <el-input v-model="phone" placeholder="请输入手机号"></el-input>
    </el-form-item>
     <el-form-item class="identify_code">
        <el-input  v-model="checkCode" placeholder="设置登录密码，不少于8位"></el-input>
    </el-form-item>
</el-form>
 <div class="btn_login" ><span>下一步</span></div>
 </div>
 <div class="phone_footer">
     <span>返回登录</span>
 </div>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrap{
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
}
</style>