export default [
  {
    path: '/login',
    name: '登录',
    component: resolve => require(['@/components/login/index'], resolve),
    meta: {
      title: '绑定手机',
      keepAlive: true,
      isBack: false
    }
  }
]