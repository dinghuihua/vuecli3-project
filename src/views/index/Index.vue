<template>
  <div class="index-wrapper">
    <h1 class="title">我是首页{{msg}}</h1>
    <img class="logo" src="~assets/images/base/logo-big.png">
    <router-link to="/test/path">点我进入demo</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: '首页描述'
    }
  },
  methods: {
    getIndexData () {
      console.log('index -------')
    }
  }
}
</script>
<style lang="less" scoped>
  .index-wrapper{
    .title{
      font-size: 40px;
      color: @white;
    }
    .logo{
      width: 200px;
      height: 200px;
    }
  }
</style>
