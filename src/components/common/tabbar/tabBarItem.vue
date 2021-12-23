<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'tabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#1296db',
      }
    },
    data() {
      return {

      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : '';
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(err => {
          // console.log(err)
        });
      }
    },
  }
</script>

<style scoped>
  .tab-item{
    flex: 1;
    font-size: 14px;
  }
  .tab-item img{
    width: 28px;
    height: 28px;
    margin-top: 2px;
    vertical-align: middle;
  }
/*  .tab-item .active{
    color: #1296db;
  } */
</style>
