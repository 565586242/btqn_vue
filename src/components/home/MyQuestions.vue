<template>
  <div class="questions-div">
    <p class="questions-title">常见问题</p>
    <div class="questions-list" v-for="(item, index) in questionsData" :key="index" @click="questionClick(item)">
      <p>{{item.home_page_problem}}</p>
      <div>></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questionsData: {
      type: Array,
      default: []
    }
  },
  methods: {
    questionClick(item) {
      this.$emit('questionClick',{
        id: item.id
      })
    }
  }
}
</script>

<style lang="less" scoped>
.questions-div{
  height: 7.3733rem;
  margin: auto 0.5333rem;
  background: no-repeat url('~assets/image/home_img_changjianwt@2x.png') center/contain;
  .questions-title{
    padding-top: 0.8rem;
    margin-bottom: 0;
    color: #fff;
    font-size: 0.4rem;
    text-align: center;
  }
  .questions-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.56rem;
    height: 0.88rem;
    background: no-repeat url('~assets/image/hong_img_fengexian@2x.png') bottom/contain;
    color: #fff;
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>