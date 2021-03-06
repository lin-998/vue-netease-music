import Vue from 'vue'
import Vuex from 'vuex'
import musicModule from './modules/music'
import musicUser from './modules/user'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
 
  mutations: {
  },
  actions: {
  },
  modules: {
    music:musicModule,
    user:musicUser
  },
  getters
})
