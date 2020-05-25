<template>
  <div class="body">
    <main-nav class="my-nav"></main-nav>
    <div class="question-name">
      {{$store.state.home.questionsDetailData.home_page_problem}}
    </div>
    <div class="question-result" v-html="$store.state.home.questionsDetailData.home_page_result"></div>
  </div>
</template>

<script>
import MainNav from 'components/common/MainNav';
import { mapActions } from 'vuex';
export default {
  components: { MainNav },
  methods: {
    ...mapActions([
      'getQuesDetail'
    ])
  },
  created() {
    this.getQuesDetail({
      id: this.$route.query.data
    })
  }
}
</script>

<style lang="less" scoped>
.body{
  width: 100%;
  min-height: 100vh;
  background: no-repeat url('~assets/image/bg_02@2x.png') center/cover;
  .my-nav{
    /deep/ .main-nav-fixed{
      background-color: transparent;
      color: #fff;
    }
  }
  .question-name{
    box-sizing: border-box;
    height: 1.3333rem;
    background: no-repeat url('~assets/image/img_wentikuang@2x.png') center/cover;
    padding: 0.1333rem 0.7333rem;
    margin: 0.8rem 0.8667rem 0;
    font-size: 0.4rem;
    color: #00FFFF;
    line-height: 0.6rem;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;    
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 2;
  }
  .question-result{
    margin: 0.8rem 0.8667rem 0;
    font-size: 0.4rem;
    line-height: 0.6rem;
    color: #fff;
    /deep/ p{
      margin: 0;
    }
  }
}
</style>