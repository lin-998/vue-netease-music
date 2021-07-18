import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import "./assets/css/global.css";
import VbestUi from 'vbest-ui'
import 'vbest-ui/dist/vbest-ui.css'
import './assets/fonts/iconfont.css'
// import '@/style/index.scss'
Vue.config.productionTip = false

Vue.use(VbestUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
