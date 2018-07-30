<template>
  <div class="transverse-sliding">
    <scroll-view scroll-x class="scroll-view">
      <div class="scroll-area" v-for="item in willshow.scrollview " :data-id="item.id" :key="item.id">
        <a href="">
          <img class="scroll-movie-img" :src="item.image"/>
          <div class="scroll-movie name">{{item.moviename}}</div>
          <div class="scroll-movie wantsee">{{item.wantsee}}</div>
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
      selected: false
    }
  },
  methods: {
    wish (index) {
      let arr = this.willshow.scrollview;
      // console.log(index)
      for(let i =0; i < arr.length; i++) {
         if (index == arr[i].id) {
           arr[i].selected = !arr[i].selected;
           if(arr[i].selected) {
            wx.showToast({
              title: '已标记想看',
              icon: 'success',
              duration: 1000
            })
          } else {
            wx.showToast({
              title: '已取消想看',
              icon: 'success',
              duration: 1000
            }) 
          }
        }
      }
      
      
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
