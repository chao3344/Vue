import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSticky: false,
    CityId:290,
    CityName:'北京'
  },
  mutations: {
    setSticky(state, payload) {
      state.isSticky = payload
    },
    setCityid(state,payload){
      state.CityId = payload.cityid
      state.CityName = payload.cityname
    }
    
  },
  actions: {
  },
  modules: {
  }
})
