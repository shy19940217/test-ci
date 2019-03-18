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
        component: resolve => require(['@/components/course/template1/teamlesson'], resolve)
      },
      {
        path: '/course/beautify',
        name: '美容服务',
        component: resolve => require(['@/components/course/template2/beautify'], resolve)
      },
      {
        path: '/course/fitness',
        name: '健身私教',
        component: resolve => require(['@/components/course/template3/fitness'], resolve)
      }
    ]
  },
  {
    path: '/teamlesson_detail',
    name: '确认预约',
    meta: {
      title: '确认预约'
    },
    component: resolve => require(['@/components/course/template1/teamlesson_detail'], resolve)
  },
  {
    path: '/teamlesson_order',
    name: '预约',
    meta: {
      title: '团体课程预约'
    },
    component: resolve => require(['@/components/course/template1/teamlesson_order'], resolve)
  },
  {
    path: '/beautify_detail',
    name: '美容服务详情',
    meta: {
      title: '美容服务详情'
    },
    component: resolve => require(['@/components/course/template2/beautify_detail'], resolve)
  },
  {
    path: '/beautify_order',
    name: '美容服务预约',
    meta: {
      // keepAlive: true,
      isBack: false,
      title: '美容服务预约'
    },
    component: resolve => require(['@/components/course/template2/beautify_order'], resolve)
  },
  {
    path: '/training_detail',
    name: '私教详情',
    meta: {
      title: '私教详情'
    },
    component: resolve => require(['@/components/course/template3/training_detail'], resolve)
  },
  {
    path: '/training_order',
    name: '私教预约',
    meta: {
      // keepAlive: true,
      isBack: false,
      title: '私教预约'
    },
    component: resolve => require(['@/components/course/template3/training_order'], resolve)
  },
  {
    path: '/choosedate',
    name: '选择时间',
    meta: {
      title: '选择时间'
    },
    component: resolve => require(['@/components/course/choosedate'], resolve)
  },
  {
    path: '/chooseproject',
    name: '选择项目',
    meta: {
      title: '选择项目'
    },
    component: resolve => require(['@/components/course/chooseproject'], resolve)
  },
  {
    path: '/chooseperson',
    name: '选择服务人员',
    meta: {
      title: '选择服务人员'
    },
    component: resolve => require(['@/components/course/chooseperson'], resolve)
  },
  {
    path: '/choosestore',
    name: '选择服务门店',
    meta: {
      title: '选择服务门店'
    },
    component: resolve => require(['@/components/course/choosestore'], resolve)
  }
]
