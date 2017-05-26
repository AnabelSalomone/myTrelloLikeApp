import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Cache from '@/components/Cache'
import Taches from '@/components/Tasks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Taches',
      component: Taches
    },
    {
      path: '/hidden',
      name: 'Hidden',
      component: Cache
    }
  ]
})
