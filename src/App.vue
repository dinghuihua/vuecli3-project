<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>

    <!--<transition name="router-fade" mode="out-in">-->
      <router-view v-if="!$route.meta.keepAlive"/>
    <!--</transition>-->
    <foot-tab/>
  </div>
</template>
<script>
import FootTab from 'components/footTab/FootTab'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    FootTab
  },
  created () {
    this.noDefaultScalable()
  },
  methods: {
    // Safari中 禁止双指放大缩小
    noDefaultScalable () {
      document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
          event.preventDefault()
        }
      })
      var lastTouchEnd = 0
      document.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime()
        if (now - lastTouchEnd <= 300) {
          event.preventDefault()
        }
        lastTouchEnd = now
      }, false)
    }
  }
}
</script>

<style lang="less">
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .2s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
