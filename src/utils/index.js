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
