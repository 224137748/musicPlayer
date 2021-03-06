<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-wrapper" v-show="!query" ref="shortcutWrapper">
      <scroll :refrehDelay="200" class="shortcut" ref="shortcut" :data="shortcut">
        <div>
          <div class="hot-key" v-if="hotKey.length">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li @click="addQuery(item.first)" class="item" v-for="(item, index) of hotKey" :key="index">
                <span>{{item.first}}</span>
              </li>
            </ul>
          </div>
          <div class="search-history" v-show="searchHistory.length">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear" @click="showConfirm">
                <i class="icon-clear"></i>
              </span>
            </h1>
            <search-list  @select="addQuery" @delete="deleteOne" :searches="searchHistory"></search-list>
          </div>
        </div>
      </scroll>
    </div>
    <div ref="searchResult" class="search-result" v-show="query">
      <suggest ref="suggest" :query="query" @listScroll="blurInput" @select="saveSearch"></suggest>
    </div>
    <confirm ref="confirm" :title="'是否清空所有搜索历史？'" :confirmBtnText="'清空'" @confirm="deleteAll"></confirm>
    <router-view></router-view>
  </div>
</template>
<script>
import SearchBox from 'base/search-box/search-box'
import { getHotKey } from 'api/search'
import Suggest from 'components/suggest/suggest'
import Loading from 'base/loading/loading'
import { mapActions } from 'vuex'
import SearchList from 'base/search-list/search-list'
import Confirm from 'base/confirm/confirm'
import Scroll from 'base/scroll/scroll'
import { playlistMixin, searchMixin } from 'common/js/mixin'
export default {
  mixins: [playlistMixin, searchMixin],
  data() {
    return {
      hotKey: [],
      searchType: 1
    }
  },
  components: {
    SearchBox,
    Suggest,
    Loading,
    SearchList,
    Confirm,
    Scroll
  },
  created() {
    this._getHotKey()
  },
  computed: {
    shortcut() {
      return this.hotKey.concat(this.searchHistory)
    }
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.shortcutWrapper.style.bottom = bottom
      this.$refs.shortcut.refresh()
      this.$refs.searchResult.style.bottom = bottom
      this.$refs.suggest.refresh()
    },
    async _getHotKey() {
      let res = await getHotKey()
      if (res.code === 200) {
        this.hotKey = res.result.hots.slice(0, 10)
      }
    },
    selectType(evt) {
      console.log(evt.target)
    },

    showConfirm() {
      this.$refs.confirm.show()
    },
    deleteAll() {
      this.celarSearchHistory()
    },
    ...mapActions([
      'celarSearchHistory'
    ])
  },
  watch: {
    query(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$refs.shortcut.refresh()
        }, 20)
      }
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
@import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear
              extend-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-d
    .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0
</style>
