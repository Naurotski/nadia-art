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
    links: ['Home', 'About', 'Gallery', 'Shop', 'Contact'],
    paintings: [],
    categories: [
      {
        category: 'Visible World',
        description:
          'Here you can see the artworks from different years. In each painting, there is a visible' +
          'world. But behind each image, there is something more than can meet your eyes. Each canvas' +
          'is a transition to a point between the worlds where boundaries are erased and narratives' +
          'dissolve. The viewer immerses into his own unconscious, into a state of "here and' +
          'nowhere." This is the experience of living free from any restrictions.'
      },
      {
        category: 'With a Secret',
        description:
          'These paintings have two sides. The front side is a familiar landscape or portrait. But' +
          'there is always a little window with glass. Which you can look into. And see what is' +
          "there. On the other side... Only the owner of the painting knows what's on the back. This" +
          'is their personal secret. \n' +
          '\n' +
          'Touch the cut on the canvas, touch the piece of stained glass, turn the canvas over. One' +
          'small action and you will be beyond the visible reality. The collection "With a Secret"' +
          "includes the artist's works, created at the intersection of techniques and practices. This" +
          'not only enriches the visual language, but it also gives everyone their own unique' +
          'experience of interactive engagement with the painting.'
      },
      {
        category: 'Objects',
        description:
          'The author goes beyond the canvas. Stained-glass artworks and mosaics, mosaic sculptures' +
          'become independent art objects. They tell more than pictures, but remain in the same' +
          'paradigm: they allow you to see hidden meanings. It’s only this time when the volume' +
          'allows you to see much more than the canvas does.'
      }
    ],
    filter: 'Visible World',
    error: null,
    loading: false,
    urlHeroku: 'https://metamorfosi.herokuapp.com',
    // urlHeroku: 'http://localhost:3000',
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
    changeFilter: (state, category) => (state.filter = category),
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
