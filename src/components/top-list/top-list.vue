<template>
  <transition name="slide">
    <music-list :title="topList.description" :bgImage="bgImage" :isQQ="false" :songs2="topList.songs" :rank="true"></music-list>
  </transition>
</template>
<script>
import MusicList from 'components/music-list/music-list'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  activated() {
    this._getSongs()
  },
  computed: {
    bgImage() {
      if (this.topList.songs[0].image) {
        return this.topList.songs[0].image
      } else {
        return this.topList.picUrl
      }
    },
    ...mapGetters([
      'topList'
    ])
  },
  components: {
    MusicList
  },
  methods: {
    _getSongs() {
      if (!this.topList.id) {
        this.$router.push('/rank')
      }
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
