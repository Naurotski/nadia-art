<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <template v-slot:activator="{ on }">
      <slot :on="on" name="button"
        ><v-btn :x-small="$vuetify.breakpoint.xs" text color="red" v-on="on">{{
          $t('common.buyPainting')
        }}</v-btn></slot
      >
    </template>
    <v-card>
      <v-card-title>
        <span style="word-break: normal" class="text-h3"
          >{{ painting.title }}
          <p class="text-h6">{{ painting.price }}</p></span
        >
      </v-card-title>
      <slot name="text">
        <v-card-text style="white-space: pre-line" class="text-justify">{{
          $t('dialoguePayment.delivery')
        }}</v-card-text></slot
      >
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="localUser.firstName"
                  color="blue lighten-4"
                  :label="$t('dialoguePayment.firstName')"
                  class="purple-input"
                  type="text"
                  counter
                  :rules="userDataRules"
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="localUser.lastName"
                  color="blue lighten-4"
                  :label="$t('dialoguePayment.lastName')"
                  class="purple-input"
                  type="text"
                  counter
                  :rules="userDataRules"
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="localUser.email"
                  color="blue lighten-4"
                  label="Email"
                  class="purple-input"
                  type="email"
                  counter
                  :rules="emailRules"
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="localUser.country"
                  color="blue lighten-4"
                  :label="$t('dialoguePayment.country')"
                  class="purple-input"
                  type="text"
                  counter
                  :rules="userDataRules"
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="localUser.postalCode"
                  color="blue lighten-4"
                  class="purple-input"
                  :label="$t('dialoguePayment.postalCode')"
                  type="text"
                  counter
                  :rules="userDataRules"
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="localUser.city"
                  color="blue lighten-4"
                  :label="$t('dialoguePayment.city')"
                  class="purple-input"
                  type="text"
                  counter
                  :rules="userDataRules"
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="localUser.address"
                  color="blue lighten-4"
                  :label="$t('dialoguePayment.address')"
                  class="purple-input"
                  type="text"
                  counter
                  :rules="userDataRules"
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="localUser.phone"
                  color="blue lighten-4"
                  :label="$t('dialoguePayment.phone')"
                  class="purple-input"
                  type="tel"
                  counter
                  :rules="userDataRules"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-card-text :class="{ 'caption font-weight-regular': $vuetify.breakpoint.xs }">{{
          $t('dialoguePayment.redirect')
        }}</v-card-text>
        <v-spacer />
        <v-btn
          :x-small="$vuetify.breakpoint.xs"
          color="blue darken-1"
          text
          @click="dialog = false"
          >{{ $t('common.close') }}</v-btn
        >
        <v-btn
          :x-small="$vuetify.breakpoint.xs"
          :disabled="!valid"
          color="#FB8C00"
          @click="payStripe"
          >{{ $t('common.buy') }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DialoguePaymentPictures',
  props: {
    painting: {
      type: Object,
      required: true
    },
    goods: {
      type: String,
      required: true
    }
  },
  data: () => ({
    dialog: false,
    valid: false,
    localUser: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      phone: ''
    },
    userDataRules: [
      (v) => !!v || 'Your Name is required',
      (v) => v.length <= 30 || 'Not more than 30 characters'
    ],
    emailRules: [
      (v) => !!v || 'Email is required',
      // (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      (v) => v.length < 31 || 'Not more than 30 characters',
      (v) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(v) || 'Invalid e-mail.'
      }
    ]
  }),
  methods: {
    payStripe() {
      this.$store.dispatch('payStripePictures', {
        id: this.painting.id,
        name: this.painting.title,
        description: this.painting.description,
        email: this.localUser.email,
        images: this.painting.imageSrc,
        amount: this.painting.price.split(' ')[1] * 100,
        currency: 'eur',
        quantity: 1,
        dataUser: this.localUser,
        metadata: {
          name: this.painting.title,
          studioId: this.painting.id,
          typeExercise: this.goods,
          titleStudiosPrice: this.painting.id
        }
      })
    }
  }
}
</script>

<style scoped></style>
