import Vue from 'vue'
import Vuex from 'vuex'

import user from "./user";
import home from './home';
import huddle from './huddle';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    home,
    huddle
  }
})
