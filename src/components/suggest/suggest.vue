<template>
  <scroll class="suggest" :data="resultList" ref="suggest">
    <ul class="suggest-list">
      <li @click="selectItem(item)" class="suggest-item" v-for="(item, index) of resultList" :key="index">
        <div class="icon">
          <i :class="getIconCLs(item)"></i>
        </div>
        <div class="name">
          <p class="text">{{getDisplayName(item)}}</p>
        </div>
      </li>
    </ul>
  </scroll>
</template>
<script>
import { search } from 'api/search'
import { createSong3 } from 'common/js/song'
import Scroll from 'base/scroll/scroll'
import { mapActions } from 'vuex'
const SONG_TYPE = 'singer'
export default {
  props: {
    query: {
      type: String,
      default: ''
    },
    showSinger: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      resultList: []
    }
  },
  components: {
    Scroll
  },
  methods: {
    async search() {
      this.$refs.suggest.scrollTo(0, 0)
      let res = await search(this.query)
      if (res.code === 200) {
        this.resultList = this._normalizeList(res.result.songs)
      }
    },
    _normalizeList(list) {
      let ret = []
      list.forEach(item => {
        ret.push(createSong3(item))
      })
      console.log(ret)
      return ret
    },
    getIconCLs(item) {
      if (item.type === SONG_TYPE) {
        return 'icon-mine'
      } else {
        return 'icon-music'
      }
    },
    getDisplayName(item) {
      if (item.type === SONG_TYPE) {
        return item.singer
      } else {
        return `${item.name}-${item.singer}`
      }
    },
    selectItem(item) {
      console.log(item)
      this.insertSong(item)
    },
    ...mapActions([
      'insertSong'
    ])
  },
  watch: {
    query(newVal) {
      if (newVal) {
        this.search()
      } else {
        this.resultList = []
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
 @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .suggest
    height: 100%
    overflow: hidden
    .suggest-list
      padding: 0 30px
      .suggest-item
        display: flex
        align-items: center
        padding-bottom: 20px
      .icon
        flex: 0 0 30px
        width: 30px
        [class^="icon-"]
          font-size: 14px
          color: $color-text-d
      .name
        flex: 1
        font-size: $font-size-medium
        color: $color-text-d
        overflow: hidden
        .text
          no-wrap()
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>

