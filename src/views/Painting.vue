<template>
  <v-container fluid>
    <v-row v-if="painting">
      <v-col cols="12" sm="8" md="8">
        <v-card-actions>
          <v-img :src="painting.imageSrc" />
        </v-card-actions>
        <v-card-actions>
          <v-btn :x-small="$vuetify.breakpoint.xs" text color="primary" to="/gallery">
            <v-icon :x-small="$vuetify.breakpoint.xs" right>mdi-arrow-left</v-icon>back</v-btn
          >
          <v-spacer />
        </v-card-actions>
        <v-card-actions>
          <iframe
            v-if="painting.videoSrc"
            ref="iframeVideo"
            :src="painting.videoSrc"
            width="100%"
            height="550"
            style="border: none"
            allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </v-card-actions>
        <v-card-actions v-for="(image, index) in painting.imageBlockSrc" :key="index">
          <v-img :src="image" />
        </v-card-actions>
        <v-card-actions>
          <v-btn
            v-if="painting.imageBlockSrc && painting.imageBlockSrc.length"
            :x-small="$vuetify.breakpoint.xs"
            text
            color="primary"
            to="/gallery"
          >
            <v-icon :x-small="$vuetify.breakpoint.xs" right>mdi-arrow-left</v-icon>back</v-btn
          >
        </v-card-actions>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-card-title style="word-break: normal" v-text="painting.titleEn" />
        <v-card-text>
          <h3 v-text="painting.priceEn" />
        </v-card-text>
        <v-card-text>
          <p v-text="painting.descriptionEn" />
          <p v-text="painting.description2En" />
        </v-card-text>
        <dialogue-payment-pictures
          v-if="painting.printPrice"
          :painting="painting"
          :price="`€ ${painting.printPrice}`"
          :goods="`print`"
        >
          <template v-slot:button="{ on }">
            <v-card-text style="cursor: pointer" class="mt-n6" v-on="on">
              <span class="primary--text">Buy print on canvas €{{ painting.printPrice }}</span>
            </v-card-text>
          </template>
          <template v-slot:text>
            <v-card-text>
              <span style="color: orange">Print on canvas €{{ painting.printPrice }}</span>
              <br />Delivery and insurance is at the buyer's expense
            </v-card-text>
          </template>
        </dialogue-payment-pictures>
        <v-card-actions>
          <dialogue-payment-pictures
            v-if="presencePrice"
            :painting="painting"
            :price="painting.priceEn"
            :goods="`pictures`"
          />
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Painting',
  components: {
    DialoguePaymentPictures: () => import('@/components/DialoguePaymentPictures')
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    painting() {
      return this.$store.getters.selectPainting(this.id)
    },
    presencePrice() {
      return this.painting.price.split(' ')[0] === '€'
    }
  },
  created() {
    if (!this.painting) {
      this.fetchPaintings()
    }
    console.log(this.painting)
  },
  methods: {
    ...mapActions(['fetchPaintings'])
  }
}
</script>

<style scoped></style>