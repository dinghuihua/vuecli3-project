<template>
  <div class="find-wrapper">
    <h1>险种投保页</h1>
    <!--<button @click="add('a-component', '我是A')">添加A组件</button>-->
    <template>
      <h2>投保方案</h2>
      <component v-bind:is="item.component" :goods-props="item" v-for="(item,idx) in items" :key="idx"></component>
    </template>
    <!--<component :is="item.component" :text="item.text" v-for="item in items"></component>-->

    <div>公共的投保底部按钮 <div class="submit-btn">提交按钮</div></div>

  </div>
</template>
<script>
import sex from './child/mychild.vue'
import sku from './child/sku.vue'
import timer from './child/timer.vue'

export default {
  name: 'SearchInsurance',
  data () {
    return {
      items: [],
      goodsProps: [
        {
          typeId: 1,
          type: 'timer',
          detail: {
            title: '出生日期',
            placeholder: '请选择被保人出生日期',
            defaultBirthday: '1991-11-15 14:06:59',
            maximumBirthday: '2019-04-30 14:06:59',
            minimumBirthday: '1964-06-01 14:06:59'
          }
        },
        {
          typeId: 2,
          type: 'sex',
          detail: {
            title: '性别',
            arr: [{ value: '男', key: 1 }, { value: '女', key: 2 }],
            desc: '被保人性别影响保费'
          }
        }
      ]
    }
  },
  components: {
    sex, sku, timer
  },
  created () {
    this.initComm()
  },
  methods: {
    // 初始化要显示的组件
    initComm () {
      this.goodsProps.forEach((item, idx) => {
        this.items.push({
          component: item.type,
          item: item
        })
      })
      console.log(this.items)
    }
  }
}
</script>
<style lang="less" scoped>
  .submit-btn{
    width: 200px;
    border: 1px solid #000;
  }
</style>
