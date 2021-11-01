import request from '@/utils/request';
export const Login=new (class{
    constructor(){
        this.getCheckCodeApi="/captcha/sent"//发送验证码
        this.phoneLoginApi='/login/cellphone'//手机号登录
        this.emailLoginApi='/login'//邮箱登录
        this.checkVerifyApi='/captcha/verify'
    }
    getCheckCode(data){
        return request.post(this.getCheckCodeApi,data).then((res)=>res.data)
    }
    phoneLogin(data){
        return request.post(this.phoneLoginApi,data).then((res)=>res.data)
    }
Login(data){
    return request.post(this.emailLoginApi,{params:data}).then((res)=>res.data)
}
    checkVerify(param){
        return request.post(this.checkVerifyApi,{params:param}).then((res)=>res.data)
    }
})