<template>
  <div class="wait-div">
    <div class="wait-title">
      <p>订单号:{{waitData.order_number}}</p>
      <p>审核中</p>
    </div>
    <div class="wait-content">
      <p>订单金额：{{waitData.amount}}</p>
      <p>下单时间：{{waitData.add_time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    waitData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.wait-div{
  height: 1.8667rem;
  margin: 0.3467rem;
  border-radius: 0.1333rem;
  background-color: rgba(0, 101, 187, .85);
  .wait-title{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.8rem;
    padding: 0 0.2667rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    color: #fff;
    font-size: 0.3467rem;
    p{
      &:last-child{
        color: #fa0;
      }
    }
  }
  .wait-content{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2667rem;
    color: #fff;
    font-size: 0.3467rem;
  }
}
</style>