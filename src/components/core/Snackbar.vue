<template>
  <v-snackbar
    v-model="error"
    color="error"
    :multi-line="true"
    :timeout="5000"
    transition="scale-transition"
  >
    {{ error }}
    <template v-slot:action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="clearError()"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Snackbar',
  computed: {
    error: {
      get() {
        return this.$store.state.error
      },
      set() {}
    }
  },
  methods: {
    ...mapMutations(['clearError'])
  }
}
</script>

<style scoped></style>
