<template>
  <div class="movie-details">
    <details-head :head="head"></details-head>
  </div>
</template>

<script>
import DetailsHead from '@/components/moviedetails/DetailsHead'
export default {
components: {
  'details-head': DetailsHead
},
data () {
  return {
    details: [],
    head:[],
    id:null
  }
},
onLoad: function(options) {
  this.id = options.id;
  console.log(options);
},
onShow: function (options) {
  console.log(options);
  let id = this.id;
  console.log(id);
  this.$http.get('https://www.easy-mock.com/mock/5b5fae909f3d1d7bfe3a6f8a/details/#!method=get')
    .then((res) => {
      const data= res.data.data.details.filter((item) => {
        return item.id == id
      })
      // console.log(data);
      this.details = data[0];
      this.head = this.details.head
      console.log(this.details.head);
    })
}
}
</script>

<style>

</style>
