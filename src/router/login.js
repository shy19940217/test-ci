export default [
  {
    path: '/login',
    name: '登录',
    component: resolve => require(['@/components/login/index'], resolve),
    meta: {
      title: '绑定手机'
    }
  },
  {
    path: '/intoface',
    name: '录入人脸',
    component: resolve => require(['@/components/login/enter_face'], resolve),
    meta: {
      title: '录入人脸'
    }
  }
]
