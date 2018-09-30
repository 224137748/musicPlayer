<template>
  <transition name="slide">
    <music-list :title="topList.description" :bgImage="topList.picUrl" :isQQ="false" :songs2="topList.songs"></music-list>
  </transition>
</template>
<script>
import MusicList from 'components/music-list/music-list'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      id: ''
    }
  },
  activated() {
    this._getSongs()
  },
  computed: {
    ...mapGetters([
      'topList'
    ])
  },
  components: {
    MusicList
  },
  methods: {
    _getSongs() {
      console.log(this.$route)
      this.id = this.$route.params.id || ''
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
