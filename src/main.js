import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vueCookie from 'vue-cookies'
import axiosDefaults from 'axios/lib/defaults'
axiosDefaults.baseURL = process.env.API_URL || "https://express124san.herokuapp.com"

Vue.config.productionTip = false
Vue.use(vueCookie)
// set default config
vueCookie.config('7d')
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
