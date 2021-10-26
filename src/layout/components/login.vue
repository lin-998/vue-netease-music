<template>
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
    <div login-qrcode></div>
</div>

<el-dialog
  title="提示"
  :visible.sync="phoneLogin"
  width="50%"

  >
 <div>
     <div class="phoneLoginTitle"><i class="el-icon-close"></i>
     </div>
 <div class="phone_main">
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
    <el-form-item>
        <el-input v-model=" phone" placeholder="请输入手机号"></el-input>
    </el-form-item>
     <el-form-item class="identify_code">
        <el-input  v-model="  checkCode" placeholder="请输入验证码"></el-input>
        <el-button @click.native="getCode">获取验证码</el-button>
    </el-form-item>
</el-form>
<div class="to_login">
<span>密码登录</span>
 <el-checkbox v-model="checked">自动登录</el-checkbox>
 </div>
 <div class="btn_login" @click.native="submit"><span>登录</span></div>
 </div>
 <div class="phone_footer">
     <span>其他登录方式</span>
     <span>没有账号?免费注册</span>
 </div>
 </div>
 
  
</el-dialog>

  </div>
</template>

<script>
import { Login } from "../../api/login";
export default {
 data (){
     return{
         phoneLogin:false,
          ruleForm: {
          phone: '',
          checkCode: '',
        },
        rules: {
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
           checkCode: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ],
        }
     }
 },
 create(){

 },
 methods:{
submit(){

},
getCode(){
    console.log(111);
    let data={
       "phone":13046256071,
    }
    Login.getCheckCode(data).then(res=>{
        console.log(res);
    })
}
 },


}
</script>

<style lang="scss" scoped>
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
      border-right: 1px solid #2d2d2d;
      padding: 5px 5px 5px 5px;
    img {
width: 150px;
height: 150px;
    }

    .btn-login {
display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
     width: 100%; 
      background-color: #2979c7;
    }

    .btn-register {
display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f7f7f7;
      height: 30px;
      width: 100%;
    }
  }

  .right {
   ul{
        display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 10px 20px 0 20px;
       li{
            display: flex;
      align-items: center;
      justify-content: center; 
      margin-top: 30px;
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
.phoneLoginTitle{
background-color: #2d2d2d;
height: 40px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px 0 10px;
}
.phone_main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 100px 0 100px;
    .identify_code{
display: flex;
    }
    .to_login{
display: flex;
margin-bottom: 20px;
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
}
</style>