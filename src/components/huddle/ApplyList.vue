<template>
  <div class="apply-list">
    <div class="apply-title">
      <p>订单号：{{applyData.order_number}}</p>
      <p>{{applyData.order_status}}</p>
    </div>
    <div class="apply-content">
      <div>ID：{{applyData.id_number}}</div>
      <div>回报值：{{applyData.return_money}}</div>
      <div>手机号：{{applyData.other_user_phone}}</div>
      <div>帮扶金额：{{applyData.amount}}</div>
      <div style="width: 100%">微信号：{{applyData.wechat}}</div>
      <div class="collect-code">
        付款二维码：
        <div class="collect-img" 
          :style="{'background-image':'url('+ payImage +')'}"
          @click="payImage?$router.push({
            path: '/seeOverImage',
            query: {
              image: payImage
            }
          }):''"
        ></div>
        <div class="change-pay" v-if="!applyData.pay_img" @click="changepaytypepost({id: applyData.id,pay_type:applyData.pay_type?0:1})">修改支付</div>
      </div>
      <div class="collect-code">
        付款凭证：
        <label :for="`update-file${applyData.id}`">
          <div class="collect-img" :style="{'background-image': 'url('+ rootUrl + '/' + applyData.pay_img +')'}">
            <img v-if="!applyData.pay_img" src="~assets/image/icon_shangchuan@2x.png" alt="">
            <p v-if="!applyData.pay_img">点击上传</p>
            <input v-if="!applyData.pay_img" type="file" style="display:none" :id="`update-file${applyData.id}`" @change="fileChange($event,applyData.id)">
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { mapActions } from 'vuex';
import { baseURL } from '@/global-config';
export default {
  props: {
    applyData: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      rootUrl: baseURL
    }
  },
  computed: {
    payImage() {
      return this.rootUrl + '/' + this.applyData.other_pay_ewm
    }
  },
  methods: {
    ...mapActions([
      "changepaytypepost",
      "uploadimagepost"
    ]),
    fileChange(e,id) {
      const _this = this
      let file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result
        _this.uploadimage({
          id: id,
          pay_image: base64
        })
      };
      reader.readAsDataURL(file);
    },
    uploadimage(data) {
      this.uploadimagepost(data).then(res => {
        if(res && res.code == 200){
          this.$router.back()
          Toast({
            message: res.msg
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.apply-list{
  height: 5.0667rem;
  margin: 0.3467rem;
  background-color: #fff;
  border-radius: 0.1333rem;
  .apply-title{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.0667rem;
    padding: 0 0.4rem;
    background-color: #E9F6FF;
    font-size: 0.3733rem;
    p{
      &:last-child{
        color: #fa0;
      }
    }
  }
  .apply-content{
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around;
    height: 4rem;
    padding: 0 0.32rem;
    div{
      width: 50%;
    }
    .collect-code{
      position: relative;
      display: flex;
      .change-pay{
        position: absolute;
        bottom: 0.2667rem;
        left: 0;
        width: 1.6rem;
        height: 0.5333rem;
        border: 1px solid #263F7A;
        border-radius: 0.2667rem;
        line-height: 0.5333rem;
        text-align: center;
        font-size: 0.2667rem;
        color: #263F7A;
      }
      .collect-img{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 1.6rem;
        height: 1.6rem;
        background-color: #f6f6f6;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        img{
          width: 0.6667rem;
          height: 0.6667rem;
          object-fit: contain;
        }
        p{
          margin: 0;
        }
      }
    }
  }
}
</style>