<template>
  <div class="body">
    <my-banner :bannerData="$store.state.home.banner_list"></my-banner>
    <my-video :videoData="$store.state.home.video"></my-video>
    <my-questions @questionClick="qusClick" :questionsData="$store.state.home.issues_list"></my-questions>
  </div>
</template>

<script>
import { mapState,mapActions, mapMutations } from 'vuex';
import MyBanner from 'components/common/MyBanner';
import MyVideo from 'components/home/MyVideo';
import MyQuestions from 'components/home/MyQuestions';
export default {
  methods: {
    ...mapActions([
      'getHomeData'
    ]),
    qusClick(data) {
      this.$router.push({
        path: '/commonqus',
        query: {
          data: data.id
        }
      })
    }
  },
  created(){
    this.getHomeData()
  },
  components: { MyBanner,MyVideo,MyQuestions }
}
</script>

<style lang="less" scoped>
.body{
  width: 100%;
  min-height: 100vh;
  padding-top: 35px;
  background: no-repeat url('~assets/image/bg_01@2x.png') center/cover;
}
</style>