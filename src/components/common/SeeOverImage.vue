<template>
  <div class="see-image-div" @click="$router.back()">
    <img :src="$route.query.image" alt="" srcset="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.see-image-div{
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
  img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 90%;
    height: 90%;
    margin: auto;
    object-fit: contain;
  }
}
</style>