<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#1296db">
        <img slot="icon" src="@/assets/img/tabbar/home.png" alt="">
        <img slot="icon-active" src="@/assets/img/tabbar/home-1.png" alt="">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/shop" activeColor="pink">
        <img slot="icon" src="@/assets/img/tabbar/shop.png" alt="">
        <img slot="icon-active" src="@/assets/img/tabbar/shop-1.png" alt="">
        <div slot="text">商城</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="pink">
        <img slot="icon" src="@/assets/img/tabbar/cart.png" alt="">
        <img slot="icon-active" src="@/assets/img/tabbar/cart-1.png" alt="">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my" activeColor="deepPink">
        <img slot="icon" src="@/assets/img/tabbar/my.png" alt="">
        <img slot="icon-active" src="@/assets/img/tabbar/my-1.png" alt="">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import tabBar from '@/components/common/tabbar/tabBar';
  import tabBarItem from '@/components/common/tabbar/tabBarItem';

  export default {
    name: 'mainTabBar',
    components: {
      tabBar: tabBar,
      tabBarItem: tabBarItem,
    }
  }
</script>

<style>
</style>
