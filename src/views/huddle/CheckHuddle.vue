<template>
  <div class="body">
    <main-nav class="my-nav"></main-nav>
    <div class="search-div">
      <input type="text" placeholder="输入手机号搜索">
      <img src="~assets/image/icon_sousuo@2x.png" alt="" srcset="">
    </div>
    <mt-navbar v-model="selectId" class="my-tab">
      <mt-tab-item id="1">待审核</mt-tab-item>
      <mt-tab-item id="2">已审核</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selectId" swipeable>
      <mt-tab-container-item id="1">
        <div style="overflow:scroll;height: calc(100vh - 240px)">
          <wait-check 
            v-for="(item,index) in $store.state.huddle.notCheckApplyList" 
            :key="index"
            :waitData="item"
          ></wait-check>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div style="overflow:scroll;height: calc(100vh - 240px)">
          <waited-check 
            v-for="(item,index) in $store.state.huddle.hasCheckApplyList" 
            :key="index"
            :waitedData="item"
            @click.native="waitedClick(item)"
          ></waited-check>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import CheckDiv from 'components/huddle/CheckDiv';
import MainNav from 'components/common/MainNav';
import WaitCheck from 'components/huddle/WaitCheck';
import WaitedCheck from 'components/huddle/WaitedCheck';
import { mapActions } from 'vuex';
export default {
  components: { MainNav,CheckDiv,WaitCheck,WaitedCheck },
  data() {
    return {
      selectId: "1"
    }
  },
  methods: {
    ...mapActions([
      "getAuditMeans"
    ]),
    //已审核列表的点击
    waitedClick(data) {
      localStorage.setItem('selectId',this.selectId)
      if(data.type == '卖出') {
        if(data.status == "已打款" || data.status == "已完成"){
          this.$router.push({
            path: '/confirmGet',
            query: {
              id: data.id
            }
          })
        }
      }else{
        if(data.status == "已完成" || data.status == "已打款" || data.status == "已匹配"){
          this.$router.push({
            path: '/confirmSend',
            query: {
              id: data.id
            }
          })
        }
      }
    }
  },
  created() {
    var selected = localStorage.getItem('selectId')
    this.selectId = selected?selected:'1'
    this.getAuditMeans()
  }
}
</script>

<style lang="less" scoped>
.body{
  width: 100%;
  min-height: calc( 100vh - 49px );
  background: no-repeat url('~assets/image/bg_01@2x.png') center/cover;
  .my-nav{
    /deep/ .main-nav-fixed{
      background-color: transparent;
      color: #fff;
    }
  }
  .search-div{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.0667rem;
    margin: 0 0.4667rem;
    padding: 0 0.5067rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0.5333rem;
    input{
      flex: 1;
      background-color: transparent;
      outline: none;
      border: none;
      color: #fff;
      font-size: 0.3733rem;
      &::placeholder{
        color: rgba(255, 255, 255, .5);
      }
    }
    img{
      width: 0.4667rem;
      height: 0.4667rem;
      object-fit: contain;
    }
  }
  .my-tab{
    background-color: transparent;
    color: #fff;
    /deep/ .mint-tab-item.is-selected{
      color: #FFAA00;
      border-bottom: none;
      .mint-tab-item-label{
        border-bottom: 3px solid #fa0;
      }
    }
    /deep/ .mint-tab-item-label{
      display: inline-block;
      font-size: 0.3733rem;
      line-height: 0.8rem;
    }
  }
}
</style>