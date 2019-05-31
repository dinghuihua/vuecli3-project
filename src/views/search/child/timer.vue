<template>
  <div class="child-wrapper">
    时间控件
    <div v-for="(item,index) in goodsProps" :key="index">
      {{item}}
    </div>
    <!--<slot name="up" :data="data"></slot>-->
  </div>
</template>
<script>
export default {
  // name: 'SearchInsurance',
  props: ['goodsProps'],
  data () {
    return {
      msg: '测试'
    }
  }
}
</script>
