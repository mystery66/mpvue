<template>
 <div class="user">
   <div class="hd">
     <div class="user-item order">
       <a href="#">
         <text class="user-item-desc">我的订单</text>
         <img src="/static/images/icon-more.png">
       </a>
     </div>
     <div class="user-item coupon">
       <a href="/#">
         <text class="user-item-desc">优惠券</text>
        <img src="/static/images/icon-more.png">
       </a>
     </div>
     <div class="user-item card">
       <a href="#">
         <text class="user-item-desc">影院会员卡</text>
         <img src="/static/images/icon-more.png">
       </a>
     </div>
   </div>
   <div class="bd">
     <div class="user-item wantsee">
       <a href="#">
         <text class="user-item-desc">想看的电影</text>
         <img src="/static/images/icon-more.png">
       </a>
     </div>
     <div class="user-item hadsee">
       <a href="/#">
         <text class="user-item-desc">看过的电影</text>
        <img src="/static/images/icon-more.png">
       </a>
     </div>
   </div>
   <div class="ft">
    <text class="ft-desc contact">©猫眼电影 客服电话: </text>
    <text class="ft-desc phonenum">1010-5335</text>
   </div>
 </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
*{
  margin 0
  padding 0
}
.user
  background-color #f5f5f5
  overflow hidden
  .hd 
    margin-top 30rpx
    padding-left 40rpx
    background-color #ffffff
    border-top 1px solid #e4e4e4
    border-bottom 1px solid #e4e4e4
    a 
      -webkit-tap-highlight-color rgba(0,0,0,0)
      
.user-item
  position relative
  height 90rpx
  border-bottom 1px solid #e4e4e4
  
  .user-item-desc
    line-height 90rpx
    font-size 28rpx
  img 
    position absolute
    right 30rpx
    top 30rpx
    width 25rpx
    height 25rpx
      
.user-item.card
  padding 0
  border-bottom none   

.bd
  margin-top 30rpx
  padding-left 40rpx
  background-color #ffffff
  border-top 1px solid #e4e4e4
  border-bottom 1px solid #e4e4e4 

.user-item.hadsee
  border-bottom none  

.ft
  position absolute
  width 100%
  bottom 40rpx
  text-align center
  color #999999
  font-size 28rpx
  .ft-desc.phonenum
    color #deb76f
    text-decoration underline

</style>
