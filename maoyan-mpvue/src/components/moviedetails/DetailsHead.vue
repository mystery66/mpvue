<template>
  <div class='movie-head'>
    <div class="head-bg" :style="{backgroundImage: 'url(' +head.img+ ')' }"></div>
    <div class="head-content">
      <div class="head-poster">
        <img class="movie-img" :src="head.img" >
        <a href="#">
          <img  class="movie-playicon" src="/static/images/icon-play.png" >
        </a>
        
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
props: ['head'],

}
</script>

<style lang="stylus" scoped>
.movie-head 
  position relative
  background-color #333333
  .head-bg
    height 450rpx
    
    opacity 0.5
    filter:blur(40rpx); //滤镜 blur 高斯模糊
    background-size cover

  .head-content 
    position absolute
    padding 25rpx 30rpx 22rpx 30rpx
    top 0
    left 0
    right 0
    bottom 0
    .head-poster
      position relative
      .movie-img
        width 220rpx
        height 300rpx  
      .movie-playicon
        position absolute
        width 80rpx
        height 80rpx
        top 113rpx
        left 70rpx
</style>
