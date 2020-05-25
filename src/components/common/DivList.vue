<template>
  <div class="div-list">
    <div>{{title}}</div>
    <img src="~assets/image/icon_xiayiye@2x.png" alt="" srcset="">
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.div-list{
  box-sizing: border-box;
  height: 1.3333rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  padding: 0 0.32rem;
  background-color: #fff;
  font-size: 0.3733rem;
  img{
    width: 0.2rem;
    height: 0.2667rem;
  }
}
</style>