// 转换标准时间为时间戳
export function getDateTimeStamp (dateStr) {
  return Date.parse(dateStr ? dateStr.replace(/-/gi, '/') : new Date())
}

// 将时间戳转换为几个月前，几周前，几天前，几分钟前的形式
export function getDateDiff (dateTimeStamp) {
  var minute = 1000 * 60
  var hour = minute * 60
  var day = hour * 24
  var month = day * 30
  var now = new Date().getTime()
  var diffValue = now - dateTimeStamp
  if (diffValue < 0) { return }
  var monthC = diffValue / month
  var weekC = diffValue / (7 * day)
  var dayC = diffValue / day
  var hourC = diffValue / hour
  var minC = diffValue / minute
  var result = ''
  if (monthC >= 1) {
    result = '' + parseInt(monthC) + '月前'
  } else if (weekC >= 1) {
    result = '' + parseInt(weekC) + '周前'
  } else if (dayC >= 1) {
    result = '' + parseInt(dayC) + '天前'
  } else if (hourC >= 1) {
    result = '' + parseInt(hourC) + '小时前'
  } else if (minC >= 1) {
    result = '' + parseInt(minC) + '分钟前'
  } else { result = '刚刚' }
  return result
}

// 防止xss攻击的基本方法
export function htmlEncodeByRegExp (str) {
  var s = ''
  if (str.length === 0) return ''
  s = str.replace(/&/g, '&amp;')
  s = s.replace(/</g, '&lt;')
  s = s.replace(/>/g, '&gt;')
  s = s.replace(/ /g, '&nbsp;')
  s = s.replace(/\\'/g, '&#39;')
  s = s.replace(/\\"/g, '&quot;')
  return s
}
// var now = 0
// 倒计时方法
/**
 * @param {timestamp} startTime  传入开始时间，如是支付的话就是下单时间，时间戳格式
 * @param {now} startTime  传入服务器的当前时间
 * @param {number} effectTime  有效时间，暂时以分钟为单位，以后再拓展方法
 */
export function getSplitTime (startTime, now, effectTime) {
  let str = ''
  if (now > startTime) {
    let diffTime = effectTime * 60 * 1000 - (now - startTime) // 从开始到现在已经消耗的时间
    let minute = 1000 * 60
    let minuteC = parseInt(diffTime / minute)
    let secondC = parseInt((diffTime % minute) / 1000)
    str = (diffTime > 0) ? (minuteC + ':' + get0(secondC)) : '00:00'
  } else {
    str = '00:00'
  }
  return str
}

function get0 (num) {
  return num < 10 ? ('0' + num) : num
}
