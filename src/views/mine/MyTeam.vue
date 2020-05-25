<template>
  <div class="body">
    <img src="~assets/image/img_tuandui@2x.png" class="top-img">
    <mt-navbar v-model="selectId" class="my-tab">
      <mt-tab-item id="1">我的推荐</mt-tab-item>
      <mt-tab-item id="2">我的团队</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selectId" swipeable>
      <mt-tab-container-item id="1">
        <card-div v-for="(item,index) in $store.state.user.myRecommend" :key="index" :cardData="item"></card-div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div v-for="(val,key,index) in $store.state.user.myTeamInfo" :key="index" class="div-list">
          {{`V${index+1}.匹配抱团人数${$store.state.user.myTeamInfo[key]}人`}}
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import CardDiv from 'components/home/CardDiv';
import DivList from 'components/common/DivList';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      selectId: "1"
    }
  },
  methods: {
    ...mapActions([
      "getTeam"
    ])
  },
  created() {
    this.getTeam(1)
  },
  components: { CardDiv,DivList }
}
</script>

<style lang="less" scoped>
.body{
  box-sizing: border-box;
  min-height: calc(100vh - 64px);
  background-color: #f6f6f6;
  .top-img{
    width: 100%;
    height: 4rem;
    object-fit: contain;
  }
  .my-tab{
    position: sticky;
    top: 64px;
    z-index: 999999;
  }
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
  }
}
</style>