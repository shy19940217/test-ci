export default [
  {
    path: '/course',
    name: '课程服务',
    component: resolve => require(['@/components/course/index'], resolve),
    meta: {
      keepAlive: true,
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
    name: '团课详情',
    meta: {
      title: '详情'
    },
    component: resolve => require(['@/components/course/teamlesson_detail'], resolve)
  },
  {
    path: '/teamlesson_order',
    name: '预约',
    meta: {
      title: '团体课程预约'
    },
    component: resolve => require(['@/components/course/teamlesson_order'], resolve)
  },
  {
    path: '/beautify_detail',
    name: '美容服务详情',
    meta: {
      title: '美容服务详情'
    },
    component: resolve => require(['@/components/course/beautify_detail'], resolve)
  },
  {
    path: '/beautify_order',
    name: 'beautify_order',
    meta: {
      // keepAlive: true,
      isBack: false,
      title: '美容服务预约'
    },
    component: resolve => require(['@/components/course/beautify_order'], resolve)
  },
  {
    path: '/choosedate',
    name: '选择时间',
    meta: {
      title: '美容服务详情',
      keepAlive: true
    },
    component: resolve => require(['@/components/course/choosedate'], resolve)
  },
  {
    path: '/chooseperson',
    name: '选择服务人员',
    meta: {
      title: '选择服务人员',
      keepAlive: true
    },
    component: resolve => require(['@/components/course/chooseperson'], resolve)
  },
  {
    path: '/choosestore',
    name: '选择服务人员',
    meta: {
      title: '选择服务门店',
      keepAlive: true
    },
    component: resolve => require(['@/components/course/choosestore'], resolve)
  }
]
