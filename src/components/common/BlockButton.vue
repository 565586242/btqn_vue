<template>
  <div class="button-div">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  .button-div{
    height: 1.0667rem;
    margin: 1.6667rem 0.6533rem;
    border-radius: 0.1333rem;
    background-image: linear-gradient(to bottom, #008DF0, #1F2A65);
    text-align: center;
    line-height: 1.0667rem;
    color: #fff;
    font-size: 0.48rem;
  }
</style>