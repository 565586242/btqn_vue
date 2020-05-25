<template>
  <div class="body">
    <ptitle>微信号修改</ptitle>
    <input-list placeholder="请输入您的微信号" @inputChange="inputChange"></input-list>
    <block-button @click.native="submitClick()">确认修改</block-button>
  </div>
</template>

<script>
import InputList from 'components/common/InputList';
import Ptitle from 'components/home/Ptitle';
import BlockButton from 'components/common/BlockButton';
import { mapActions } from 'vuex';
import { Toast } from 'mint-ui';
export default {
  components: { Ptitle,InputList,BlockButton },
  data() {
    return {
      wechat_number: ''
    }
  },
  methods: {
    ...mapActions([
      'changeWechat'
    ]),
    inputChange(data){
      this.wechat_number = data
    },
    submitClick() {
      const _this = this
      this.changeWechat({
        wechat_number: this.wechat_number
      }).then(res => {
        if(res && res.code == 200){
          Toast({
            message: res.msg,
            duration: 1000
          })
          _this.$router.back();
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.body{
  box-sizing: border-box;
  height: calc(100vh - 64px);
  padding: 0.3467rem;
  background-color: #f6f6f6;
  /deep/ .input-list input{
    border: none;
  }
}
</style>