import { Login } from "../../../api/login";
import { getToken, setAuthToken, removeToken, setToken } from '@/utils/auth'

const getState=()=>{
return{
    loginStaus:false,
    id:sessionStorage.getItem('accountId'),
    userName:'',
    createTime:'',
    token:getToken(),
    avatarUrl:'',
}
}

const state=getState();

const mutations={
setLoginStaus:(state,data)=>{
    state.loginStaus=data
},
setId:(state,data)=>{
    state.id=data
},
setUserName:(state,data)=>{
    state.userName=data
},
setCreateTime:(state,data)=>{
    state.createTime=data
},
setToken:(state,data)=>{
    state.token=data
},
setAvatarUrl:(state,data)=>{
    state.avatarUrl=data
},

}

const actions={
    login({commit},userInfo){
        const {phone,checkCode}=userInfo;
        return new Promise((resolve,reject)=>{
            //检查验证码
Login.checkVerify({phone:phone,captcha:checkCode}).then(res=>{
// 登录
Login.phoneLogin({phone:phone,captcha:checkCode}).then(response=>{
    const {account,token,profile}=response
    commit('setLoginStaus',true)
    commit('setToken',token)
    sessionStorage.setItem('token',token)
    commit('setUserName',account.userName)
    commit('setId',account.id)
    sessionStorage.setItem('accountId',account.id)
    commit('setAvatarUrl',profile.avatarUrl)
    setAuthToken(token)
    setToken('userInfo',account)
    resolve(response)
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