export default [
  {
    path: '/404',
    name: '',
    component: resolve => require(['@/components/common/404'], resolve),
    meta: {
      title: ''
    }
  },
  {
    path: '/illegal',
    name: '',
    component: resolve => require(['@/components/common/illegal'], resolve),
    meta: {
      title: ''
    }
  },
  {
    path: '/nodata',
    name: '',
    component: resolve => require(['@/components/common/nodata'], resolve),
    meta: {
      title: ''
    }
  }
]
