<template>
  <div class="cinema">
    <head-top>
      <div  slot="search">
        <a  class="search-cinema" href="/pages/citie">
          <span >
            <img src="/static/images/icon-search-white.png">
              找影院
          </span>
        </a>
      </div>
    </head-top>
  </div>
</template>

<script>
import HeadTop from '@/components/common/HeadTop'
export default {
  components: {
    HeadTop
  }
}
</script>

<style lang="stylus" scoped>
.cinema
   background-color #f5f5f5
.search-cinema 
  background-color #ffffff
  width 75%
  display inline-block
  margin 20rpx 20rpx 20rpx 30rpx
  height 48rpx
  width 75%
  border 1px solid #d7d7d7 
  border-radius 10rpx
  padding-top 9rpx
  text-align center
  img 
    width 30rpx
    height 30rpx
    
  
    
   
   
    
</style>
