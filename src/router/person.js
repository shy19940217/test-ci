export default [
  {
    path: '/person',
    name: '我的',
    meta: {
      title: '我的'
    },
    component: resolve => require(['@/components/person/index'], resolve)
  },
  {
    path: '/setting',
    name: '个人资料',
    meta: {
      title: '个人资料'
    },
    component: resolve => require(['@/components/person/setting'], resolve)
  },
  {
    path: '/mysubscribe',
    name: '我的预约',
    meta: {
      title: '我的预约'
    },
    component: resolve => require(['@/components/person/mysubscribe'], resolve)
  },
  {
    path: '/changemobile',
    name: '更换手机号',
    meta: {
      title: '更换手机号'
    },
    component: resolve => require(['@/components/person/mobileconfirm'], resolve)
  },
  {
    path: '/sendcode',
    name: '',
    meta: {
      title: '更换手机号'
    },
    component: resolve => require(['@/components/person/sendcode'], resolve)
  },
  {
    path: '/question',
    name: '',
    meta: {
      title: '常见问题'
    },
    component: resolve => require(['@/components/person/question'], resolve)
  },
  {
    path: '/banlance',
    name: '',
    meta: {
      title: '余额'
    },
    component: resolve => require(['@/components/person/banlance'], resolve)
  }
]
