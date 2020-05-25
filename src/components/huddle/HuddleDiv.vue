<template>
  <div class="huddle-div">
    <ul>
      <li>
        <p>本次抱团条件</p>
      </li>
      <p class="orange-color">本次升级需要累计收到{{$store.state.huddle.requirement.wallet_v}}元赠金。</p>
      <li>
        <p>本次需转抱团赠金</p>
      </li>
      <p class="orange-color">{{$store.state.huddle.send_money}}元</p>
      <li>
        <p>本次申请抱团审核人</p>
      </li>
      <p>!提交申请抱团方可展示详细信息</p>
      <li>
        <p>选择支付方式</p>
      </li>
      <div class="choose-pay">  
        <p :class="$store.state.huddle.pay_type == 1?'choose-active':''" @click="payTypeClick(1)">微信</p>
        <p :class="$store.state.huddle.pay_type == 0?'choose-active':''" @click="payTypeClick(0)">支付宝</p>
      </div>
      <p style="margin: 0">!需在24小时之内进行提交抱团申请</p>
    </ul>
    <div class="huddle-time-div">
      <div class="huddle-time">0</div>
      <div class="huddle-time">0</div>
      <div>:</div>
      <div class="huddle-time">0</div>
      <div class="huddle-time">0</div>
      <div>:</div>
      <div class="huddle-time">0</div>
      <div class="huddle-time">0</div>
    </div>  
    <div class="huddle-button" @click="submitClick">点击申请抱团</div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import { Toast } from 'mint-ui';
export default {
  methods: {
    ...mapActions([
      "getHomeOrder","huddleSubmit"
    ]),
    payTypeClick(type) {
      this.$store.commit({
        type: "setPayType",
        index: type
      })
    },
    submitClick() {
      if(this.$store.state.user.userInfo.is_question_page != 2){
        this.$router.push('/submitApply')
      }else{
        this.huddleSubmit().then(res => {
          if(res && res.code == 200){
            Toast({
              message: res.msg
            })
          }
        })
      }
    }
  },
  created() {
    this.getHomeOrder()
  }
}
</script>

<style lang="less" scoped>
.huddle-div{
  height: 11.1067rem;
  padding-top: 0.6rem;
  margin: 0.8333rem 0.5333rem 0;
  background: no-repeat url('~assets/image/img_shenqingkuang@2x.png') center/contain;
  color: #fff;
  li{
    color: #00FFFF;
    p{
      margin: 0;
      color: #fff;
      font-size: 0.3733rem;
    }
  }
  p{
    margin-bottom: 0.5333rem;
  }
  .orange-color{
    font-size: 0.32rem;
    color: #FFAA00;
  }
  .choose-pay{
    display: flex;
    p{
      width: 1.6rem;
      height: 0.5333rem;
      border: 1px solid #FFAA00;
      border-radius: 0.2667rem;
      margin-right: 0.2667rem;
      line-height: 0.5333rem;
      text-align: center;
      color: #FFAA00;
      &.choose-active{
        background-color: #FFAA00;
        color: #fff;
      }
    }
  }
  .huddle-time-div{
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0.8rem;
    margin: 0 2.1333rem;
    .huddle-time{
      height: 0.8rem;
      width: 0.48rem;
      margin: 0 0.1333rem;
      background-image: linear-gradient(to bottom,#008DF0, #1F2A65);
      text-align: center;
    }
  }
  .huddle-button{
    float: right;
    width: 3.2rem;
    height: 0.8rem;
    background-color: #26A5FF;
    border-radius: 0.4rem;
    margin-top: 0.2667rem;
    margin-right: 0.5333rem;
    line-height: 0.8rem;
    text-align: center;
    color: #fff;
  }
}
</style>