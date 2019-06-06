<template>
  <div class="search-list" v-show="searches.length">
    <transition-group name="list" tag="ul">
      <li @click="selectItem(item, index)" class="search-item" v-for="(item, index) of searches" :key="`${index + parseInt(Math.random() * 10000)}`">
        <span class="text">{{item}}</span>
        <span class="icon" @click.stop="deleteOne(item)">
          <i class="icon-delete"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>
<script>
export default {
  props: {
    searches: {
      type: Array,
      default: []
    }
  },
  methods: {
    selectItem(item, index) {
      this.$emit('select', item, index)
    },
    deleteOne(item) {
      this.$emit('delete', item)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
  .search-list
    .search-item
      display: flex
      align-items: center
      height: 40px
      overflow: hidden
      font-size: $font-size-medium
      &.list-enter-active, &.list-leave-active
        transition: all 0.3s
      &.list-enter, &.list-leave-to
        opacity 0
        transform translate3d(30px, 0, 0)
      .text
        flex: 1
        color: $color-text-l
      .icon
        extend-click()
        .icon-delete
          font-size: $font-size-small
          color: $color-text-d
</style>

