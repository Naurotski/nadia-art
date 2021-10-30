import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    links: ['Home', 'About me', 'Gallery', 'Shop', 'Contact'],
    categories: ['All', 'Interior', 'Buildings', 'Fashion', 'Nature', 'Lifestyle'],
    filter: 'All',
    picture: null
  },
  getters: {
    pictures: (state) => {
      let image = 247
      return Array.from({ length: 30 }).map(() => {
        image++
        return {
          src: `https://picsum.photos/id/${image}/600/350`,
          category: state.categories[Math.floor(Math.random() * state.categories.length)]
        }
      })
    }
  },
  mutations: {
    SET_DRAWER(state, payload) {
      state.drawer = payload
    }
  },
  actions: {},
  modules: {}
})
