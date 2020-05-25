<template>
  <div>
    <div class="mine-top">
      <p class="title">个人中心</p>
      <my-info :infoData="$store.state.user.userInfo" @click.native="$router.push('/myinfo')"></my-info>
    </div>
    <div-list title="我的邀请码" @click.native="$router.push('/myinvite')"></div-list>
    <div-list title="我的团队" @click.native="$router.push('/myteam')"></div-list>
    <div-list title="上级信息" @click.native="$router.push('/myboos')"></div-list>
    <div-list title="收款账户" @click.native="$router.push('/myaccount')"></div-list>
    <div-list title="微信号修改" @click.native="$router.push('/changewechat')"></div-list>
    <div-list title="登录密码修改" @click.native="$router.push('/changepwd')"></div-list>
    <div-list title="退出登录" @click.native="outApp()"></div-list>
  </div>
</template>

<script>
import MyInfo from 'components/home/MyInfo';
import DivList from 'components/common/DivList';
import { mapActions } from 'vuex';
import { Toast } from 'mint-ui';
export default {
  components: { MyInfo,DivList },
  methods: {
    ...mapActions([
      "logout", "getMyInfo"
    ]),
    outApp() {
      const _this = this
      this.logout().then(res => {
        if(res && res.code == 200){
          Toast({
            message: res.msg,
            duration: 1000
          })
          _this.$store.commit({type: 'clearAll'})
          _this.$emit('checkout')
          _this.$router.replace('/');
        }
      })
    }
  },
  created() {
    this.getMyInfo()
  }
}
</script>

<style lang="less" scoped>
.mine-top{
  box-sizing: border-box;
  width: 100%;
  height: 4.8rem;
  padding-top: 22px;
  background: no-repeat url('~assets/image/bg_my@2x.png') center/cover;
  .title{
    font-size: 0.48rem;
    color: #fff;
    text-align: center;
  }
}
</style>