<template>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <slot name="item">

      </slot>
    </div>
    <slot>

    </slot>
  </div>
</template>

<script>
  import Swiper from './js/swiper-bundle.min.js';

  export default {
    name: 'swiper',
    mounted() {
      const swiper = new Swiper(".mySwiper", {
        init: false,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay:true,//等同于以下设置
        autoplay: {
          delay: 3000,
        },
      });
      setTimeout(() => {
        swiper.init()
      }, 500)
    }
  }
</script>

<style scoped>
  @import './css/swiper-bundle.css';

  .swiper {
    width: 100%;
    height: 180px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
