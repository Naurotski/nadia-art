<template>
  <v-snackbar v-model="snackbar" app top timeout="-1" centered color="#B0BEC5">
    New content is available.
    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="refreshNewContent">Refresh</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SnackbarServiceWorker',
  computed: {
    ...mapState({
      snackbar: 'serviceWorker'
    })
  },
  methods: {
    refreshNewContent() {
      this.snackbar.waiting.postMessage({ type: 'SKIP_WAITING' })
      this.$store.commit('updatedServiceWorker', false)
    }
  }
}
</script>

<style scoped></style>
