<template>
  <div class="body">
    <my-info :infoData="$store.state.user.userInfo"></my-info>
    <huddle-div></huddle-div>
    <div class="submit-button" @click="seeHuddleDetail"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MyInfo from 'components/home/MyInfo';
import HuddleDiv from 'components/huddle/HuddleDiv';
export default {
  components: {
    MyInfo,HuddleDiv
  },
  methods: {
    ...mapActions([
      'huddleSubmit'
    ]),
    seeHuddleDetail() {
      this.$router.push('/seeapply')
    }
  }
}
</script>

<style lang="less" scoped>
.body{
  width: 100%;
  min-height: calc(100vh - 93px);
  padding-top: 44px;
  background: no-repeat url('~assets/image/bg_01@2x.png') center/cover;
  .submit-button{
    height: 6.6667rem;
    height: 1.0667rem;
    background: no-repeat url('~assets/image/btn_cksq@2x.png') center/contain;
  }
}
</style>