<template>
  <div class='movie-head'>
    <div class="head-content" :style="{backgroundImage: 'url(' +head.img+ ')' }">
      <div class="head-img">
        <img :src="head.img" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: ['head'],

}
</script>

<style lang="stylus" scoped>
.movie-head
  height 450rpx
  color #333333
</style>
