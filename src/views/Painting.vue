<template>
  <v-container fluid>
    <transition appear name="fadeGroup" mode="out-in">
      <v-row v-if="paintingI18n">
        <v-col cols="12" sm="8" md="8">
          <v-card flat tile>
            <v-window class="cursor_pointer" v-model="onBoarding" :style="backgroundColor">
              <v-window-item
                ><v-img
                  contain
                  :height="$vuetify.breakpoint.xs ? '450px' : '600px'"
                  :src="painting.imageSrc"
                  @click.stop="dialog = true"
              /></v-window-item>
              <template v-if="painting.imageBlockSrc">
                <v-window-item v-for="imageSrc in painting.imageBlockSrc" :key="imageSrc">
                  <v-img
                    :height="$vuetify.breakpoint.xs ? '450px' : '600px'"
                    contain
                    :src="imageSrc"
                    @click.stop="dialog = true"
                /></v-window-item>
              </template>
            </v-window>
            <v-card-actions v-if="length" class="justify-space-between">
              <v-btn text @click="prev">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-item-group v-model="onBoarding" class="text-center" mandatory>
                <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ active, toggle }">
                  <v-btn :input-value="active" icon @click="toggle">
                    <v-icon>mdi-record</v-icon>
                  </v-btn>
                </v-item>
              </v-item-group>
              <v-btn text @click="next">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-dialog v-model="dialog" overlay-opacity="0.9">
            <v-card-actions>
              <p style="color: white">
                {{ onBoarding + 1 }}/{{ painting.imageBlockSrc ? length : 1 }}
              </p>
              <v-spacer />
              <v-btn class="text-right" text icon color="white" @click="dialog = false"
                ><v-icon>mdi-close</v-icon></v-btn
              >
            </v-card-actions>
            <v-carousel v-model="onBoarding" hide-delimiters height="83vh">
              <v-carousel-item contain :src="painting.imageSrc" />
              <v-carousel-item
                v-for="imageSrc in painting.imageBlockSrc"
                :key="imageSrc"
                contain
                :src="imageSrc"
              />
            </v-carousel>
          </v-dialog>
          <v-card-actions>
            <v-btn :x-small="$vuetify.breakpoint.xs" text color="primary" @click="$router.go(-1)">
              <v-icon :x-small="$vuetify.breakpoint.xs" right>mdi-arrow-left</v-icon>back</v-btn
            >
            <v-spacer />
          </v-card-actions>
          <v-card-actions>
            <iframe
              v-if="paintingI18n.videoSrc"
              ref="iframeVideo"
              :src="paintingI18n.videoSrc"
              width="100%"
              :height="$vuetify.breakpoint.xs ? 300 : 550"
              style="border: none"
              allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </v-card-actions>
        </v-col>
        <v-col cols="12" sm="4" md="4">
          <v-card-title style="word-break: normal" v-text="paintingI18n.title" />
          <v-card-text>
            <h3 v-text="paintingI18n.price" />
          </v-card-text>
          <v-card-text>
            <p v-text="paintingI18n.description" />
            <p v-text="paintingI18n.description2" />
          </v-card-text>
          <dialogue-payment-pictures
            v-if="paintingI18n.printPrice"
            :painting="paintingI18n"
            :price="`€ ${paintingI18n.printPrice}`"
            :goods="`print`"
          >
            <template v-slot:button="{ on }">
              <v-card-text style="cursor: pointer" class="mt-n6" v-on="on">
                <span class="primary--text"
                  >Buy print on canvas €{{ paintingI18n.printPrice }}</span
                >
              </v-card-text>
            </template>
            <template v-slot:text>
              <v-card-text>
                <span style="color: orange">Print on canvas €{{ paintingI18n.printPrice }}</span>
                <br />Delivery and insurance is at the buyer's expense
              </v-card-text>
            </template>
          </dialogue-payment-pictures>
          <v-card-actions>
            <dialogue-payment-pictures
              v-if="presencePrice"
              :painting="paintingI18n"
              goods="pictures"
            />
          </v-card-actions>
          <v-card-actions>
            <v-btn
              v-if="paintingI18n.linkNft"
              :x-small="$vuetify.breakpoint.xs"
              text
              color="red"
              target="_blank"
              :href="paintingI18n.linkNft"
              >{{ $t('common.buyNFT') }}</v-btn
            >
          </v-card-actions>
        </v-col>
      </v-row>
    </transition>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Painting',
  metaInfo() {
    if (this.painting) {
      return {
        title: `Buy a painting ${this.painting.title}`,
        meta: [
          {
            vmid: 'description',
            name: 'description',
            content: this.painting.description2
          }
        ]
      }
    }
  },
  components: {
    DialoguePaymentPictures: () => import('@/components/DialoguePaymentPictures')
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    onBoarding: 0,
    dialog: false
  }),
  computed: {
    painting() {
      return this.$store.getters.selectPainting(this.id)
    },
    paintingI18n() {
      return this.$i18n.locale === 'it'
        ? {
            ...this.painting,
            title: this.painting.titleIt,
            description: this.painting.descriptionIt,
            description2: this.painting.description2It,
            price: this.painting.priceIt || this.painting.price
          }
        : this.painting
    },
    presencePrice() {
      return this.paintingI18n.price.split(' ')[0] === '€'
    },
    length() {
      return this.painting.imageBlockSrc ? this.painting.imageBlockSrc.length + 1 : 0
    },
    backgroundColor() {
      return this.$vuetify.breakpoint.xs ? 'background-color: #eceff1' : 'background-color: white'
    }
  },
  created() {
    if (!this.painting) {
      this.fetchPaintings()
    }
  },
  methods: {
    ...mapActions(['fetchPaintings']),
    next() {
      this.onBoarding = this.onBoarding + 1 === this.length ? 0 : this.onBoarding + 1
    },
    prev() {
      this.onBoarding = this.onBoarding - 1 < 0 ? +this.length - 1 : this.onBoarding - 1
    }
  }
}
</script>

<style scoped></style>
