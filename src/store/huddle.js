import {
  homeorder,
  ordersubmit,
  auditMeans,
  homeanswer,
  buyorderlist,
  changepaytype,
  uploadimage,
  orderDetails
} from '@/ajax/api';
import { Toast } from 'mint-ui';

const state = {
  send_money: 0,
  requirement: {},
  pay_type: 1,  //支付方式 1微信 0支付宝
  questionData: [],  //问题列表
  writeAnswer: [],  //书写的答案
  submitApplyList: [],  //已经提交的抱团申请
  notCheckApplyList: [],
  hasCheckApplyList: []
}

const actions = {
  //申请抱团
  getHomeOrder({ commit }) {
    homeorder().then(res => {
      commit({
        type: 'setHomeOrder',
        data: res.data
      })
      commit({
        type: 'setVal',
        key: 'userInfo',
        value: res.data.user
      })
    })
  },
  //抱团申请问题页
  getHomeanswer({ commit }) {
    homeanswer().then(res => {
      if(res && res.code == 200) {
        commit({
          type: 'setQuestion',
          data: res.data
        })
      }
    })
  },
  //获取问题列表验证并提交
  questionsCheck({ commit }) {
    if(state.writeAnswer.length == state.questionData.length){
      var result = true;
      state.writeAnswer.map((item,index) => {
        if(item != state.questionData[index].correct_answer){
          result = false
        }
      })
      if(!result){
        Toast({
          message: "问题没有回答正确"
        })
      }else{
        return actions.huddleSubmit
      }
    }else{
      Toast({
        message: "请回答完所有问题再点击提交"
      })
    }
  },
  //提交抱团
  huddleSubmit() {
    return ordersubmit({
      pay_type: state.pay_type
    })
  },
  //查看提交的问题
  seeBuyorderlist({ commit }){
    buyorderlist().then(res => {
      if(res && res.code == 200){
        commit({
          type: 'setSubmitApply',
          data: res.data
        })
      }
    })
  },
  //修改支付方式
  changepaytypepost({ commit }, data) {
    changepaytype({
      id: data.id,
      pay_type: data.pay_type
    }).then(res => {
      if(res && res.code == 200){
        Toast({
          message: `成功修改为${data.pay_type?'微信':'支付宝'}支付`
        })
        commit({
          type: 'setChangePayType',
          data: {
            id: data.id,
            pay_type: res.data.pay_type,
            other_pay_ewm: res.data.pay_img
          }
        })
      }
    })
  },
  //上传支付凭证
  uploadimagepost({ commit }, data) {
    return uploadimage({
      id: data.id,
      pay_image: data.pay_image
    })
  },
  //获取审核列表
  getAuditMeans({ commit }, data) {
    auditMeans({
      type: 0,
      search: data?data.search:'' 
    }).then(res => {
      if(res && res.code == 200){
        commit({
          type: 'setCheckList',
          key: 'notCheckApplyList',
          value: res.data
        })
      }
    })
    //已审核
    auditMeans({
      type: 1,
      search: data?data.search:'' 
    }).then(res => {
      if(res && res.code == 200){
        commit({
          type: 'setCheckList',
          key: 'hasCheckApplyList',
          value: res.data
        })
      }
    })
  },
  //订单详情页
  getOrderDetails({ commit }, data) {
    return orderDetails(data)
  }
}

const mutations = {
  setHomeOrder(state,data) {
    state.requirement = data.data.requirement
    state.send_money = data.data.send_money
  },
  setPayType(state,data) {
    state.pay_type = data.index
  },
  //设置题目
  setQuestion(state,data) {
    state.questionData = data.data
  },
  //设置书写答案
  setAnswer(state,data) {
    state.writeAnswer[data.index - 1] = data.value
  },
  //设置已经提交的申请
  setSubmitApply(state,data) {
    state.submitApplyList = data.data
  },
  //设置支付方式
  setChangePayType(state,data) {
    state.submitApplyList.map(item => {
      if(item.id == data.data.id){
        item.pay_type = Number(data.data.pay_type)
        item.other_pay_ewm = data.data.other_pay_ewm
      }
    })
  },
  //设置审核列表
  setCheckList(state,data){
    state[data.key] = data.value
  }
}

export default {
  state,
  actions,
  mutations
}