// 同步修改（操作）
import * as types from './mutation-types'

const mututations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}
export default mututations