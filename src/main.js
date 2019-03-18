// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ajax from './js/Ajax/index.js'
import store from './store'
import base from './js/base.config'
import attachFastClick from 'fastclick'

import setTitle from '@/js/util'
// import ajax1 from './js/Ajax/ajax.js'
import 'lib-flexible/flexible'
import toastRegistry from '@/common/toast/index'
import { Toast } from 'vant' // 设置页面标题
Vue.prototype.$setTitle = setTitle

Vue.use(Toast)
Vue.use(toastRegistry)
// import 'font-awesome/css/font-awesome.css'
// import GlobalUI from './common/index.js'
// import store from './store/index.js'
// import wxShare from './common/wxShare.js'
// import {getListByCode} from 'common/dictionary'
// import VConsole from 'vconsole/dist/vconsole.min.js'
// Vue.use(Row).use(Col).use(Loading).use(Dialog).use(Collapse).use(CollapseItem).use(Tab).use(Tabs).use(Icon)
Vue.use(ajax)
Vue.use(base)
// Vue.use(Button)
Vue.config.productionTip = false
attachFastClick.attach(document.body)

// 图片地址拼接
// Vue.prototype.$getImg = function (value) {
//   if (value) {
//     return value.split(',').map((t) => {
//       t = base.base.ossResourceUrl + base.base.ossUploadDirectory + t
//       return t
//     }).join(',')
//   } else {
//     return require('@/assets/noimage.png')
//   }
//   // return value ? base.base.ossResourceUrl + value : require('assets/index/noimage.png')
// }
// router.beforeEach((to, from, next) => {
//   if (from.fullPath === '/index' || from.fullPath === '/buyindex') {
//     to.meta.isBack = false
//   } else {

//   }
//   next()
// })
router.beforeEach((to, from, next) => {
  // 如果to /的就先不去处理
  // 否则没有openid的话 就得去授权拿
  /* 路由发生变化修改页面title */
  let isUpdata = false
  let routerArray = to.matched
  for (let i = routerArray.length - 1; i >= 0; i--) {
    // console.log(routerArray[i])
    if (routerArray[i].name && !isUpdata) {
      document.title = routerArray[i].name
      isUpdata = true
    }
  }
  next()
})
// router.afterEach((to, from, next) => {
//   // 回到顶部
//   if (to.fullPath === '/home' || to.fullPath === '/celebrity' || to.fullPath === '/community' || to.fullPath === '/activity' || to.fullPath === '/strategy') {
//     document.body.scrollTop = 0
//     document.documentElement.scrollTop = 0
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
