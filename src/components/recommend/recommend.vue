<template>
<div class="recommend" ref="recommend">
  <scroll ref="scroll" class="recommend-content" :data="discList">
    <div>
    <div v-if="recommends.length>0" class="slider-wrapper">
      <slider>
        <div v-for="(item, index) in recommends" :key="index">
          <a :href="item.linkUrl">
            <img  :src="item.picUrl" alt="" class="needsclick">
          </a>
        </div>
      </slider>
    </div>

    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul>
        <li v-for="(item, index) in discList" class="item" :key="index" @click="selectItem(item)">
          <div class="icon">
            <img v-lazy="item.picUrl" alt="" width="60" height="60" @load="loadImage">
          </div>
          <div class="text">
            <h2 class="name" v-html="item.name"></h2>
            <p class="desc">🎧：{{parseInt(item.playCount/1000)}}万</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="loading-container" v-show="!discList.length">
    <loading></loading>
  </div>
  </scroll>
  <router-view></router-view>
</div>
</template>
<script type="text/ecmascript-6">
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import Slider from 'base/slider/slider'
import {getRecommend, getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'
import { playlistMixin } from 'common/js/mixin'
import { mapMutations } from 'vuex'
export default {
  mixins: [playlistMixin],
  data () {
    return {
      recommends: [],
      discList: []
    }
  },
  components: {
    Slider,
    Scroll,
    Loading
  },
  created () {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    handlePlaylist (playlist) {
      const bottom = playlist.length > 0 ? '60px' : 0
      this.$refs.recommend.style.bottom = bottom
      this.$refs.scroll.refresh()
    },
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList () {
      getDiscList().then((res) => {
        if (res.code === 200) {
          // console.log(res)
          this.discList = res.result.splice(0, 20)
        }
      })
    },
    selectItem(item) {
      this.$router.push({
        path: `recommend/${item.id}`
      })
      this.setDisc(item)
    },
    loadImage () {
      this.$refs.scroll.refresh()
    },
    ...mapMutations({
      setDisc: 'SET_DISC'
    })
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
@import "~common/stylus/variable"
.recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
