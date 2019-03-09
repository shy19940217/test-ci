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
  }
]
