import storage from 'good-storage'
const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15

// 调换一下搜索值的位置，如有有搜索值，就删除放在最前面
function insertArray (arr, val, compare, maxlen) {
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if (maxlen && arr.length > maxlen) {
    arr.pop()
  }
}
export function saveSearch (query) {
  let searches = storage.get(SEARCH_KEY, [])
  insertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH)
  storage.set(SEARCH_KEY, searches)
  return searches
}
export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}

export function deleteSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  let index = searches.findIndex((item) => {
    return item === query
  })
  if (index > -1) {
    searches.splice(index, 1)
  }
  storage.set(SEARCH_KEY, searches)
  return searches
}
export function clearSearch() {
  storage.remove(SEARCH_KEY)
  return []
}
