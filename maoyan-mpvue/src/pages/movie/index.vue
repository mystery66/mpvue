<template>
  <div class="movie">
    <head-top :navigationbar="item" :movies="movies">
    </head-top>
  </div>
</template>

<script>
import HeadTop from '@/components/common/HeadTop'
// import axios from 'axios'
import Fly from "flyio/dist/npm/wx";
export default {
  data () {
    return {
    item:['热映','待映'],
    movies: [],
    willshow: []
    }
  },
  components: {
    HeadTop
    
  },
  async created () {
    wx.showLoading({
    title: '数据加载中',
    })
    // wx.request({
    //   url: 'https://www.easy-mock.com/mock/5b3d8905b5c00d5315cf37e9/maoyan/maoyan#!method=get',
    //   success: (res) =>{
    //     console.log(res.data.data.movies);
    //     this.movies = res.data.data.movies;
    //     this.willshow = res.data.data.willshow;
    //   },
    //   failed: (err) => {
    //     console.log(err)
    //   }
    // })
    let fly =new Fly;
    fly.get('https://www.easy-mock.com/mock/5b3d8905b5c00d5315cf37e9/maoyan/maoyan#!method=get')
  .then(function (response) {
    console.log(response);
    this.movies = res.data.data.movies;
    this.willshow = res.data.data.willshow;
  })
  .catch(function (error) {
    console.log(error);
  });
    if (this.movies.length) {
       wx.hideLoading()
    }
  }
}
</script>

<style>

</style>
