export default [
  {
    path: '/person',
    name: '我的',
    meta: {
      title: '我的',
      keepAlive: true
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
    name: '更换手机号',
    meta: {
      title: '更换手机号'
    },
    component: resolve => require(['@/components/person/sendcode'], resolve)
  },
  {
    path: '/question',
    name: '常见问题',
    meta: {
      title: '常见问题'
    },
    component: resolve => require(['@/components/person/question'], resolve)
  },
  {
    path: '/banlance',
    name: '余额',
    meta: {
      title: '余额'
    },
    component: resolve => require(['@/components/person/banlance'], resolve)
  },
  {
    path: '/integration',
    name: '积分',
    meta: {
      title: '积分'
    },
    component: resolve => require(['@/components/person/integration'], resolve),
    children: [
      {
        path: '/integration/task',
        name: '积分任务',
        component: resolve => require(['@/components/person/integration_task'], resolve)
      },
      {
        path: '/integration/record',
        name: '积分记录',
        component: resolve => require(['@/components/person/integration_record'], resolve)
      }
    ]
  },
  {
    path: '/exchange',
    name: '积分兑换',
    meta: {
      title: '积分兑换'
    },
    component: resolve => require(['@/components/person/exchange'], resolve)
  },
  {
    path: '/coupon',
    name: '优惠券',
    meta: {
      title: '优惠券'
    },
    component: resolve => require(['@/components/person/coupon'], resolve)
  },
  {
    path: '/invite',
    name: '邀请有礼',
    meta: {
      title: '邀请有礼'
    },
    component: resolve => require(['@/components/person/invite'], resolve)
  }
]
