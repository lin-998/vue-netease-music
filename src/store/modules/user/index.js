import { Login } from "../../../api/login";


const getState=()=>{
return{
    loginStaus:false,

}
}

const state=getState();

const mutations={
setLoginStaus:(state,data)=>{
    state.loginStaus=data
}
}

const actions={
    login({commit},userInfo){
        const {phone,checkCode}=userInfo;
        return new Promise((resolve,reject)=>{
            //检查验证码
Login.checkVerify({phone:phone,captcha:checkCode}).then(res=>{
//登录
Login.phoneLogin({phone:phone,captcha:checkCode}).then(res=>{
    const{data}=response
    commit('setLoginStaus',true)
    resolve(data)
}).catch(error=>{
    reject(error)
})

}).catch(error=>{
reject(error)
})
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }