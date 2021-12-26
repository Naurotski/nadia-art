<template>
  <v-app-bar id="core-app-bar" app color="white" elevate-on-scroll height="96">
    <v-container>
      <v-row>
        <div class="d-flex align-center">
          <v-img
            :src="require('@/assets/logo.png')"
            contain
            class="shrink mr-2 d-none d-lg-flex"
            height="48"
            width="48"
          />
          <v-toolbar-title class="headline font-italic">
            <router-link to="/" tag="span" style="cursor: pointer">
              <span class="font-weight-bold">Nadzeya</span>Naurotskaya
            </router-link>
          </v-toolbar-title>
        </div>

        <v-spacer />

        <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp" class="shrink">
          <v-btn
            v-for="(link, i) in links"
            :key="i"
            :to="{
              name: link
            }"
            active-class="primary--text"
            class="subtitle-1 ml-1"
            exact
            min-width="128"
            text
          >
            {{ link }}
          </v-btn>
        </v-toolbar-items>

        <v-app-bar-nav-icon v-else @click="setDrawer(true)" />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'CoreAppBar',
  computed: {
    ...mapState(['links'])
  },
  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER'
    })
  }
}
</script>
