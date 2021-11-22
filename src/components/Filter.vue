<template>
  <div>
    <div class="text-center pa-3">
      <v-btn icon @click="showTabs = !showTabs">
        <v-icon>mdi-view-grid</v-icon>
      </v-btn>
    </div>
    <v-expand-transition>
      <div v-if="showTabs" class="text-center">
        <v-btn
          v-for="(tab, i) in categories"
          :key="i"
          text
          @click="changeCategory(tab)"
          :class="{ primary: tab === filter }"
          class="ml-1"
        >
          {{ tab }}
        </v-btn>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'VFilter',

  data: () => ({
    showTabs: true,
    fff: 'All'
  }),

  computed: {
    ...mapState(['categories', 'filter'])
  },
  methods: {
    changeCategory(category) {
      this.$store.commit('changeFilter', category)
    }
  }
}
</script>
