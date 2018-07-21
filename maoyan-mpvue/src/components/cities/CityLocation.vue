<template>
  <div class="city-location">
   <div class="city-title">定位城市</div>
   <div class="city-list">
     <div class="city-item">{{position}}</div>
   </div>
    <div class="history-city" v-if="cityhistory.length">
      <div class="city-title">最近访问城市</div>
      <div class="city-list">
        <div class="city-item " v-for="(item,id) in cityhistory" :key="id" @click="chooseCity(item)">{{item}}</div>
      </div>
    </div>
    <div class="hot-city">
      <div class="city-title ">热门城市</div>
      <div class="city-list">
        <div class="city-item "  v-for="(hotcity,index) in hotcity" :key="index" @click="chooseCity(hotcity)">{{hotcity}}</div>
      </div>
    </div>
    <div class="all-city-list" v-for="citylist in citylist"  :key="citylist.letter">
      <div class="city-title " :id="citylist.letter" @click="JumpTo">{{citylist.letter}}</div>
      <div class="city-list-block" v-for="(cityItem,i) in citylist.data" :key="i" >
        <div class="city-name" @click="chooseCity(cityItem.cityName)">{{cityItem.cityName}}</div>
      </div>
    </div>
    <div class="choose-letters">
      <div class="choose-letter desc">定位</div>
      <div class="choose-letter desc" v-if="cityhistory">最近</div>
      <div class="choose-letter desc">热门</div>
      <div class="letter-list">
        <div class="choose-letter item" v-for="(letter,index) in letter" :key="index">{{letter}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['position','hotcity','citylist','letter'],
  data() {
    return {
      cityhistory: []
    }
  },
  methods: {
   chooseCity(city) {
    // console.log(city);
    this.position = city;
    if (!this.cityhistory.length) {
      this.cityhistory.push(city);
    } else {
        this.cityhistory.forEach(()=> {
           if(this.cityhistory.indexOf(city) ==-1) {
             this.cityhistory.push(city);
            //  console.log(city);
           }
        });
      }
      wx.setStorageSync('this.cityhistory', 'this.cityhistory')
       wx.setNavigationBarTitle({
        title: '当前城市-'+this.position
       })

    // console.log(this.cityhistory)
   } 
  },
  created () {
    wx.setNavigationBarTitle({
        title: '当前城市-'+this.position
       })
  }
}
</script>

<style lang="stylus" scoped>

.city-title 
  padding-left 30rpx
  line-height 60rpx
  font-size 30rpx
  

.city-list 
  width 100%
  padding-bottom 30rpx
  background-color #f5f5f5

.city-item 
 display inline-block
 margin-left 25rpx
 margin-top 30rpx
 background-color #ffffff
 border-radius 5rpx
 border 1px solid #e6e6e6
 width 200rpx
 height 65rpx
 line-height 65rpx
 text-align center
 font-size 30rpx
 
.hot-city 
  display inline-block
  width 100%
  // margin-left 30rpx

.city-list-block 
  background-color #f5f5f5
  padding-right 60rpx
  
.city-list-block .city-name
  height 90rpx
  line-height 90rpx
  margin-left 30rpx
  font-size 30rpx
  border-bottom 1px solid #c8c7cc

.choose-letters
  position fixed
  top 150rpx
  right 0
  font-size 24rpx
  width 65rpx
  text-align center
  z-index 100
 
 .choose-letter
   height 30rpx

</style>
