import Vue from 'vue'
import Vuex from 'vuex'
import { initializeApp } from 'firebase/app'
import firebaseConfig from '@/firebaseConfig'
import { getDatabase, ref, onValue, get } from 'firebase/database'

Vue.use(Vuex)
initializeApp(firebaseConfig)
const db = getDatabase()

export default new Vuex.Store({
  state: {
    drawer: false,
    links: ['Home', 'About me', 'Gallery', 'Shop', 'Contact'],
    paintings: [],
    categories: [
      'All',
      'artObjects',
      'landscape',
      'cityLandscapes',
      'portraits',
      'stillLifes',
      'different'
    ],
    filter: 'All',
    error: null
  },
  getters: {
    filteredPaintings: (state) => {
      return state.filter === 'All'
        ? state.paintings
        : state.paintings.filter((p) => p.rubric === state.filter)
    },
    selectPainting: (state) => (id) => state.paintings.find((painting) => painting.id === id)
  },
  mutations: {
    SET_DRAWER(state, payload) {
      state.drawer = payload
    },
    fetchPaintings: (state, resultPaintings) => {
      state.paintings = resultPaintings.sort((a, b) => {
        if (a.id < b.id) return 1
        if (a.id === b.id) return 0
        if (a.id > b.id) return -1
      })
    },
    changeFilter: (state, category) => (state.filter = category),
    setError: (state, payload) => (state.error = payload),
    clearError: (state) => (state.error = null)
  },
  actions: {
    async fetchPaintings({ commit }) {
      commit('clearError')
      try {
        const resultPaintings = []
        const paintingsRef = await ref(db, 'paintings')
        await onValue(paintingsRef, (snapshot) => {
          const paintings = snapshot.val()
          Object.keys(paintings).forEach((key) => {
            const painting = paintings[key]
            resultPaintings.push({
              ...painting,
              id: key
            })
          })
        })
        commit('fetchPaintings', resultPaintings)
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    },
    async getPaintings({ commit }) {
      commit('clearError')
      try {
        const resultPaintings = []
        const paintingsRef = await ref(db, 'paintings')
        const snapshot = await get(paintingsRef)
        const paintings = snapshot.val()
        Object.keys(paintings).forEach((key) => {
          const painting = paintings[key]
          resultPaintings.push({
            ...painting,
            id: key
          })
        })
        commit('fetchPaintings', resultPaintings)
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    },
    async payStripePictures({ commit }, paymentDetails) {
      console.log(paymentDetails)
      commit('clearError')
      // try {
      //   const response = await axios.post(`${getters.url}/payStripePictures`, {
      //     ...paymentDetails
      //   })
      //   stripe.redirectToCheckout({
      //     sessionId: response.data
      //   })
      // } catch (error) {
      //   commit('setError', error.message)
      //   throw error
      // }
    }
  }
})
