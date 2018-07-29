<template>
  <div class="movie">
    <head-top :navigationbar="item" :movies="movies" :willshow="willshow">
    </head-top>
  </div>
</template>

<script>
import HeadTop from '@/components/common/HeadTop'
// import axios from 'axios'
// import Fly from "flyio/dist/npm/wx";
import { movie } from '@/api/getData.js'
export default {
  data () {
    return {
    item:['热映','待映'],
    movies: [],
    willshow: []
    }
  },
  components: {
   'head-top': HeadTop
    
  },
  created () {
    wx.showLoading({
    title: '数据加载中',
    })
    this.$http.get('https://www.easy-mock.com/mock/5b3d8905b5c00d5315cf37e9/maoyan/maoyan#!method=get')
    .then((res)=> {
      console.log(res);
      this.movies = res.data.data.movies;
      this.willshow = res.data.data.willshow;
      wx.hideLoading()
    })
    .catch( (error)=> {
      console.log(error);
    });
  }
 
}
</script>

<style>

</style>
