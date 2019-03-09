export default [
  {
    path: '/home',
    name: '首页',
    component: resolve => require(['@/components/home/index'], resolve),
    meta: {
      title: '西柚美学',
      keepAlive: true,
      isBack: false
    }
  }
]
