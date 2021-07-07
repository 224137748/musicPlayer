import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'
const baseUrl = 'http://findream.vip/api/music'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = baseUrl + '/personalized'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取推荐歌曲类型  详情歌单列表
export function getSongList(disstid) {
  const url = baseUrl + '/playlist/detail?id=' + disstid
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}
