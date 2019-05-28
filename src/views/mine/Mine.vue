<template>
  <div class="find-wrapper">
    <h1>我的{{msg}}</h1>

  <router-link to="/test/demo">【点击此处进入需要强制登录的页面，成功登录后，将会回到源页面】</router-link>
  </div>
</template>
<script>
export default {
  name: 'Mine',
  data () {
    return {
      msg: '测试111'
    }
  },
  methods: {
    toDetail () {
      if (this.common.isLogin()) {
        console.log('此处为登录成功的正常操作逻辑')
      } else {
        console.log('wei denglu 进入')
      }
    }
  }
}
</script>
