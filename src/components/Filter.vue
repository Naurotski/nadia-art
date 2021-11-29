<template>
  <v-container fluid>
    <div class="text-center">
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
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'VFilter',

  data: () => ({
    showTabs: true
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
