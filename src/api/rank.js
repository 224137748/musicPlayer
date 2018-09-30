// import jsonp from 'common/js/jsonp'
// import { commonParams, options } from './config'
import axios from 'axios'
let baseUrl = 'http://musicapi.yuiyu.cn'
export function getTopList () {
  let ret = []
  return axios.all([
    getCurIdx(0),
    getCurIdx(1),
    getCurIdx(2),
    getCurIdx(3),
    getCurIdx(4),
    getCurIdx(5),
    getCurIdx(6),
    getCurIdx(7),
    getCurIdx(8),
    getCurIdx(9)
  ]).then(axios.spread(function (acct0, acct1, acct2, acct3, acct4, acct5, acct6, acct7, acct8, acct9) {
    ret.push(acct0.data.playlist)
    ret.push(acct1.data.playlist)
    ret.push(acct2.data.playlist)
    ret.push(acct3.data.playlist)
    ret.push(acct4.data.playlist)
    ret.push(acct5.data.playlist)
    ret.push(acct6.data.playlist)
    ret.push(acct7.data.playlist)
    ret.push(acct8.data.playlist)
    ret.push(acct9.data.playlist)
    return Promise.resolve(ret)
  }))
}
function getCurIdx (id) {
  const url = baseUrl + '/top/list?idx=' + id
  return axios.get(url)
}
