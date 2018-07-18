<template>
  <div class="movie">
    <top-navigation-bar :navigationbar="item" :movies="movies">
    </top-navigation-bar>
  </div>
</template>

<script>
import TopNavigationBar from '@/components/movie/TopNavigationBar'
// import axios from 'axios'
export default {
  data () {
    return {
    item:['热映','待映'],
    movies: [],
    willshow: []
    }
  },
  components: {
    TopNavigationBar,
    
  },
  created () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b3d8905b5c00d5315cf37e9/maoyan/maoyan#!method=get',
      success: (res) =>{
        console.log(res.data.data.movies);
        this.movies = res.data.data.movies;
        this.willshow = res.data.data.willshow;
      }
    })
  }
}
</script>

<style>

</style>
