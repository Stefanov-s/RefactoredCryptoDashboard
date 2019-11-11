import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/views/Demo.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: '/',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Demo
    }
  ]
})
