<template>
  <div class="rank" ref="rank">
    <scroll class="toplist" ref="toplist" :data="topList">
      <ul>
        <li class="item" v-for="(item, index) of topList" :key="index" @click="selectItem(item, index)">
          <div class="icon">
            <img  width="100" height="100" v-lazy="item.picUrl" alt="">
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song, index) of item.songList" :key="index">
              <span>{{index + 1}}.</span>
              <span>{{song.name}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="loading-container" v-show="!topList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>
<script>
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import { getTopList } from 'api/rank'
import { mapMutations } from 'vuex'
import { createSong2 } from 'common/js/song'
import { playlistMixin } from 'common/js/mixin'
export default {
  mixins: [playlistMixin],
  data () {
    return {
      topList: []
    }
  },
  created() {
    this._getTopList()
  },
  components: {
    Loading,
    Scroll
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.rank.style.bottom = bottom
      this.$refs.toplist.refresh()
    },
    async _getTopList() {
      let res = await getTopList()
      this.topList = this._normolizeList(res)
    },
    _normolizeList(list) {
      let ret = []
      let obj = {}
      list.forEach(item => {
        let curSong = []
        let songs = []
        curSong = item.tracks.slice(0, 50)
        curSong.forEach(musicData => {
          songs.push(createSong2(musicData))
        })
        obj = Object.assign({}, {
          picUrl: item.coverImgUrl,
          songList: item.tracks.slice(0, 3) || [],
          description: item.description,
          songs: songs,
          id: item.id
        })
        ret.push(obj)
      })
      return ret
    },
    selectItem(item, index) {
      this.$router.push(`/rank/${index}`)
      this.setTopList(item)
    },
    ...mapMutations({
      setTopList: 'SET_TOPLIST'
    })
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .rank
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .toplist
      height: 100%
      overflow: hidden
      .item
        display: flex
        margin: 0 20px
        padding-top: 20px
        height: 100px
        &:last-child
          padding-bottom: 20px
        .icon
          flex: 0 0 100px
          width: 100px
          height: 100px
        .songlist
          flex: 1
          display: flex
          flex-direction: column
          justify-content: center
          padding: 0 20px
          height: 100px
          overflow: hidden
          background: $color-highlight-background
          color: $color-text-d
          font-size: $font-size-small
          .song
            no-wrap()
            line-height: 26px
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
