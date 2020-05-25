<template>
  <div class="body">
    <div class="top-div">
      <div class="div-content">
        <p>{{resData.money}}</p>
        <p>需打款金额</p>
      </div>
      <div class="line-height"></div>
      <div class="div-content">
        <p class="time-icon"></p>
        <p>倒计时 : {{ changeTime(resData.due_time) }}</p>
      </div>
    </div>
    <div class="collect-div">
      <p class="collect-p">对方收款信息</p>
      <div class="collect-list">对方姓名:<p>{{resData.other_name}}</p></div>
      <div class="collect-list">对方电话:<p>{{resData.other_phone}}</p></div>
      <div class="collect-list">付款码:<p><img :src="rootUrl + '/' + resData.pay_value" /></p></div>
      <div class="collect-list">付款凭证：
        <label for="file" style="width: 60%">
          <p class="update-p" 
            :style="{'background-image': 'url('+ fileImage +')'}"
          >
            <img v-if="!resData.pay_img && !pay_voucher" src="~assets/image/icon_shangchuan@2x.png" alt="">
            <span v-if="!resData.pay_img && !pay_voucher">点击上传</span>
            <input v-if="resData.status != 2 && resData.status != 1" type="file" style="display: none;" id="file" @change="fileChange">
          </p>
        </label>
      </div>
    </div>
    <block-button :style="String(resData.status)?'':'display:none'"
      v-if="resData.status != 2 && resData.status != 1" 
      @click.native="submitClick">
      确认打款
    </block-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { confirmMoney } from '@/ajax/api';
import { baseURL } from '@/global-config';
import { Toast } from 'mint-ui';
import BlockButton from 'components/common/BlockButton';
export default {
  components: { BlockButton },
  data() {
    return {
      rootUrl: baseURL,
      resData: {},
      interval: null,
      pay_voucher: ''
    }
  },
  computed: {
    fileImage() {
      if(this.resData.pay_img){
        return this.rootUrl + '/' + this.resData.pay_img
      }else if(this.pay_voucher){
        return this.pay_voucher
      }else{
        return ""
      }
    }
  },
  methods: {
    ...mapActions([
      "getOrderDetails"
    ]),
    changeTime(time) {
      if(time && time > 0){
        var hour = parseInt(time / 3600)
        hour = hour < 10 ? '0' + hour : hour
        var min = parseInt((time % 3600) / 60)
        min = min < 10 ? '0' + min : min
        var sec = time % 3600 % 60
        sec = sec < 10 ? '0' + sec : sec
        return hour + ':' + min + ':' + sec
      }else{
        return "00:00:00"
      }
    },
    intervalTime(){
      const _this = this
      this.interval = setInterval(() => {
        _this.resData.due_time--
      }, 1000);
    },
    fileChange(e) {
      const _this = this
      let file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        _this.pay_voucher = e.target.result
      };
      reader.readAsDataURL(file);
    },
    submitClick() {
      confirmMoney({
        matchingId: this.$route.query.id,
        pay_voucher: this.pay_voucher
      }).then(res => {

      })
    }
  },
  destroyed() {
    clearInterval(this.interval)
    this.interval = null
  },
  created() {
    const _this = this
    this.getOrderDetails({
      matchingId: this.$route.query.id
    }).then(res => {
      if(res && res.code == 200){
        _this.resData = res.data
        if(res.data.status == 0) {
          _this.intervalTime()
        }
      }
    })
  }
}
</script>

<style lang="less" scoped>
.body{
  overflow: auto;
  min-height: calc(100vh - 64px);
  background-color: #f6f6f6;
  .top-div{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 2.1333rem;
    margin: 0.3467rem;
    border-radius: 0.1333rem;
    background: no-repeat url('~assets/image/bg_my@2x.png') center/cover;
    .line-height{
      width: 0.0533rem;
      height: 1.3333rem;
      background-color: #fff;
      border-radius: 0.0267rem;
    }
    .div-content{
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      height: 100%;
      color: #fff;
      font-size: 0.48rem;
      p{
        margin: 0;
      }
      .time-icon{
        width: 0.48rem;
        height: 0.48rem;
        background: no-repeat url('~assets/image/icon_shijian@2x.png') center/contain;
      }
    }
  }
  .collect-div{
    box-sizing: border-box;
    padding-bottom: 1rem;
    margin: 0.3467rem;
    border-radius: 0.1333rem;
    background-color: #fff;
    .collect-p {
      box-sizing: border-box;
      height: 0.8rem;
      padding: 0 0.3467rem;
      margin: 0;
      background-color: #E9F6FF;
      line-height: 0.8rem;
      font-size: 0.3733rem;
    }
    .collect-list{
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      min-height: 1rem;
      padding: 0 0.3467rem;
      margin-top: 0.2667rem;
      font-size: 0.36rem;
      p{
        width: 60%;
        margin: 0;
      }
      img{
        width: 2rem;
        height: 2rem;
        object-fit: contain;
      }
      .update-p{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        width: 2rem;
        height: 2rem;
        background-color: #f6f6f6;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        img{
          width: 1rem;
          height: 1rem;
          margin-bottom: 0.1333rem;
          object-fit: contain;
        }
      }
    }
  }
}
</style>