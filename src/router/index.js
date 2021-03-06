import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vuetest',
  routes: [
    {
      path: '/count',
      component: () => import('@/views/count/count'),
    },
    {
      path: '/add',
      component: () => import('@/views/count/add'),
    }
  ]
})
