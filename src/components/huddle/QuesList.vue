<template>
  <div class="question-list">
    <div class="question-num">{{questionData.index}}</div>
    <div class="question-content">
      <mt-radio
        :title="questionData.data.question_name"
        v-model="radioValue"
        :options="options">
      </mt-radio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioValue: "",
      options: [
        {
          label: this.questionData.data.answer_one,
          value: "0"
        },
        {
          label: this.questionData.data.answer_two,
          value: "1"
        }
      ]
    }
  },
  props: {
    questionData: {
      type: Object,
      required: true
    }
  },
  watch: {
    radioValue(data) {
      this.$emit('radioChange',{
        value: data,
        index: this.questionData.index
      })
    }
  }
}
</script>

<style lang="less" scoped>
.question-list{
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 1.3333rem;
  padding: 0.3467rem;
  border-bottom: 1px solid #ccc;
  .question-num{
    position: absolute;
    top: 0.3467rem;
    left: 0.3467rem;
    width: 0.48rem;
    height: 0.48rem;
    background-color: rgba(38, 63, 122, 1);
    border-radius: 50%;
    text-align: center;
    line-height: 0.48rem;
    color: #fff;
  }
  .question-content{
    margin-left: 0.76rem;
    /deep/ .mint-radiolist-title{
      margin: 0;
      color: #333;
      font-size: 0.4rem;
    }
    /deep/ .mint-cell{
      .mint-radio-input:checked + .mint-radio-core{
        border-color: #263F7A;
        background-color: #263F7A;
      }
    }
  }
}
</style>