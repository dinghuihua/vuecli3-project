<template>
  <div class="home">
    <h1>我是登录页面</h1>

    <button @click="login">[点击发送测试登录数据]</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      dataObj: {
        mobile: '15010323518',
        password: '123456'
      }
    }
  },
  methods: {
    async login () {
      let res = await this.API.passwordLogin({
        mobile: this.dataObj.mobile,
        password: this.dataObj.password
      })
      if (res.data.status === '1') {
        this.$toast('登录成功，跳转至前一个来源页面')
        let redirect = this.$route.query.redirect || '/'
        this.$router.replace(redirect)
      } else if (res.data.status === '0') {
        this.$toast('该账号正在审核中')
      } else {
        this.$toast('未注册')
      }
    }
  }
}
</script>
<style lang="less" scoped>
  button {
    font-size: 30px;
  }
</style>
