import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import Web3 from 'web3'
// import store from './store'
import Vant from 'vant';
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css';
import Tips from './components/Tips/tips';


Vue.config.productionTip = false

Vue.prototype.$web3 = Web3


// 导入挂载axios
Vue.prototype.$http = axios
// 配置请求根路径 
axios.defaults.baseURL = window.wl.baseUrl

Vue.use(VueI18n)
Vue.use(Vant)

// 获取文字配置
let messages = {}
for (let i = 0; i < window.wl.lang.length; i++) {
  messages[window.wl.lang[i].lang.node] = window.wl.lang[i]
}
// 创建i18n实例
const i18n = new VueI18n({
  // 这是设置语言包，默认语言,  
  locale: 'en',
  messages: messages
})

Vue.use(Tips)

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
