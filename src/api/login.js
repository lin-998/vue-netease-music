import request from '@/utils/request';
export const Login=new (class{
    constructor(){
        this.getCheckCodeApi="/captcha/sent"//发送验证码
        this.phoneLoginApi="/login/cellphone"//手机号登录
        this.checkVerifyApi="/captcha/verify"//验证验证码UserDetail
        this.getUserDetailApi ="/user/detail"//获取用户详情
        this.getUserAccountApi ="/user/account"//获取账号信息
        this.getUserSubcountApi ="/user/subcount"//获取用户信息 , 歌单，收藏，mv, dj 数量

    }
    getCheckCode(data){
        return request.post(this.getCheckCodeApi,data).then((res)=>res.data)
    }
    phoneLogin(data){
        // /login/cellphone?phone=xxx&password=yyy /login/cellphone?phone=xxx&md5_password=yyy /login/cellphone?phone=xxx&captcha=1234
        return request.post(this.phoneLoginApi,null,{params:data}).then((res)=>res)
    }
Login(data){
    return request.post(this.emailLoginApi,{params:data}).then((res)=>res.data)
}
    checkVerify(param){
        return request.post(this.checkVerifyApi,null,{params:param}).then((res)=>res.data)

    }
    // /user/detail?uid=32953014
    getUserDetail(data){
return request.post(this.getUserDetailApi,null,{params:data}).then((res)=>res.data)
    }
    getUserAccount(data){
        return request.get(this.getUserAccountApi).then((res)=>res.data)
    }
    getUserSubcount(data){
        return request.post(this.getUserSubcountApi).then((res)=>res)
    }

})