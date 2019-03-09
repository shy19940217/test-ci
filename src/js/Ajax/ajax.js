
import axios from 'axios'
import { Dialog } from 'vant'

function Ajax (opt) {
  let formType = {
    // transformRequest: [function (data) {
    //   let ret = ''
    //   for (let it in data) {
    //     if (it === 'storeId') {
    //       continue
    //     }
    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //   }
    //   ret += 'storeId=' + window.base.storeId
    //   return ret
    // }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  if (process.env.NODE_ENV === 'development') {
    opt.url = '/ots' + opt.url
  }
  if (opt && !opt.isJson) {
    opt = {
      ...opt,
      ...formType
    }
  }

  return axios({
    ...opt,
    validateStatus: function (status) {
      return status === 200
    },
    timeout: 10000
  }).then(response => {
    let code = parseInt(response.data.errCode)
    if (code === 8201) {
      this.$router.push({path: '/shopCloesd'})
    } else {
      return (code === 8200) ? Promise.resolve(response.data) : Promise.reject(response.data.message)
    }
  }).catch(error => {
    let errObj = JSON.parse(JSON.stringify(error))
    let errMsg = error.message || error

    // 对异常结果的处理
    if (errMsg.indexOf('timeout') > -1) {
      errMsg = '请求超时！'
    } else if (errMsg.indexOf('Network Error') > -1) {
      errMsg = ''
      this.$router.push({path: '/noNet'})
    } else if (errObj && errObj.response && errObj.response.status === 500) {
      errMsg = ''
      this.$router.push({path: '/500'})
    }

    if (errMsg) {
      Dialog.alert({
        title: '提示',
        message: errMsg
      }).then(() => {
      })
    }
    return Promise.reject(errMsg)
  })
}

export default Ajax
