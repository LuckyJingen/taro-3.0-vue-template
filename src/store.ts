import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  demo:""
}

const mutations = {
  CHECK_DEMO(state, demo) {
    state.demo = demo
  }
}
const actions= {
}

const getters = {
  demo: state => state.demo
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
