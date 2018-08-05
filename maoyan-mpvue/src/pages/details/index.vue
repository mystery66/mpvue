<template>
  <div class="movie-details">
    <details-head :head="head"></details-head>
    <div v-if="details.eggnum">
      <movie-egg :eggnum="details.eggnum"></movie-egg>
    </div>
    
  </div>
</template>

<script>
import DetailsHead from '@/components/moviedetails/DetailsHead'
import MovieEgg from '@/components/moviedetails/MovieEgg'
export default {
components: {
  'details-head': DetailsHead,
  'movie-egg': MovieEgg
},
data () {
  return {
    details: [],
    head:[]
    
  }
},
onLoad (options) {
 let id = options.id;
  console.log(options);
   this.$http.get('https://www.easy-mock.com/mock/5b5fae909f3d1d7bfe3a6f8a/details/#!method=get')
    .then((res) => {
      const data= res.data.data.details.filter((item) => {
       return item.id == id
      })
      // console.log(data);
      this.details = data[0];
      this.head = this.details.head
      console.log(this.details.head.img);
    })
},

}
</script>

<style lang="stylus" scoped>
.movie-details
  background-color #f5f5f5
  




</style>
