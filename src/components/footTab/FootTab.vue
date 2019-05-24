<template>
  <div class="foot-wrapper" v-if="showFooter">
    <div class="foot-guide">
      <router-link :to="{name: item.routeName}" class="nav-item" :class="{'active': currentRoute === item.routeName}" v-for="(item,index) in tabArr" :key="index">
        <i v-if="currentRoute === item.routeName" :class="item.iconActive"></i>
        <i v-else :class="item.icon"></i>
        <p class="text">{{item.title}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showFooter: true,
      currentRoute: this.$route.name,
      tabArr: [
        { title: '首页', routeName: 'Index', icon: 'icon-home', iconActive: 'icon-home-active' },
        { title: '找保险', routeName: 'SearchInsurance', icon: 'icon-search', iconActive: 'icon-search-active' },
        { title: '发现', routeName: 'Find', icon: 'icon-find', iconActive: 'icon-find-active' },
        { title: '我的', routeName: 'Mine', icon: 'icon-mine', iconActive: 'icon-mine-active' }
      ]
    }
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
    height: 104px;
    padding: 12px 0;
    background-color: @white;
    box-shadow: 0 -1px 6px #f6f6f6;
    .foot-guide{
      display: flex;
      .nav-item{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: @base-color;
        .text{
          margin-top: 8px;
          font-size: 22px;
        }
        &.active{
          color: @primary-color;
        }
      }
    }
  }

</style>
