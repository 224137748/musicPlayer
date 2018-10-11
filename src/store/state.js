import { playMode } from 'common/js/config'
import { loadSearch } from 'common/js/cache'
const state = {
  singer: {},
  // 播放状态
  playing: false,
  // 是否全屏
  fullScreen: false,
  // 播放列表
  playList: [],
  //  随机播放，顺序播放，小窗显示列表
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  // 播放当前歌曲的索引
  currentIndex: -1,
  // 详情列表
  disc: {},
  // 排行榜数据
  topList: {},
  // 搜索历史
  searchHistory: loadSearch()
}
export default state
