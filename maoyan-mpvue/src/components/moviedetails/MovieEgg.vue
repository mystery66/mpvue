<template>
  <div class="panel movie-egg">
      <div class="panel-content">
        <img src="./egg.png" alt="">
        <text>有{{eggnum}}个彩蛋,在片尾字幕前、后出现</text>
      </div>
    </div>
</template>

<script>
export default {
props: ['eggnum']
}
</script>

<style lang="stylus" scoped>
  .panel 
    overflow:hidden
    margin-bottom 20rpx
    background-color #fff
    border-top:1rpx solid #D8D8D8
    border-bottom:1rpx solid #D8D8D8
    .panel-content 
      display block
      padding 20rpx 30rpx
      font-size 30rpx
    img 
      width 32rpx;
      height 36rpx;
      display inline-block
      margin-right 10rpx
      background 0 0
      vertical-align text-bottom

</style>
