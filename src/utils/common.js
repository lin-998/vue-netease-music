export function isDef(v) {
    return v !== undefined && v !== null
  }
  export function notify(message, type) {
    const params = {
      message,
      duration: 1500
    }
    const fn = type ? Notification[type] : Notification
    return fn(params)
  }
  ['success', 'warning', 'info', 'error'].forEach(key => {
    notify[key] = (message) => {
      return notify(message, key)
    }
  })
  //不满10补0
  export function pad(num, n = 2) {
    let len = num.toString().length
    while (len < n) {
      num = '0' + num
      len++
    }
    return num
  }
  export function formatTime(interval) {
    interval = interval | 0
    const minute = pad((interval / 60) | 0)
    const second = pad(interval % 60)
    return `${minute}:${second}`
  }
  
  export function formatNumber(number) {
    number = Number(number) || 0
    return number > 100000 ? `${Math.round(number / 10000)}万` : number
  }
  