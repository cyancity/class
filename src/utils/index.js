export function setTimer (element, time = 60) {
  let timer = setInterval(() => {
    time--
    element.innerHTML = time + '秒后重新获取'
    element.style.color = '#ccc'
    element.disabled = 'disabled'
    if (time === 0) {
      element.disabled = ''
      element.style.color = '#ffa600'
      element.innerHTML = '获取验证码'
      clearInterval(timer)
    }
  }, 1000)
}

export function paramToObj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{*' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export function htmlToText (val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

export function objectMerge (target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  for (const item in source) {
    if (source.hasOwnProperty(item)) {
      const sourceProperty = source[item]
      if (typeof sourceProperty === 'object') {
        target[item] = objectMerge(target[item], sourceProperty)
        continue
      }
      target[item] = sourceProperty
    }
  }
  return target
}
