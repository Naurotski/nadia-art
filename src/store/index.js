import Vue from 'vue'
import Vuex from 'vuex'
import { initializeApp } from 'firebase/app'
import firebaseConfig from '@/firebaseConfig'
import { getDatabase, ref, onValue } from 'firebase/database'
import axios from 'axios'
import stripe from '@/pk_live'

Vue.use(Vuex)
initializeApp(firebaseConfig)
const db = getDatabase()

export default new Vuex.Store({
  state: {
    drawer: false,
    paintings: [],
    filter: 'Visible World',
    error: null,
    loading: false,
    urlHeroku: 'https://metamorfosi.herokuapp.com',
    // urlHeroku: 'https://test-metamorfosi.herokuapp.com',
    // urlHeroku: 'http://localhost:3001',
    serviceWorker: null
  },
  getters: {
    url: (state) => state.url,
    filteredPaintings: (state) => state.paintings.filter((p) => p.rubric === state.filter),
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
    changeCategory: (state, category) => (state.filter = category),
    setError: (state, payload) => (state.error = payload),
    clearError: (state) => (state.error = null),
    setLoading: (state, payload) => (state.loading = payload),
    updatedServiceWorker: (state, payload) => (state.serviceWorker = payload)
  },
  actions: {
    async fetchPaintings({ commit }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const paintingsRef = await ref(db, 'paintings')
        await onValue(paintingsRef, (snapshot) => {
          const resultPaintings = []
          const paintings = snapshot.val()
          Object.keys(paintings).forEach((key) => {
            const painting = paintings[key]
            resultPaintings.push({
              ...painting,
              id: key
            })
          })
          commit('fetchPaintings', resultPaintings)
          commit('setLoading', false)
        })
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async payStripePictures({ state, commit }, paymentDetails) {
      commit('clearError')
      try {
        const response = await axios.post(`${state.urlHeroku}/payStripePictures`, {
          ...paymentDetails
        })
        await stripe.redirectToCheckout({
          sessionId: response.data
        })
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    },
    async nodeMailer({ state, commit }, { userName, userEmail, subject, text }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        return await axios.post(`${state.urlHeroku}/nadiaArt/nodemailer`, {
          userName,
          userEmail,
          subject,
          text
        })
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    }
  }
})
