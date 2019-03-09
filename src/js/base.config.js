const base = {
  uploadip: '',
  ossResourceUrl: '', // 图片路径
  regionCode: '330700000000',
  area: {},
  storeId: '', // 店铺ID
  mapCenter: [125.3247893, 43.8868593], // 导航页相关
  wxShare: { // 微信分享
    storeName: '',
    desc: '本地旅游生活体验，新鲜好玩，惊喜不断！',
    img: `http://${window.location.host}${window.location.pathname.lastIndexOf('/') > 0 ? window.location.pathname.replace('/index.html', '') : ''}/static/officialAvatar.jpg`
  },
  // userId: '', // 数据库存储的用户id，有别于微信用户的openid
  serviceTel: '', // 订单详情页设置的客服电话，暂时全部写死
  serviceTime: '',
  orderEffectTime: 30, // 订单支付有效时间，暂为30分钟
  wechat: {
    createId: '123456789',
    createName: '张三',
    imageUrl: 'http://himg.bdimg.com/sys/portrait/item/c3f5e6b5aee587bae79a84e4b8b8e5ad905203.jpg'
  },
  wxAppid: {
    'jilindev.lishicloud.com': 'wxa61705ab8dd81841',
    'jilintest.lishicloud.com': 'wx1f2bd62c43986ed0',
    'www.j-travel365.com': 'wx6c4fe1e85f15d85e',
    'jzymt.j-travel365.com': 'wx0e519dc17b268a96'
  },
  _wxAppid: 'wx6c4fe1e85f15d85e',
  weatherConfig: {
    appid: 'ec2e584c374c44c2a6f83f553ad7e88d',
    sign: '1810fd0e75cd49cb876dd657c9f67c29'
  }
}

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return
  Vue.prototype.$base = base
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  version: '1.0.0',
  install,
  base
}
