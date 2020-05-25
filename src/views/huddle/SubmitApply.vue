<template>
  <div class="body">
    <ques-list v-for="(item,index) in $store.state.huddle.questionData" :key="index" :questionData="{
      index: index+1,
      data: item
    }" @radioChange="radioChange"></ques-list>
    <div style="height: 1.8667rem">
      <div class="submit-fixed">
        <block-button @click.native="submitClick">提交</block-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import QuesList from 'components/huddle/QuesList';
import BlockButton from 'components/common/BlockButton';
import { Toast } from 'mint-ui';
export default {
  methods: {
    ...mapActions([
      "getHomeanswer",
      "questionsCheck",
      "huddleSubmit"
    ]),
    radioChange(data){
      this.$store.commit({
        type: 'setAnswer',
        index: data.index,
        value: data.value 
      })
    },
    submitClick() {
      const _this = this
      this.questionsCheck().then(res => {
        res().then(result => {
          if(result && result.code == 200){
            var toastResult = Toast({
              message: result.msg
            })
            setTimeout(() => {
              toastResult.close()
              _this.$router.back()
            }, 1000);
          }
        })
      })
    }
  },
  components: {
    QuesList,BlockButton
  },
  created() {
    this.getHomeanswer()
  }
}
</script>

<style lang="less" scoped>
.submit-fixed{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.8667rem;
  background-color: #fff;
  /deep/ .button-div{
    margin-top: 0.4rem;
  }
}
</style>