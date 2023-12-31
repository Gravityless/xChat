/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Xu Song
 * @Date: 2023-11-10 21:28:58
 * @LastEditors: Xu Song
 * @LastEditTime: 2021-03-20 22:14:48
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueSocketIO from 'vue-socket.io';
import router from './router'
import SocketIO from 'socket.io-client'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$axios = Axios;

Vue.use(VueAxios, Axios);
Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('ws://localhost:3000')
}))

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
