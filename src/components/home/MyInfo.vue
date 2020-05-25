<template>
  <div class="info-div">
    <img :src="infoData.user_head?rootUrl+'/'+infoData.user_head:require('assets/image/img_touxiang@2x.png')" alt="" srcset="">
    <div class="info-content">
      <div class="username">{{infoData.user_name}}</div>
      <div>{{infoData.user_phone}}</div>
      <div>ID:{{infoData.id_number}}</div>
      <div>当前等级:V{{infoData.user_level}}</div>
      <div>回报值:{{infoData.wallet_value}}</div>
    </div>
  </div>
</template>

<script>
import { baseURL } from '@/global-config';
export default {
  data() {
    return {
      rootUrl: baseURL
    }
  },
  props: {
    infoData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.info-div{
  display: flex;
  align-items: center;
  padding: 0 0.7467rem;
  img{
    width: 1.3333rem;
    height: 1.3333rem;
    margin-right: 0.2667rem;
    border-radius: 50%;
    object-fit: contain;
  }
  .info-content{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #fff;
    font-size: 0.32rem;
    div{
      width: 50%;
      height: 0.6333rem;
      line-height: 0.6333rem;
      text-align: left;
      &.username{
        font-size: 0.3733rem;
      }
    }
  }
}
</style>