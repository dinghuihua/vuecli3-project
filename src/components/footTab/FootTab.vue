<template>
  <div class="foot-wrapper" v-if="showFooter">
    <div class="foot-guide">
      <router-link :to="{name: item.routeName}" class="nav-item" :class="{'active': currentRoute === item.routeName}" v-for="(item,index) in tabArr" :key="index">
        <i v-if="currentRoute === item.routeName" :class="item.iconActive"></i>
        <i v-else :class="item.icon"></i>
        <span class="text">{{item.title}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      currentRoute: this.$route.name,
      tabArr: [
        { title: '首页', routeName: 'Index', icon: 'icon-home', iconActive: 'icon-home-active' },
        { title: '找保险', routeName: 'SearchInsurance', icon: 'icon-search', iconActive: 'icon-search-active' },
        { title: '发现', routeName: 'Find', icon: 'icon-find', iconActive: 'icon-find-active' },
        { title: '我的', routeName: 'Mine', icon: 'icon-mine', iconActive: 'icon-mine-active' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'showFooter'
    ])
  },
  mounted () {
    console.log(this.$store.state)
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.currentRoute = to.name
    }
  }
}
</script>
<style lang="less" scoped>
  .foot-wrapper{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: 50px;
    padding: 6px 0;
    background-color: @white;
    box-shadow: 0px 0px 20px 0px rgba(236,236,236,1);
    .foot-guide{
      display: flex;
      .nav-item{
        flex-grow: 1;
        .vertical-center();
        color: @base-color;
        .text{
          font-size: 10px;
        }
        &.active{
          color: @primary-color;
        }
      }
    }
  }

</style>
