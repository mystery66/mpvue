<template>
  <div class="transverse-sliding">
    <scroll-view scroll-x class="scroll-view">
      <div class="scroll-area" v-for="item in willshow.scrollview " :data-id="item.id" :key="item.id">
        <a href="">
          <img class="scroll-movie-img" :src="item.image"/>
          <div class="scroll-movie name">{{item.moviename}}</div>
          <div class="scroll-movie wantsee">{{item.views}}人想看</div>
          <div class="scroll-movie date">{{item.date}}</div>
        </a>
        <div class="icon-wish" @click="wish(item.id)">
          <img class="icon-wish unseleted" src="/static/images/icon-wish.png" v-if="!item.selected">
          <img class="icon-wish seleted" src="/static/images/icon-wish-selected.png" v-else>
        </div>
        
      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  props:['willshow'],
  data () {
    return {
      // selected: false
    }
  },
  methods: {
    wish (index) {
      this.$emit('choose', index);
    }
  }
}
</script>

<style lang="stylus" scoped>
.scroll-view
   width 100%
   white-space nowrap
.scroll-area
  position relative
  margin-left 25rpx
  margin-bottom 30rpx
  display inline-block
  
  .scroll-movie-img
    height 230rpx
    width 180rpx
  .scroll-movie
    width 180rpx
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
  .scroll-movie.name 
    font-size 26rpx  
  .scroll-movie.wantsee,.scroll-movie.date
    font-size 24rpx
    color #999999  
  .icon-wish
    position absolute
    top 0
    left 0
    width 60rpx
    height 60rpx
     
</style>
