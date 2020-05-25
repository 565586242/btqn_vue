<template>
  <div class="body">
    <div class="top-div">
      <div class="div-content">
        <p>{{resData.money}}</p>
        <p>收款金额</p>
      </div>
      <div class="line-height"></div>
      <div class="div-content">
        <p class="time-icon"></p>
        <p>倒计时 : {{ changeTime(resData.due_time) }}</p>
      </div>
    </div>
    <div class="collect-div">
      <p class="collect-p">收款凭证</p>
      <img class="collect-img" :src="rootUrl + '/' + resData.pay_img" alt="">
    </div>
    <block-button :style="String(resData.status)?'':'display:none'" v-if="resData.status != 2" @click.native="submitClick">确认收款</block-button>
  </div>
</template>

<script>
import { baseURL } from '@/global-config';
import { Toast } from 'mint-ui';
import { mapActions } from 'vuex';
import BlockButton from 'components/common/BlockButton';
import { confirmReceipt } from '@/ajax/api';
export default {
  components: { BlockButton },
  data() {
    return {
      rootUrl: baseURL,
      resData: {},
      interval: null
    }
  },
  methods: {
    ...mapActions([
      "getOrderDetails"
    ]),
    intervalTime(){
      const _this = this
      this.interval = setInterval(() => {
        _this.resData.due_time--
      }, 1000);
    },
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
    submitClick() {
      const _this = this
      if(this.resData.due_time == 0){
        Toast({
          message: '收款倒计时已结束'
        })
      }else{
        confirmReceipt({
          matchingId: this.$route.query.id
        }).then(res => {
          if(res && res.code == 200){
            Toast({
              message: res.msg,
            })
            _this.$router.back()
          }
        })
      }
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
        if(res.data.status != 2) {
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
    height: 10.4rem;
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
    .collect-img{
      display: block;
      width: 60%;
      height: 9.6rem;
      margin: auto;
      object-fit: contain;
    }
  }
}
</style>