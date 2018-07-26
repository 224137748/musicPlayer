
// import { commonParams } from './config'
import axios from 'axios'

export function getMusic (songmid) {
  const url = '/music/url'
  const data = {
    id: 33894312
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
