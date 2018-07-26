<template>
  <div class="singer">
    <listview :data="singers" @select="selectSinger"></listview>
    <router-view></router-view>
  </div>
</template>
<script>
import { getSingerList } from 'api/singer'
import { ERR_OK } from 'api/config'
import Singer from 'common/js/singer'
import Listview from 'base/listview/listview'
import { mapMutations } from 'vuex'
const HOT_NAME = '热门'
const HOT_SINGER = 10
export default {
  data () {
    return {
      singers: []
    }
  },
  created () {
    this._getSingerList()
  },
  components: {
    Listview
  },
  methods: {
    selectSinger (item) {
      this.$router.push({
        path: `/singer/${item.id}`
      })
      this.setSinger(item)
    },
    async _getSingerList () {
      let res = await getSingerList()
      if (res.code === ERR_OK) {
        // console.log(res)
        this.singers = this.normalizeSinger(res.data.list)
      } else {
        alert(res.message)
      }
    },
    normalizeSinger (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGER) {
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
        let key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        } else {
          map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
      })
      let hot = []
      let ret = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
.singer{
  position fixed
  top 88px
  bottom 0
  width 100%  
}
</style>
