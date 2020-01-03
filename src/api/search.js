import axios from 'axios'
const baseUrl = 'http://findream.vip:3000'
export function getHotKey () {
  const url = baseUrl + '/search/hot'
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}
export function search (query, type) {
  const url = baseUrl + '/search'
  let data = {
    keywords: query,
    type
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

