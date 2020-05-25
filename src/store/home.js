import { homeindex,homeissues } from "@/ajax/api";

const state = {
  //首页
  banner_list: [],
  issues_list: [],
  video: {},
  //常见问题
  questionsDetailData: {}
}

const actions = {
  getHomeData({commit}) {
    homeindex().then(res => {
      if(res && res.code == 200){
        commit({
          type: 'setHomeData',
          data: res.data
        })
      }
    })
  },
  getQuesDetail({commit},data) {
    homeissues({
      id: data.id
    }).then(res => {
      if(res && res.code == 200) {
        commit({
          type: 'setQuestionData',
          data: res.data
        })
      }
    })
  }
}

const mutations = {
  setHomeData(state,data) {
    state.banner_list = data.data.banner_list
    state.issues_list = data.data.issues_list
    state.video = data.data.video
  },
  setQuestionData(state,data) {
    state.questionsDetailData = data.data
  }
}

export default {
  state,
  actions,
  mutations
}