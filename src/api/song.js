
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

// 获取歌曲音频
export function getMusicUrl (songName) {
  const SingIdurl = `http://musicapi.yuiyu.cn/search`
  const musicUrl = `http://musicapi.yuiyu.cn/music/url`
  const data = {
    keywords: songName
  }
  return axios.get(SingIdurl, {params: data}).then(res => {
    let data = {
      id: res.data.result.songs[0].id
    }
    return axios.get(musicUrl, {params: data}).then(res => {
      return Promise.resolve(res.data)
    })
  })
}