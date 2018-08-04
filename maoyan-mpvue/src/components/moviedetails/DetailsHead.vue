<template>
  <div class='movie-head'>
    <div class="head-bg" :style="{backgroundImage: 'url(' +head.img+ ')' }"></div>
      <div class="head-content">
        <div class="flex">
          <div class="head-poster">
            <img class="movie-img" :src="head.img" >
            <a href="#">
              <img  class="movie-playicon" src="/static/images/icon-play.png" >
            </a>
          </div>
          <div class="head-movie-info" v-for="(item,index) in head.info" :key="index">
            <text class="movie-name">{{item.name}}</text>
            <text class="movie-englishname">{{item.englishname}}</text>
            <div class="movie-star">
              <text class="movie-score">{{item.score}}</text>
              <text class="movie-total-num">({{item.totalnum}})人评</text>
            </div>
            <div class="movie-desc">
              <text class="movie-type">{{item.type}}</text>
              <text class="movie-show-place">{{item.showplace}}</text>
              <text class="movie-showtime">/{{item.showtime}}</text>
              <text class="movie-publishtime">{{item.publishtime}}</text>
            </div>
          </div>
        </div>
          <div class="head-btn">
            <div class="btn">
              <img class="icon" src="/static/images/icon-heart.png" alt="">
              <text>想看</text>
            </div>
            <div class="btn">
              <img class="icon" src="/static/images/icon-star-empty.png" alt="">
              <text>评分</text>
            </div>
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
@import '../../style/mixin.styl'
.movie-head 
  position relative
  background-color #333333
  .head-bg
    height 450rpx
    opacity 0.5
    filter:blur(40rpx); //滤镜 blur 高斯模糊
    background-size cover

  .head-content 
    p(absolute, 0, 0, 0, 0) 
    padding 25rpx 30rpx 22rpx 30rpx
    .flex
      display flex
      .head-poster
        position relative
        .movie-img
          wh(220rpx, 300rpx)
        a   
          position absolute 
          top 113rpx
          left 70rpx
          .movie-playicon
            wh(80rpx,80rpx)
          
.head-movie-info
 color #fff  
 padding-top 15rpx  
 padding-left 30rpx 
 width 400rpx
 text
   two()
 .movie-name
   display block
   font-size 34rpx 
 .movie-englishname
   display block
   font-size 22rpx
 .movie-star
   margin 15rpx 0
   .movie-score
     sc(34rpx,#FFC600)
   .movie-total-num
     display block
     sc(18rpx, #fff)  
 .movie-desc 
   sc(24rpx, #fff)
   opacity  .6
   text
     line-height 1.5
  .movie-type
    display block
  .movie-publishtime
    display block 

.head-btn
  display flex
  margin-top 30rpx  
  text-align center
  :first-child
    margin-right 22rpx
  .btn
    flex 1
    display flex
    align-items center
    justify-content center
    sc(26rpx,#fff)
    background rgba(255,255,255,.25)
    border 1rpx solid rgba(255,255,255,.16)
    border-radius 6rpx
    padding 15rpx 23rpx
    .icon
      wh(28rpx,28rpx)
      line-height 1
      margin-top 3rpx
      vertical-align text-top
      display inline-block
 
</style>
