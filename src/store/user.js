import {
  homelogout,
  myTeam,
  highuper,
  paymentpost,
  wechatnumberpost,
  myinfopost,
  myinfoget,
  homeinvite
} from '@/ajax/api';

const state = {
  token: '',
  userInfo: {},  //个人信息
  myRecommend: [], //我的推荐
  myTeamInfo: {},  //我的团队
  myBoos: {}  //我的上级
}

const actions = {
  //我的团队
  getTeam({ commit }) {
    myTeam({
      type: 1
    }).then(res => {
      if(res && res.code == 200){
        commit({
          type: 'setVal',
          key: "myRecommend",
          value: res.data
        })
      }
    })
    myTeam({
      type: 2
    }).then(res => {
      if(res && res.code == 200){
        commit({
          type: 'setVal',
          key: "myTeamInfo",
          value: res.data
        })
      }
    })
  },
  //我的上级
  getBoos({ commit }) {
    highuper().then(res => {
      if(res && res.code == 200) {
        commit({
          type: "setVal",
          key: 'myBoos',
          value: res.data
        })
      }
    })
  },
  changeWechat({ commit }, payload) {
    return wechatnumberpost(payload)
  },
  //收款信息
  postMyAccount({ commit }, payload) {
    return paymentpost(payload)
  },
  //获取我的信息
  getMyInfo({ commit }){
    myinfoget().then(res => {
      if(res && res.code == 200){
        commit({
          type: "setVal",
          key: 'userInfo',
          value: res.data
        })
      }
    })
  },
  //获取邀请码
  homeinviteGet({ commit }){
    homeinvite().then(res => {
      if(res && res.code == 200){
        commit({
          type: 'setInvitationImg',
          data: {
            invitation_img: res.data.invitation_img,
            invitation_link: res.data.invitation_link,
            invitation_code: res.data.invitation_code
          }
        })
      }
    })
  },
  //更改我的信息
  changeInfo({ commit }, payload){
    return myinfopost(payload)
  },
  //推出账户
  logout() {
    return homelogout()
  }
}

const mutations = {
  setVal(state, payload){
    state[payload.key] = payload.value
  },
  setInvitationImg(state, payload) {
    state.userInfo.invitation_img = payload.data.invitation_img
    state.userInfo.invitation_link = payload.data.invitation_link
    state.userInfo.invitation_code = payload.data.invitation_code
  },
  clearAll(state) {
    localStorage.clear()
    state.token = ''
  }
}

export default {
  state,
  mutations,
  actions
}