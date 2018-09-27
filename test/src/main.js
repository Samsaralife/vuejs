// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.HOST = '/api'
// axios.defaults.baseURL = 'https://emallapi.yunlai.cn/item/list?enterpriseId=154&categoryIdList=K&pageNum=7&pageSize=12' // https://api.coindesk.com/v1/bpi/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
