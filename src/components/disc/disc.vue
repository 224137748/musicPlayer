<template>
  <transition name="slide">
    <music-list :description="description" :title="this.title" :bgImage="this.bgImage" :songs2="songs" :isQQ="false"></music-list>
  </transition>
</template>
<script>
import MusicList from 'components/music-list/music-list'
import { mapGetters } from 'vuex'
import { getSongList } from 'api/recommend'
import { createSong2 } from 'common/js/song'
export default {
  components: {
    MusicList
  },
  data() {
    return {
      description: '',
      songs: []
    }
  },
  mounted() {
    this._getSongList()
  },
  computed: {
    title() {
      return this.disc.name
    },
    bgImage() {
      return this.disc.picUrl
    },
    ...mapGetters([
      'disc'
    ])
  },
  methods: {
    _getSongList() {
      if (!this.disc.id) {
        this.back()
      } else {
        getSongList(this.disc.id).then(res => {
          if (res.code === 200) {
            this.description = res.playlist.description
            this.songs = this._normalizeList(res.playlist.tracks)
          }
        })
      }
    },
    _normalizeList(list) {
      let ret = []
      list.forEach((item) => {
        if (item.id) {
          ret.push(createSong2(item))
        }
      })
      return ret
    },
    back() {
      this.$router.push('/recommend')
    }
  }
}
</script>
<style lang="stylus" scoped>
.slide-enter-active,.slide-leave-active{
  transition all 0.3s;
}
.slide-enter,.slide-leave-to{
  transform translate3d(100%, 0, 0);
}
</style>
