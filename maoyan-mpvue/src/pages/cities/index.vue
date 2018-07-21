<template>
  <div class="city-position">
    <city-location :position="position" :citylist="citylist" :hotcity="hotcity" :letter="letter"></city-location>
  </div>
</template>

<script>
import CityLocation from '@/components/cities/CityLocation'
// var QQMapWX = require('@/utils/libs/map.js');
// var qqmapsdk;
// qqmapsdk = new QQMapWX({
//   key:'WZDBZ-572WO-W2QWZ-SGHBW-CUFX5-57FOJ'
// });
// qqmapsdk.reverseGeocoder({ //逆地址解析api，可以根据你的经纬度去解析位置地址
//   location: {
//     latitude: latitude,
//     longitude: longitude,
// },
//   success: function (res) {
//    conslog.log(res)
//     }

// })
export default {
  components: {
    'city-location': CityLocation
  },
  data () {
    return {
      position: '南昌',
      letter: [],
      hotcity:[],
      citylist: []
    }
  },
  mounted () {
//      qqmapsdk.geocoder({
//     address: '南昌市',
//     success: function(res) {
//         console.log(res);
//     },
//     fail: function(res) {
//         console.log(res);
//     },
//     complete: function(res) {
//         console.log(res);
//     }
// });
  },
  created() {

  wx.request({
    url: 'https://www.easy-mock.com/mock/5b40d8c9dea547743b1b5de6/city/citylist#!method=get',
    success: (res) =>{
      console.log(res.data.data.movies);
      this.letter = res.data.data.letter;
      this.hotcity = res.data.data.hotcity;
      this.citylist = res.data.data.citylist;
      }
    })
  }
}

</script>

<style  lang="stylus" scope>
 .city-position {
   background-color #ebebeb
 }
</style>
