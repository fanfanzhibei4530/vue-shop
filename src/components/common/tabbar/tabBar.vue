<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
</script>

<style scoped>
  #tab-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
    height: 49px;
    background-color: #f2f2f2;
    box-shadow: 0 -1px 1px rgb(100,100,100,.2);
  }
</style>
