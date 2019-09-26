import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import testPage from './components/test.vue'
import about from './components/About.vue'
import jsplayground from './components/jsplayground.vue'
import rpg from './components/rpg.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/helloworld',
      name: 'helloworld',
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
      path: '/jsplayground',
      name: 'jsplayground',
      component: jsplayground
    },
    {
      path: '/rpg',
      name: 'rpg',
      component: rpg
    }
    // ,{
    //   path: '/',
    //   name: 'sample',
    //   component: () => import('./views/Sample.vue')
    // }
  ]
})
