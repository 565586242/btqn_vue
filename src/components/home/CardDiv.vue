<template>
  <div class="card-div">
    <div class="card-list">
      姓名<p>{{cardData.user_name}}</p>
    </div>
    <div class="card-list">
      电话<p>{{cardData.user_phone}}</p>
    </div>
    <div class="card-list">
      微信<p>{{cardData.wechat_number || ''}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.card-div{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 2.6667rem;
  padding: 0.1333rem 0.3467rem;
  margin: 0.2667rem 0.3467rem 0;
  background-color: #fff;
  border-radius: 0.1333rem;
  font-size: 0.3733rem;
  color: #666;
  .card-list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
      width: 76%;
      margin: 0;
      color: #282828;
    }
  }
}
</style>