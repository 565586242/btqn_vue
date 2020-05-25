<template>
  <div class="waited-div">
    <div class="waited-title">
      <p>订单号:{{waitedData.match_order}}</p>
      <p>{{waitedData.status}}</p>
    </div>
    <div class="waited-content">
      <p style="width: 40%">订单类型：{{waitedData.type}}</p>
      <p style="width: 60%">对方电话：{{waitedData.user_phone}}</p>
      <p style="width: 40%">订单金额：{{waitedData.amount}}</p>
      <p style="width: 60%">下单时间：{{waitedData.add_time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    waitedData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.waited-div{
  height: 2.6667rem;
  margin: 0.3467rem;
  border-radius: 0.1333rem;
  background-color: rgba(0, 101, 187, .85);
  .waited-title{
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
  .waited-content{
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    height: 1.8667rem;
    padding: 0 0.2667rem;
    color: #fff;
    font-size: 0.3467rem;
    p{
      margin: 0;
      line-height: 0.8rem;
    }
  }
}
</style>