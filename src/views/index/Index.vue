<template>
  <div class="home">
    <h1>我是首页{{msg}}</h1>
    <img alt="Vue logo" src="~assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: '首页描述'
    }
  }
}
</script>
<style lang="less" scoped="">
  h1{
    font-size: 40px;
  }
</style>
