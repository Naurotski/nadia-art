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

    <v-row class="ma-0" justify="center">
      <v-col cols="12" md="4">
        <h1 class="display-1 mb-8 font-weight-bold">Contact Info:</h1>

        <div class="mb-8">
          Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris,
          aliquam eu ultrices vel, conse vitae sapien at imperdiet risus. Quisque cursus risus id.
          fermentum, in auctor quam consectetur.
        </div>

        <div class="mb-4"><strong>Address</strong> 56010 Ghezzano PI, via Petrarca, 17</div>

        <div class="mb-4"><strong>Phone</strong> +39 392 5568834</div>

        <div class="mb-4"><strong>Email</strong> naurotskaya.art@gmail.com</div>
      </v-col>

      <v-col cols="12" md="5">
        <v-form>
          <v-row class="mb-6">
            <v-col cols="12" md="6">
              <v-sheet>
                <v-text-field flat hide-details label="Your Name" solo />
              </v-sheet>
            </v-col>

            <v-col cols="12" md="6">
              <v-sheet>
                <v-text-field flat hide-details label="Your Email" solo />
              </v-sheet>
            </v-col>

            <v-col cols="12">
              <v-sheet>
                <v-text-field flat hide-details label="Your Title" solo />
              </v-sheet>
            </v-col>

            <v-col cols="12">
              <v-sheet>
                <v-textarea flat hide-details label="Your Message" solo />
              </v-sheet>
            </v-col>
          </v-row>

          <v-btn :block="$vuetify.breakpoint.smAndDown" class="white--text" color="black" x-large>
            Send Message
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped></style>
