<template>
  <v-app-bar id="core-app-bar" app color="white" elevate-on-scroll height="96">
    <v-row class="mx-auto">
      <!--      <div class="d-flex align-center">-->
      <!--        <div class="d-flex align-center">-->
      <!--          <v-img-->
      <!--            :src="require('@/assets/logo.png')"-->
      <!--            contain-->
      <!--            class="shrink mr-2 d-none d-lg-flex"-->
      <!--            height="48"-->
      <!--            width="48"-->
      <!--          />-->
      <v-toolbar-title class="display-2 pb-3" :class="{ 'display-1': $vuetify.breakpoint.xs }">
        <router-link to="/" tag="span" style="cursor: pointer">
          <span class="font-weight-regular">Nadzeya Naurotskaya</span>
        </router-link>
      </v-toolbar-title>
      <!--        </div>-->
      <v-spacer />
      <v-toolbar-items v-if="$vuetify.breakpoint.lgAndUp" class="shrink">
        <v-btn
          v-for="{ link, path } in links"
          :key="link"
          :to="path"
          active-class="primary--text"
          class="subtitle-1 ml-1"
          exact
          min-width="128"
          text
          v-text="link"
        />
      </v-toolbar-items>
      <v-toolbar-items>
        <language-selection />
        <v-app-bar-nav-icon v-if="!$vuetify.breakpoint.lgAndUp" @click="setDrawer(true)" />
      </v-toolbar-items>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CoreAppBar',
  components: {
    LanguageSelection: () => import('@/components/LanguageSelection')
  },
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER'
    })
  }
}
</script>
