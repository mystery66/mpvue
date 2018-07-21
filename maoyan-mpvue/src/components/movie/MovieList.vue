<template>
  <div class="page" >
    <div class="movie-list" v-for="(movie,index) in movies" :key="index" >
      <a  class="movie-list-item" href="pages/details/main?id=${movie.id}"  :id="movie.id">
       <div class="movie-list-left">
         <div class="movie-list-cover">
           <img :src="movie.img" >
           <div class="movie-list-btn">
             <img src="/static/images/icon-play.png" >
           </div>
         </div>
       </div>
       <div class="movie-list-right">
         <div class="movie-list-title">
           <text class="movie-name">{{movie.name}}</text>
            <div class="movie-description" >
            <text class="movie-dimension" v-if="movie.dimension">{{movie.dimension}}</text>
            <text class="movie-imagemaxmum" v-if="movie.ImageMaximum">{{movie.ImageMaximum}}</text>
           </div>
           <text v-if="movie.score" class="movie-people score">{{movie.score}}</text>
           
             <text v-if="movie.views" class="movie-people toviews">{{movie.views}}</text>
             
          </div>
          <div class="movie-detail">
            <text class="movie-type">{{movie.type}}</text>
            <text class="movie-actor">主演:{{movie.actor}}</text>
            <text class="movie-playback">{{movie.playback}}</text>
          </div>
          <div class="movie-sale">
            <text class="movie-ticket sale" v-if="movie.ticketpurchase">{{movie.ticketpurchase}}</text>
            <text class="movie-ticket presale" v-if="movie.presale">{{movie.presale}}</text>
          </div>
        </div>
      </a>
     
    
  </div>
  </div>
</template>

<script>
export default {
  props: ['movies','willshow']
}
</script>

<style lang="stylus" scope>

.movie-list {
  background #ffffff
  box-sizing border-box
  display flex
  border-bottom  1px solid #f8f8f8
}
.movie-list a {
  width 100%
  padding 25rpx
}
.movie-list-cover{
  float left
  position relative
}
 .movie-list-cover img {
 
  width 128rpx;
  height 180rpx;


}
.movie-list-btn img {
  position absolute
  width 54rpx
  height 54rpx
  z-index 1
  top 63rpx
  left 37rpx
}
.movie-list-right {
 position relative
 margin-left 150rpx
  
}
.movie-list-title .movie-name{
  font-size 35rpx
  font-weight middle
  text-overflow ellipsis
  
}
.movie-list-title {
  display flex
  align-items center
}
.movie-list-title .movie-description{
  display inline-block
  font-size 20rpx
  // width 45rpx
  // height 32rpx
  margin-left 10rpx
  border 1px solid #8bb7ce
}
.movie-description .movie-dimension{
  background-color #8bb7ce
  line-height 1
  color #ffffff
}
.movie-description .movie-imagemaxmum {
 color #8bb7ce
 line-height 1
}
.movie-list-right .movie-people {
  display inline-block
  font-size 35rpx
  line-height 1
  color #ffb400
  position absolute
  right 10rpx
  
}
.movie-people.toviews
{
  font-size 30rpx 
}
 .movie-detail {
  font-size 28rpx
}
.movie-detail text{
  display block
  line-height 1.6
  color #666
}

.movie-detail .movie-playback{
  color #999
}
.movie-sale {
  position relative
  color #ffffff
  font-size 27rpx
}
.movie-sale .movie-ticket  {
  position absolute
  
  right 10rpx
  bottom 40rpx
  border-radius 5rpx
  padding 10rpx 20rpx
}
.movie-sale .movie-ticket.sale {
  background-color #ef4238
}
.movie-sale .movie-ticket.presale {
  
  background-color #52b0eb
  

}
</style>
