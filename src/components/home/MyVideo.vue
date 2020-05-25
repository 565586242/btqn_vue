<template>
  <div class="video-div" >
    <div class="video-bg" :style="{
      'background-image': !isPlay?'url('+ rootUrl + '/' + videoData.video_img+')':null
    }">
      <div class="play-icon" @click="isPlay = !isPlay"></div>
    </div>
    <video v-if="isPlay" :src="rootUrl + '/' +videoData.video_address" controls="controls"></video>
  </div>
</template>

<script>
import { baseURL } from '@/global-config';
export default {
  data() {
    return {
      rootUrl: baseURL,
      isPlay: false
    }
  },
  props: {
    videoData: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="less" scoped>
.video-div{
  position: relative;
  margin: 0.2667rem;
  height: 5.6rem;
  padding: 0.0667rem;
  .video-bg{
    position: relative;
    width: 100%;
    height: 100%;
    margin: auto;
    background-size: cover;
    background-position: center;
  }
  .play-icon{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 1.28rem;
    height: 1.28rem;
    margin: auto;
    background: no-repeat url('~assets/image/icon_zanting@2x.png') center/contain;
  }
  video{
    position: absolute; 
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    margin: auto;
  }
}
</style>