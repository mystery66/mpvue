<template>
  <div class="willshow">
    <div class="scrollview-area">
      <div class="popular-recently">近期最受欢迎</div>
      <scroll-view :scrollview="willshow.scrollview"></scroll-view>
    </div>
    <div class="content">
      <hot-movie v-for="(showlist,index) in willshow.showlist" :key="index" :movie="showlist"></hot-movie>
      
    </div>
  </div>
</template>

<script>
import ScrollView from '@/components/movie/ScrollView'
import HotMovie from '@/components/movie/hotmovie/HotMovie'
export default {
  props:['willshow'],
  components: {
    ScrollView,
    HotMovie
  }
}
</script>

<style lang="stylus" scoped>
.willshow
  background-color #f5f5f5

.scrollview-area
  background-color #ffffff  
  .popular-recently
    height 75rpx
    padding-left 30rpx
    font-size 28rpx
    line-height 75rpx
.content
  margin-top 30rpx  
  border-top 1px solid #e6e6e6
  background-color #ffffff  
</style>
