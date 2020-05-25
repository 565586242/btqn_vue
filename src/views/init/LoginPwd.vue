<template>
  <div class="body">
    <h1>欢迎来到抱团取暖！</h1>
    <input-list v-model="formData.name" type="text" placeholder="请输入用户名或手机号" :iconUrl="phoneIcon"></input-list>
    <div style="width: 100%;height: 0.4333rem"></div>
    <input-list v-model="formData.password" type="password" placeholder="请输入密码" :iconUrl="pwdIcon"></input-list>
    <div class="config-div">
      <p @click="$router.push('/forgetPwd')">忘记密码？</p>
      <p @click="$router.push('/register')">立即注册</p>
    </div>
    <block-button @click.native="loginPwdClick()">登 陆</block-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import InputList from "components/common/InputList";
import BlockButton from "components/common/BlockButton";
import { Toast } from 'mint-ui';
import { homelogin } from '@/ajax/api';
export default {
  name: 'LoginPwd',
  data() {
    return {
      phoneIcon: require('assets/image/login_sj@2x.png'),
      pwdIcon: require('assets/image/login_mm@2x.png'),
      formData: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'loginPwd'
    ]),
    loginPwdClick() {
      const _this = this
      homelogin(_this.formData).then(res => {
        if(res && res.code == 200){
          let instance = Toast({
            message: res.msg
          })
          _this.$store.commit({
            type: 'setVal',
            key: 'token',
            value: res.data.token
          })
          _this.$store.commit({
            type: 'setVal',
            key: 'userInfo',
            value: res.data.user
          })
          setTimeout(() => {
            instance.close();
            _this.$router.replace('/home');
          }, 1500);
        }
      })
    }
  },
  components: {InputList, BlockButton}
}
</script>

<style lang="less" scoped>
@import '~@/assets/css/common.less';
.body{
  padding: 2.6667rem 0.9867rem 0;
  h1{
    margin-bottom: 2.4rem;
  }
  .config-div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.0667rem;
    font-size: 0.3467rem;
  }
}

</style>