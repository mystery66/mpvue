<template>
  <div class="willshow">
    <div class="scrollview-area">
      <div class="popular-recently">近期最受欢迎</div>
      <scroll :willshow="willshow" v-on:choose="choose">
         
      </scroll>
    </div>
    <div class="content">
      <hot-movie v-for="(showlist,index) in willshow.showlist" :key="index" :movie="showlist" v-on:choose="choose"></hot-movie>
      
    </div>
  </div>
</template>

<script>
import ScrollView from '@/components/common/ScrollView'
import HotMovie from '@/components/movie/hotmovie/HotMovie'
export default {
  props:['willshow'],
  components: {
    'scroll':ScrollView,
    'hot-movie': HotMovie
  },
  methods: {
    choose (index) {
      let arr1 = this.willshow.scrollview;
      let arr2 = this.willshow.showlist;
      let arr3 = [];
      for (let i=0; i<arr2.length; i++) {
        let arr4 = arr2[i].item
        arr4.forEach((index)=>{
          arr3.push(index) 
        });
      }
      showToast(arr1,index);
      showToast(arr3,index);
    }
  }
  
}
 
function showToast (arr,index) {
  for(let i =0; i < arr.length; i++) {
    if (index == arr[i].id) {
      arr[i].selected = !arr[i].selected;
      // console.log(arr[i].selected)
      if(arr[i].selected) {
        arr[i].views++;
        wx.showToast({
          title: '已标记想看',
          icon: 'success',
          duration: 1000
        })
      } else {
          arr[i].views--;
          wx.showToast({
            title: '已取消想看',
            icon: 'success',
            duration: 1000
          }) 
        }
      }
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

.scroll-img
  height 60rpx
  width 40rpx    
.content
  margin-top 30rpx  
  border-top 1px solid #e6e6e6
  background-color #ffffff  
</style>
