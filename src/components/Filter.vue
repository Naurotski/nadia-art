<template>
  <v-container fluid>
    <div class="text-center">
      <v-btn icon @click="showTabs = !showTabs">
        <v-icon>mdi-view-grid</v-icon>
      </v-btn>
    </div>
    <v-expand-transition>
      <v-tabs v-model="tab" v-if="showTabs" value="3" centered show-arrows center-active>
        <v-tab v-for="{ category } in categories" :key="category" @click="changeCategory(category)">
          {{ category }}
        </v-tab>
      </v-tabs>
    </v-expand-transition>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="{ category, description } in categories" :key="description">
        <section key="a" id="intro" class="text-center mb-12 mx-3">
          <h1 class="display-2 font-weight-light mb-8">{{ category }}</h1>
          <v-responsive
            style="white-space: pre-line"
            class="mx-auto subtitle-1 grey--text"
            max-width="750"
            v-text="description"
          />
        </section>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'VFilter',

  data: () => ({
    showTabs: true,
    tab: null
  }),
  computed: {
    ...mapState(['categories', 'filter'])
  },
  mounted() {
    this.tab = this.categories.findIndex((item) => item.category === this.filter)
  },
  methods: {
    changeCategory(category) {
      this.$store.commit('changeFilter', category)
    }
  }
}
</script>
