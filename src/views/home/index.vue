<template>
  <div>
    <nav-bar>
      <div slot="center">
        首页
      </div>
    </nav-bar>
    <main-swiper :bannerList="bannerList"></main-swiper>
  </div>
</template>

<script>
  import {request} from '@/network/request';
  import mainSwiper from '@/components/common/swiper/mainSwiper.vue';
  import navBar from '@/components/common/navbar/navBar';

  export default {
    name: 'Home',
    components: {
      mainSwiper,
      navBar
    },
    data() {
      return {
        bannerList: [],
      }
    },
    created() {
      request({
        url: '/api/v1/home/banner'
      }).then(res => {
        this.bannerList = res.banner
      })
    }
  }
</script>

<style>
</style>
