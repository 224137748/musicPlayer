
import { commonParams } from './config'
import axios from 'axios'

export function getMusic (songmid) {
  const url = '/song/url'
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
  const SingIdurl = `http://findream.vip/api/music/search`
  const musicUrl = `http://findream.vip/api/music/song/url`
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
// 获取网易云歌曲音频
export function getMusicUrlWYY (id) {
  const musicUrl = `http://findream.vip/api/music/song/url`
  let data = {
    id
  }
  return axios.get(musicUrl, {params: data}).then(res => {
    return Promise.resolve(res.data)
  })
}
// 获取网易云歌曲歌词
export function getLyricWYY (id) {
  const url = 'http://findream.vip/api/music/lyric?id=' + id
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getLyric(mid) {
  const url = '/api/lyric'
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
