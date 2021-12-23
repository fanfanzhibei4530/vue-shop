<template>
  <div id="app">
    <router-view/>
    <mainTabBar/>
  </div>
</template>

<script>
  import mainTabBar from '@/components/content/mainTabBar/mainTabBar';

  export default {
    name: 'App',
    components: {
      mainTabBar: mainTabBar,
    }
  }
</script>

<style>
  @import './assets/css/reset.css';
</style>
