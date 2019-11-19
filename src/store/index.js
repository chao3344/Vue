import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSticky: false,
    isShow:false
  },
  mutations: {
    setSticky(state, payload) {
      state.isSticky = payload
    },
    setShow(state){
      state.isShow = !state.isShow
    }
  },
  actions: {
  },
  modules: {
  }
})
