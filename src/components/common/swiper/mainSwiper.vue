<template>
  <swiper v-show="bannerList">

    <swiper-item slot="item" v-for="(item,index) in bannerList" :key="index">
      <img :src="'//xc.xs.cn' + item.src" alt="">
    </swiper-item>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

  </swiper>
</template>

<script>

  import swiper from './swiper';
  import swiperItem from './swiperItem';

  export default {
    name: 'mainSwiper',
    components: {
      swiper,
      swiperItem,
    },
    props:{
      bannerList:{
        type: Array,
        default: [],
      },
    }
  }
</script>

<style scoped>

</style>
