import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//  必须用import * as .. 否则无法导入
import * as echarts from 'echarts'
import '@/assets/font/iconfont.css'
import '@/assets/css/global.less'
import '../public/static/theme/chalk.js'
import '../public/static/theme/vintage.js'
import axios from 'axios'
// 将websocket连接上
import SocketService from './utils/socket_service'
SocketService.Instance.connect()
Vue.prototype.$socket = SocketService.Instance
axios.defaults.baseURL = 'http://127.0.0.1:8888/api'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
