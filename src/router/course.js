export default [
  {
    path: '/course',
    name: '课程服务',
    component: resolve => require(['@/components/course/index'], resolve),
    meta: {
      // keepAlive: true,
      isBack: false,
      title: '课程服务'
    },
    children: [
      {
        path: '/course/teamlesson',
        name: '团体课程',
        component: resolve => require(['@/components/course/teamlesson'], resolve)
      },
      {
        path: '/course/beautify',
        name: '美容服务',
        component: resolve => require(['@/components/course/beautify'], resolve)
      },
      {
        path: '/course/fitness',
        name: '健身私教',
        component: resolve => require(['@/components/course/fitness'], resolve)
      }
    ]
  },
  {
    path: '/teamlesson_detail',
    name: '团体课程',
    meta: {
      // keepAlive: true,
      isBack: false,
      title: '团体课程'
    },
    component: resolve => require(['@/components/course/teamlesson_detail'], resolve)
  },
  {
    path: '/teamlesson_order',
    name: '团体课程',
    meta: {
      // keepAlive: true,
      isBack: false,
      title: '团体课程'
    },
    component: resolve => require(['@/components/course/teamlesson_order'], resolve)
  }
]
