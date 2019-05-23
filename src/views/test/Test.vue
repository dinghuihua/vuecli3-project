<template>
  <div class="home">
    <h1>书写顺序演示</h1>
    <p>组件选项应该有统一的顺序。</p>
    <p>标签的 Props 应该有统一的顺序，依次为指令、属性和事件。</p>
    <div
      v-if="true"
      v-show="show"
      v-model="value"
      v-for=""
      ref="ref"
      :key="key"
      :text="text"
      @input="onInput"
      @change="onChange"
    ></div>
  </div>
</template>

<script>
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data () {},

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {}
}
</script>
