import Vue from 'vue'
import Vuex from 'vuex'
import musicModule from './modules/music'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    music:musicModule
  }
})
