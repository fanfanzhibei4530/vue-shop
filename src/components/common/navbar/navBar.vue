<template>
  <div class="nav-bar">
    <div class="left fl">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right fr">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navBar',
  }
</script>

<style scoped>
  .nav-bar{
    height: 39px;
    line-height: 39px;
    display: flex;
    background-color: pink;
    color: #fff;
    box-shadow: 0 1px 1px rgb(100, 100, 100, .2);
  }

  .left, .right{
    width: 60px;
  }

  .center{
    flex: 1;
    text-align: center;
  }
</style>
