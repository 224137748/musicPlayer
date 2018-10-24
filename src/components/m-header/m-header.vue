<template>
  <div class="m-header">
    <div class="icon"></div>
    <router-link to="/user" class="mine" tag="div">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .m-header
    position:relative
    height 44px
    text-align :center
    color :$color-theme
    font-size :0
    .icon
      display:inline-block
      vertical-align :top
      margin-top :10px
      width: 90px
      height: 25px
      background: url('./logo.png') no-repeat
      background-size :90px 25px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>
