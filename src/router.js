import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import testPage from './components/test.vue'
import about from './components/About.vue'
import jsplayground from './components/jsplayground.vue'
import rpg from './components/rpg.vue'
import login from './components/login.vue'
import dashboard from './components/dashboard.vue'
import axios from 'axios'
import axiosDefaults from 'axios/lib/defaults'
axiosDefaults.baseURL = process.env.API_URL || "https://express124san.herokuapp.com"

Vue.use(Router)
function isAuth(callback) {
  axios.get("/user", {withCredentials: true})    
  .then((response) => {    
    callback(true)
  })    
  .catch((errors) => {    
    callback(false)
  })   
}

function requireAuth (to, from, next) {
  isAuth(res => {
    if (!res){
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
    else {
      next()
    }
  })
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Front',
      component: HelloWorld,
      props: {msg: 'A vue.js project by 124san'}
    },
    {
      path: '/test/:msg',
      name: 'test',
      component: testPage,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/vuejstest',
      name: 'vuejstest',
      component: jsplayground
    },
    {
      path: '/rpg',
      name: 'rpg',
      beforeEnter: requireAuth,
      component: rpg
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      beforeEnter (to, from, next) {
        isAuth(res=> {
          if (res){
            next({
              path: '/dashboard',
              query: { redirect: to.fullPath }
            })
          }
          else {
            next()
          }
        })
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      beforeEnter: requireAuth
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter (to, from, next) {
        axios.get('/logout', {withCredentials: true}).then(res => {
          next('/')
        })
      }
    }
  ]
})
