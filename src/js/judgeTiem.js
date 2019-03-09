
import format from './common/format.js'
// import {Toast} from 'vant'

export default function () {
  return new Promise(function (resolve, reject) {
    let data = {
      nowDate: '',
      openDate: '',
      isTrue: false
    }
    window.ajax({
      method: 'post',
      url: '/weChat/common/getSysInit',
      data: {}
    }).then(({data}) => {
      data = {
        nowDate: format(data.nowDate, 'YYYY-MM-DD HH:mm:ss'),
        openDate: format(data.openDate, 'YYYY-MM-DD HH:mm:ss'),
        isTrue: data.true
      }
      // if (!data.isTrue) {
      //   Toast('活动开始时间为:\n' + format(data.openDate, 'YYYY-MM-DD HH:mm'))
      // }
      resolve(data)
    }).catch(res => {
      resolve(data)
    // this.searchLoading = false
    })
  })
}
