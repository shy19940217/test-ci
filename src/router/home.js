export default [
  {
    path: '/home',
    name: '西柚美学',
    component: resolve => require(['@/components/home/index'], resolve),
    meta: {
      title: '西柚美学',
      keepAlive: true,
      isBack: false
    }
  },
  {
    path: '/detail',
    name: '项目详情',
    component: resolve => require(['@/components/home/detail'], resolve),
    meta: {
      title: '项目详情'
    }
  }
]
