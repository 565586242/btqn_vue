<template>
  <div class="body">
    <input-list v-model="formData.name" type="text" placeholder="请输入用户名" :iconUrl="nameIcon"></input-list>
    <input-list v-model="formData.phone" type="number" placeholder="请输入手机号码" :iconUrl="phoneIcon"></input-list>
    <div style="position: relative;">
      <input-list v-model="formData.code" type="number" placeholder="请输入验证码" :iconUrl="codeIcon"></input-list>
      <div class="slot-div" @click="time == 0?getCodeClick():null">{{time == 0?"获取验证码": time + "s"}}</div>
    </div>
    <input-list v-model="formData.password" type="password" placeholder="请设置登录密码" :iconUrl="pwdIcon"></input-list>
    <input-list v-model="formData.repassword" type="password" placeholder="请确认登录密码" :iconUrl="pwdIcon"></input-list>
    <block-button @click.native="changePwdClick">确认修改</block-button>
  </div>
</template>

<script>
import InputList from "components/common/InputList";
import BlockButton from "components/common/BlockButton";
import { Toast } from 'mint-ui';
import { homeresetpass,getphonecode } from '@/ajax/api';
export default {
  data() {
    return {
      nameIcon: require('assets/image/login_icon_xingming@2x.png'),
      phoneIcon: require('assets/image/login_sj@2x.png'),
      codeIcon: require('assets/image/login_yz@2x.png'),
      pwdIcon: require('assets/image/login_mm@2x.png'),
      time: 0,
      timeInterval: null,
      formData: {
        name: '',
        phone: '',
        code: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    changePwdClick() {
      const _this = this
      homeresetpass(_this.formData).then(res => {
        if(res && res.code == 200){
          Toast({
            message: res.msg,
            duration: 1000
          })
          _this.$router.back();
        }
      })
    },
    getCodeClick() {
      const _this = this
      getphonecode({phone: _this.formData.phone}).then(res => {
        if(res && res.code == 200){
          _this.startTime()
          Toast({
            message: res.msg,
            duration: 1000
          })
        }
      });
    },
    startTime() {
      const _this = this
      _this.time = 60
      _this.timeInterval = setInterval(() => {
        _this.time--
        if(_this.time == 0){
          clearInterval(_this.timeInterval)
        }
      }, 1000);
    }
  },
  components: {
    InputList,
    BlockButton
  }
}
</script>

<style lang="less" scoped>
.body{
  padding: 0.4rem 1rem;
  .button-div{
    margin-bottom: 0;
  }
  p{
    text-align: center;
  }
  .slot-div{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 2.6667rem;
    height: 0.8rem;
    margin: auto;
    border-radius: 0.08rem;
    background-color: #1F2A65;
    color: #fff;
    text-align: center;
    line-height: 0.8rem;
  }
}
</style>