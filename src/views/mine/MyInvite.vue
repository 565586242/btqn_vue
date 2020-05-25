<template>
  <div class="body">
    <main-nav class="my-nav"></main-nav>
    <img class="app-name" src="~assets/image/app_name@2x.png" alt="">
    <div class="invite-num">
      邀请码：<span>{{$store.state.user.userInfo.invitation_code}}</span>
    </div>
    <img class="invite-code" :src="rootUrl + '/' + $store.state.user.userInfo.invitation_img" alt="" srcset="">
  </div>
</template>

<script>
import MainNav from 'components/common/MainNav';
import {baseURL} from '@/global-config';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      rootUrl: baseURL
    }
  },
  methods: {
    ...mapActions([
      "homeinviteGet"
    ])
  },
  created() {
    this.homeinviteGet()
  },
  components: { MainNav }
}
</script>

<style lang="less" scoped>
.body{
  width: 100%;
  min-height: 100vh;
  background: no-repeat url('~assets/image/bg_03@2x.png') center/cover;
  .my-nav{
    /deep/ .main-nav-fixed{
      background-color: transparent;
      color: #fff;
    }
  }
  .app-name{
    display: block;
    width: 4.4rem;
    height: 1.0667rem;
    margin: 1.2rem auto 0;
    object-fit: contain;
  }
  .invite-num{
    width: 6.4rem;
    height: 1.3333rem;
    background-color: #263F7A;
    border-radius: 0.6667rem;
    margin: 0.9333rem auto 0;
    color: #fff;
    font-size: 0.48rem;
    line-height: 1.3333rem;
    text-align: center;
    span{
      font-size: 0.64rem;
    }
  }
  .invite-code{
    display: block;
    width: 6.1333rem;
    height: 6.1333rem;
    margin: 1.3667rem auto 0;
  }
}
</style>