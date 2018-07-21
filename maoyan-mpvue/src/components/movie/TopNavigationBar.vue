<template>
  <div class="page">
    <div class="top-navigation-bar">
      <div class="city-position">
        <a href="/pages/cities/main">
          <text>南昌</text>
          <div class="drop-down-triangle"></div>
        </a>
      </div>
      <div class="navbar">
        <div class="navbar-item" v-for='(item,index) of navigationbar' :key="index"  :class="{on:currTab == index}" @click="selected(index)">{{item}}</div>
      </div>
      <div class="movie-search">
        <a href="/pages/search/main">
        <img src="/static/images/search-icon.png">
      </a>
      </div>
    </div>
    <div class="tab-panel">
      <div class="tab-content" :hidden="currTab != 0">
        <movie-list :movies="movies"></movie-list>
      </div>
      <div class="tab-content" :hidden="currTab != 1">
        <movie-list :willshow="willshow"></movie-list>
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from '@/components/movie/MovieList'
export default {
  props:['navigationbar','movies','willshow'],
  data () {
    return {
     currTab: 0
    }
  },
  components: {
    MovieList
  },
  methods:{
    selected(index) {
      this.currTab = index;
    }
  }

  }
</script>



<style lang="stylus" scoped>



.top-navigation-bar {
  background-color:#fff;
  display:flex;
  align-items:center;
  line-height:1;
  height:88rpx;
  overflow:visible;
  font-size:26rpx;
  color:#666;
  border-bottom:1rpx solid #d8d8d8;
}
.city-position {
  padding-left:30rpx;
  padding-right:10rpx;
  height:100%;
  display:flex;
  align-items:center;
  position:relative;

}

.drop-down-triangle {
  display:inline-block;
  border-width:10rpx 10rpx 0;
  border-style:solid;
  border-color:#cacaca transparent transparent;
  margin-left:6rpx;
  

}
.navbar{
  position: absolute;
  top:0;
  line-height:80rpx;
  font-size:28rpx;
  color:#666;
  margin-left:230rpx;
  display: flex;

}
.navbar .navbar-item{
  width:88rpx;
  margin:0 35rpx;
  padding-top:4rpx;
  padding-bottom:0;
  text-align:center;
  white-space:nowrap;
  font-weight:700;
  display:inline-block;

}
.navbar-item.on {
  color: red;
  border-bottom: 2px solid red;
}
.movie-search{
  flex: 1;
}
.movie-search img {
  float:right;
  width:40rpx;
  height:40rpx;
  padding:24rpx;
  border-left:1rpx solid #e6e6e6;

}
</style>
