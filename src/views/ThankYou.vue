<template>
  <v-container fluid class="align-center">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="backgroundCard">
          <v-card-text
            style="color: white"
            class="text-center display-3 font-weight-bold"
            :class="{ 'headline font-weight-bold': $vuetify.breakpoint.xs }"
            >Thank you for your payment!</v-card-text
          >
          <v-card-text
            style="color: white; white-space: pre-line"
            :class="{ 'body-2': $vuetify.breakpoint.xs }"
            class="text-center headline font-weight-bold"
            >You have acquired a picture of Nadezhda Navrotskaya</v-card-text
          >
          <v-card-text
            style="color: white; white-space: pre-line"
            :class="{ 'body-2': $vuetify.breakpoint.xs }"
            class="text-center headline font-weight-bold"
            >For delivery, we will contact you by email within 24 hours.</v-card-text
          >
          <v-card-actions>
            <v-spacer />
            <v-btn :x-small="$vuetify.breakpoint.xs" dark class="mt-7" to="/" text> continue</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ThankYou',
  metaInfo: {
    title: 'Thank You',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        // Поменять
        content: 'Thank You'
      }
    ]
  },
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
.backgroundCard
  background: rgba(176, 190, 197, 0.3) !important
  padding: 10px

.align-center
  height: 100%
  background-image: url("https://firebasestorage.googleapis.com/v0/b/first-project-6daea.appspot.com/o/paintinds%2F-LwVTanJY0rSITZKCHcS?alt=media&token=ebe403bc-1454-4c13-9e79-e3a56514fda1")
  background-size: cover
</style>
