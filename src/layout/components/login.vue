<template>
<div class="wrap">
   <!-- <div class="contain-content">
      <component   :is="componentView"  class="component-container-view">
        <slot />
      </component>
    </div> -->
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
<div class="btn_other" @click="otherLogin=true"><span>选择其他登录方式</span></div>
<el-dialog
:visible.sync="otherLogin"
width="50%"
>
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
</el-dialog>
<el-dialog
  title="提示"
  :visible.sync="phoneLogin"
  width="50%"

  >
 <div>
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
 
  
</el-dialog>
手机号注册
<el-dialog
  title="提示"
  :visible.sync="phoneLogin"
  width="50%"
  >
  <div class="login_header"> <span>登录</span>
<i class="el-icon-close"></i>
</div>
<div class="phone_main">
<el-form :model="loginForm" :rules="rules" ref="loginForm" >
    <el-form-item>
        <el-input v-model="phone" placeholder="请输入手机号"></el-input>
    </el-form-item>
     <el-form-item class="identify_code">
        <el-input  v-model="checkCode" placeholder="请输入验证码"></el-input>
        <el-button @click.native="getCode">获取验证码</el-button>
    </el-form-item>
</el-form>
 <div class="btn_login" @click="submit"><span>注册</span></div>
 </div>
  </el-dialog>
  </div>
</template>

<script>
import { Login } from "../../api/login";
export default {
 data (){
    const validatePhone = (rule, value, callback) => {
      if (value.length != 11) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    const validateAuthcode = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error('请输入正确验证码'))
      } else {
        callback()
      }
    }
     return{
       componentView:'',
         phoneLogin:false,
         otherLogin:false,
        loginForm: {
          phone: '',
          checkCode: '',
        },
        rules: {
          phone: [
            { required: true, validator: validatePhone, trigger: 'blur' }
          ],
           checkCode: [
            { required: true, validator: validateAuthcode, trigger: 'blur' }
          ],
        }
     }
 },
 create(){

 },
 methods:{
submitLogin(){
this.$refs.Form.validate((valid) => {
  if(valid){
this.$store.dispatch('user/login',this.loginForm)
.then(()=>{
  //存储登录信息
  this.setUserInfo()
})
.catch((error)=>{
  console.log(error.msg);
})
  }else{
    console.log('error submit!!')
          return false
  }
  })
},
setUserInfo(){

},
getCode(){
    console.log(111);
    let data={
     phone:this.loginForm.phone
    }
    Login.getCheckCode(data).then(res=>{
        console.log(res);
        this.loginForm.checkCode=res.data
    })
}
 },


}
</script>

<style lang="scss" scoped >
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
.wrap{
    .login_header {
  span {

  }

  i.el-icon-close {

  }
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