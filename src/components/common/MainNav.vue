<template>
  <div class="main-nav">
    <div class="main-nav-fixed">
      <div v-if="$route.meta.notFirst" @click="backClick()" class="mintui mintui-back back-icon"></div>
      <div class="title">{{$route.meta.title}}</div>
      <div v-if="$route.meta.notFirst" style="opacity: 0" class="mintui mintui-back back-icon"></div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'MainNav',
  methods: {
    backClick() {
      if(this.$route.meta.notFirst){
        this.$router.back()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main-nav{
  width: 100%;
  height: 64px;
  .main-nav-fixed{
    position: fixed;
    top: 0;
    z-index: 999999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    padding: 20px 0.3467rem 0;
    background-color: #fff;
    font-size: 0.48rem;
    .back-icon{
      font-size: 26px;
    }
    .title{
      flex: 1;
      text-align: center;
    }
  }
}
</style>