<template>
  <div class="body">
    <ptitle>收款账号</ptitle>
    <div class="pay-div">
      <div class="pay-item pay-type">
        <img src="~assets/image/icon_weixin@2x.png" alt="" srcset="">
        <p>微信</p>
      </div>
      <label for="update-wechat">
        <div class="pay-item update-div" :style="{'background-image':wechatUrl?'url('+wechatUrl+')':''}">
          <img v-if="!wechatUrl" src="~assets/image/icon_shangchuan@2x.png" alt="" srcset="">
          <p v-if="!wechatUrl">上传二维码</p>
        </div>
        <input type="file" style="display:none" id="update-wechat" @change="fileChange($event,'wechat')">
      </label>
    </div>
    <div class="pay-div">
      <div class="pay-item pay-type">
        <img src="~assets/image/icon_zhifub@2x.png" alt="" srcset="">
        <p>支付宝</p>
      </div>
      <label for="update-alipay">
        <div class="pay-item update-div" :style="{'background-image':wechatUrl?'url('+alipayUrl+')':''}">
          <img v-if="!alipayUrl" src="~assets/image/icon_shangchuan@2x.png" alt="" srcset="">
          <p v-if="!alipayUrl">上传二维码</p>
        </div>
        <input type="file" style="display:none" id="update-alipay" @change="fileChange($event,'alipay')">
      </label>
    </div>
    <block-button @click.native="submitClick()">确认修改</block-button>
  </div>
</template>

<script>
import Ptitle from 'components/home/Ptitle';
import BlockButton from 'components/common/BlockButton';
import { mapActions } from 'vuex';
import { baseURL } from '@/global-config';
import { Toast } from 'mint-ui';
export default {
  components: { BlockButton,Ptitle },
  data() {
    return {
      wechatUrl: '',
      alipayUrl: '',
      rootUrl: baseURL
    }
  },
  methods: {
    ...mapActions([
      "postMyAccount"
    ]),
    fileChange(e,type) {
      const _this = this
      let file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result
        if(type == 'wechat'){
          _this.wechatUrl = base64
        }else{
          _this.alipayUrl = base64
        }
      };
      reader.readAsDataURL(file);
    },
    submitClick() {
      const _this = this
      this.postMyAccount({
        wechat_pay: _this.wechatUrl.indexOf('data:image') == '-1'?'':_this.wechatUrl,
        alipy: _this.alipayUrl.indexOf('data:image') == '-1'?'':_this.alipayUrl
      }).then((res) => {
        Toast({
          message: res.msg,
          duration: 1000
        })
        _this.$router.back()
      })
    }
  },
  created() {
    this.wechatUrl = this.$store.state.user.userInfo.wechat_pay?
      this.rootUrl + '/' + this.$store.state.user.userInfo.wechat_pay:'';
    this.alipayUrl = this.$store.state.user.userInfo.alipy?
      this.rootUrl + '/' + this.$store.state.user.userInfo.alipy:'';
  }
}
</script>

<style lang="less" scoped>
.body{
  box-sizing: border-box;
  height: calc(100vh - 64px);
  padding: 0.3467rem;
  background-color: #f6f6f6;
  .pay-div{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 2.1333rem;
    margin-top: 0.4rem;
    background-color: #fff;
    border-radius: 0.1333rem;
    .pay-item{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 0.1333rem;
      img{
        width: 0.9733rem;
        height: 0.8rem;
        object-fit: contain;
      }
      p{
        margin: 0;
      }
    }
    .pay-type{
      font-size: 0.3733rem;
    }
    .update-div{
      background-color: #f6f6f6;
      font-size: 0.2667rem;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
}
</style>