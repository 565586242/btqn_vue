<template>
  <div id="app">
    <main-nav v-if="$route.meta.hasNav"></main-nav>
    <router-view @checkout="checkout"/>
    <main-tab :tabArr="tabArr" :tabIndex="tabIndex" @tabItemClick="tabItemClick"></main-tab>
  </div>
</template>

<script>
import MainNav from './components/common/MainNav';
import MainTab from './components/common/MainTab';
export default {
  components: { MainNav,MainTab },
  data() {
    return {
      tabIndex: 0,
      tabArr: [
        {
          icon: require('assets/image/tab_icon_shouye_nor@2x.png'),
          selectIcon: require('assets/image/tab_icon_shouye_sel@2x.png'),
          title: '首页',
          routerUrl: '/home'
        },
        {
          icon: require('assets/image/tab_icon_shenqing_nor@2x.png'),
          selectIcon: require('assets/image/tab_icon_shenqing_sel@2x.png'),
          title: '申请抱团',
          routerUrl: '/applyUnity'
        },
        {
          icon: require('assets/image/tab_icon_shenhe_nor@2x.png'),
          selectIcon: require('assets/image/tab_icon_shenhe_sel@2x.png'),
          title: '审核抱团',
          routerUrl: '/checkHuddle'
        },
        {
          icon: require('assets/image/tab_icon_my_nor@2x.png'),
          selectIcon: require('assets/image/tab_icon_my_sel@2x.png'),
          title: '我的',
          routerUrl: '/mine'
        }
      ]
    }
  },
  methods: {
    tabItemClick(index) {
      this.tabIndex = index
      this.$router.replace(this.tabArr[index].routerUrl)
    },
    checkout() {
      this.tabIndex = 0
    }
  }
}
</script>

<style lang="less">
#app{
  width: 100%;
  min-height: 100vh;
}
</style>
