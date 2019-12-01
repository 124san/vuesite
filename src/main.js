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
VueCookie.config('7d')

// set global cookie
VueCookie.set('theme','default');
VueCookie.set('hover-time','1s');
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
