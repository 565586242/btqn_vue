<template>
  <div class="banner-div">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="banner-list" v-for="(item,index) in bannerData" :key="index">
        <img :src="rootUrl + '/' + item.img_path">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { baseURL } from '@/global-config';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  data() {
    return {
      rootUrl: baseURL,
      swiperOptions: {
        autoplay: 1500,
        loop:true,
        speed:1000,
      }
    }
  },
  props: {
    bannerData: {
      default: []
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="less" scoped>
.banner-div{
  height: 5.3333rem;
  margin: 0.2667rem;
  .banner-list{
    height: 5.3333rem;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>