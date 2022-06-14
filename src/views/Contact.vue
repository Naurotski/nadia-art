<template>
  <v-container
    id="contact"
    class="pa-0 grey lighten-3 flex-wrap align-start fill-height"
    fluid
    tag="section"
  >
    <iframe
      allowfullscreen
      height="500"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43022.07400514481!2d10.4219038574133!3d43.71450452154036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d591cf4164b615%3A0x4bf4bb2bdd0ea21c!2sVia%20Petrarca%2C%2017%2C%2056010%20Ghezzano%20PI!5e0!3m2!1sen!2sit!4v1635010707197!5m2!1sen!2sit"
      style="border: 0"
      width="100%"
    />
    <transition appear name="fadeGroup" mode="out-in">
      <v-row class="ma-0" justify="center">
        <v-col cols="12" md="4">
          <h1 class="display-1 mb-8 font-weight-bold">Contact Info:</h1>

          <div class="mb-8">
            Should you have any questions, please send us an e-mail or complete the enquiry form and
            Nadzeya will be in touch shortly.
          </div>

          <div class="mb-4"><strong>Address</strong> 56010 Ghezzano PI, via Petrarca, 17</div>

          <div class="mb-4"><strong>Phone</strong> +39 392 5568834</div>

          <div class="mb-4"><strong>Email</strong> naurotskaya.art@gmail.com</div>
        </v-col>

        <v-col cols="12" md="5">
          <v-form ref="form" v-model="valid" validation>
            <v-row class="mb-6">
              <v-col cols="12" md="6">
                <v-sheet>
                  <v-text-field
                    v-model="userName"
                    flat
                    :label="$t('contact.yourName')"
                    type="text"
                    solo
                    :rules="userDataRules"
                  />
                </v-sheet>
              </v-col>

              <v-col cols="12" md="6">
                <v-sheet>
                  <v-text-field
                    v-model="userEmail"
                    flat
                    :label="$t('contact.yourEmail')"
                    solo
                    type="email"
                    :rules="emailRules"
                  />
                </v-sheet>
              </v-col>

              <v-col cols="12">
                <v-sheet>
                  <v-text-field
                    v-model="subject"
                    flat
                    :label="$t('contact.title')"
                    solo
                    type="text"
                    :rules="titleRules"
                  />
                </v-sheet>
              </v-col>

              <v-col cols="12">
                <v-sheet>
                  <v-textarea
                    v-model="text"
                    flat
                    :label="$t('contact.yourMessage')"
                    solo
                    :rules="dialogRules"
                  />
                </v-sheet>
              </v-col>
            </v-row>

            <v-btn
              @click="sendMessage"
              :disabled="!valid"
              :loading="loading"
              :block="$vuetify.breakpoint.smAndDown"
              class="white--text"
              color="black"
              x-large
            >
              {{ $t('contact.sendMessage') }}
            </v-btn>
          </v-form>
          <v-overlay :absolute="absolute" :opacity="opacity" :value="overlay">
            <v-btn text color="orange lighten-2" @click="overlay = false">
              {{ $t('contact.messageSent') }}</v-btn
            >
          </v-overlay>
        </v-col>
      </v-row>
    </transition>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Contact',
  metaInfo: {
    title: 'Contact',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: 'Contact - Nadzeya Naurotskaya - Artist'
      }
    ]
  },
  data: () => ({
    valid: false,
    userName: '',
    userEmail: '',
    subject: '',
    text: '',
    overlay: false,
    absolute: true,
    opacity: 0.8,
    userDataRules: [
      (v) => !!v || 'Your Name is required',
      (v) => v.length <= 30 || 'Not more than 30 characters'
    ],
    emailRules: [
      (v) => !!v || 'Email is required',
      (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      (v) => v.length < 31 || 'Not more than 30 characters'
    ],
    titleRules: [
      (v) => !!v || 'Your Title is required',
      (v) => v.length <= 100 || 'Not more than 100 characters'
    ],
    dialogRules: [
      (v) => !!v || 'Message is required',
      (v) => (v && v.length >= 3) || 'At least 3 characters ',
      (v) => (v && v.length <= 2000) || 'Not more than 5000 characters'
    ]
  }),
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    ...mapMutations(['setLoading']),
    ...mapActions(['nodeMailer']),
    sendMessage() {
      if (this.valid) {
        this.nodeMailer({
          userName: this.userName,
          userEmail: this.userEmail,
          subject: this.subject,
          text: this.text
        }).then((result) => {
          this.setLoading(false)
          if (result.status === 200) {
            this.userName = ''
            this.userEmail = ''
            this.subject = ''
            this.text = ''
            this.overlay = !this.overlay
          } else {
            this.overlay = !this.overlay
          }
        })
      }
    }
  }
}
</script>

<style scoped />
