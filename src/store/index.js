import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    links: ['Home', 'About me', 'Portfolio', 'Contact']
  },
  mutations: {
    SET_DRAWER(state, payload) {
      console.log(payload)
      state.drawer = payload
    }
  },
  actions: {},
  modules: {}
})
