<template>
  <div class="find-wrapper">
    <h1>我的{{msg}}</h1>
    <div class="btn-pop">点击我选择时间</div>

  <router-link to="/test/demo">【点击此处进入需要强制登录的页面，成功登录后，将会回到源页面】</router-link>
    <van-button
      type="primary"
      @click="show = true"
    > 点击弹出</van-button>

    <van-popup
      v-model="show"
      position="bottom"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
      />
    </van-popup>

  </div>
</template>
<script>
import { Button, Popup, Picker, DatetimePicker } from 'vant'
export default {
  name: 'Mine',
  data () {
    return {
      msg: '测试111',
      show: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],

      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date()
    }
  },
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [DatetimePicker.name]: DatetimePicker
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
<style lang="less" scoped>
  .btn-pop{
    width: 100px;
    border: 1px solid #000;
  }
</style>
