import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    width: null,
    height: null
  },
  mutations: {
    setIsMobile: (state, value) => {
      state.isMobile = value;
    },
    setWidth: (state, value) => {
      state.width = value;
    },
    setHeight: (state, value) => {
      state.height = value
    }
  },
  actions: {

  },
  modules: {
  }
})
