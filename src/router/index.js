import Vue from 'vue'
import Router from 'vue-router'
import homerouter from './home'
import courserouter from './course'
import personrouter from './person'
// Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      meta: {
        title: '首页'
      },
      redirect: '/home'
    },
    ...homerouter,
    ...courserouter,
    ...personrouter

  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})
Vue.use(Router)
