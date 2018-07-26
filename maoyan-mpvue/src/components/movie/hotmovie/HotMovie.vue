<template>
  <div class="page" >
    <div class="hotmovie" v-if="!movie.item">
       <div class="movie-list"  v-for="(movie,index) in movie" :key="index" >
        <a  class="movie-list-item" :href=" 'pages/details/main?id='+ movie.id"    :data-id="movie.id">
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
            <div class="movie-description" v-if="movie.description" v-for="(description,key) in movie.description" :key="key">
                <text class="movie-dimension" v-if="description.dimension">{{description.dimension}}</text>
                <text class="movie-imagemaxmum" v-if="description.ImageMaximum">{{description.ImageMaximum}}</text>
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
   
    <div class="willshow" v-if="movie.item">
      <div class="movie-playtime" v-if="movie.date">{{movie.date}}</div>
      <div class="movie-list" v-for="(movie,index) in movie.item" :key="index" >
        <a class="movie-list-item" href="pages/details/main?id=$movie.id"   :data-id="movie.id">
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
              <div class="movie-description" v-if="movie.description" v-for="(description,key) in movie.description" :key="key">
                <text class="movie-dimension" v-if="description.dimension">{{description.dimension}}</text>
                <text class="movie-imagemaxmum" v-if="description.ImageMaximum">{{description.ImageMaximum}}</text>
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
          <div class="wantsee" v-if="movie.wantsee" @cilck="selected">
           <div class="wantsee-btn" v-if="!selected">
             <img class="wantsee-img" src="/static/images/icon-heart.png"  >
             <text class="wantsee-desc">想看</text>
           </div>
           <div class="wantsee-btn" v-else>
             <img class="wantsee-img selected" src="/static/images/icon-heart-selected.png"  >
             <text class="wantsee-desc">已想看</text>
           </div>
          </div>
        </div>
      </a>
    </div>   
    </div>
  </div>
</template>
<script>
export default {
  props: ['movie'],
  data () {
    return {
      selected: false
    }
  },
  methods: {
    selected () {
      this.selected = true
      console.log(this.selected)
    }
  }
}
</script>
<style lang="stylus" scoped>
.movie-list 
  background #ffffff
  box-sizing border-box
  display flex
  border-bottom  1px solid #f8f8f8
  
  a 
    width 100%
    padding 25rpx   
    

.movie-list-cover
  float left
  position relative
  img 
    width 128rpx;
    height 180rpx;

.movie-list-btn
  position absolute
  top 63rpx
  left 37rpx
.movie-list-btn img 
  width 54rpx
  height 54rpx
  z-index 1
  
.movie-list-right 
  position relative
  margin-left 150rpx
  .movie-people 
    display inline-block
    font-size 35rpx
    line-height 1
    color #ffb400
    position absolute
    right 0
    .toviews
      font-size 30rpx 

.movie-list-title 
  display flex
  align-items center
  .movie-name
    font-size 35rpx
    font-weight middle
    text-overflow ellipsis
    white-space nowrap
    overflow hidden
  .movie-description
    font-size 20rpx
    // width 45rpx
    // height 32rpx
    margin-left 10rpx
    border 1px solid #8bb7ce
    .movie-dimension
      display inline-block
      padding 4rpx 4rpx 
      background-color #8bb7ce
      line-height 1
      color #ffffff
    .movie-imagemaxmum
      display inline-block 
      padding 4rpx 4rpx
      color #8bb7ce
      line-height 1
     
.movie-detail 
  font-size 28rpx
  text
   display block
   line-height 1.7
   color #666
  .movie-actor
    width 400rpx
    text-overflow ellipsis
    white-space nowrap
    overflow hidden
  .movie-playback
    color #999

.movie-sale 
  // position relative
  color #ffffff
  position absolute
  right 0rpx
  top  90rpx
  font-size 27rpx
  .movie-ticket  
    border-radius 5rpx
    padding 15rpx 20rpx
  .movie-ticket.sale
    
    background-color #ef4238
  .movie-ticket.presale 
    background-color #52b0eb

.movie-playtime
  padding  20rpx 0 0 30rpx
  font-size 28rpx   
.wantsee
  position absolute
  width 120rpx
  height 50rpx
  right 0rpx
  top  70rpx
  .wantsee-btn
    text-align center
    line-height 50rpx
    
    // padding 10rpx 20rpx
    border 1px solid red
    border-radius 10rpx 
    .wantsee-img
      width 25rpx
      height 25rpx 
     

    .wantsee-desc
      display inline-block
      margin-left 10rpx
      font-size 25rpx 
      color red
</style>
