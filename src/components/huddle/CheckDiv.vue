<template>
  <div class="check-div">
    <div class="check-top">
      <p>订单号:1234568</p>
      <p>待付款</p>
    </div>
    <div class="check-content">
      <p>订单类型：买入</p>
      <p>对方电话：13012340000</p>
      <p>订单金额：200.00</p>
      <p>下单时间：00-00 12:00:00</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.check-div{
  height: 2.6667rem;
  margin: 0.2667rem 0.3467rem 0;
  background: no-repeat url('~assets/image/img_dingdankuang@2x.png') center/cover;
  border-radius: 0.1333rem;
  .check-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.8rem;
    padding: 0 0.2667rem;
    color: #fff;
    font-size: 0.3467rem;
  }
  .check-content{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 1.8667rem;
    padding: 0 0.2267rem;
    color: #fff;
    p{
      width: 50%;
      margin: 0;
    }
  }
}
</style>