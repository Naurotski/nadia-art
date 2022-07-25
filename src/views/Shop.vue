<template>
  <v-container id="home" class="pb-0 px-0" fluid tag="section">
    <transition-group appear name="fadeGroup" mode="out-in">
      <section key="a" id="intro" class="text-center mb-12 mx-3">
        <h1 class="display-2 font-weight-light mb-8">Shop</h1>
        <v-responsive
          class="mx-auto subtitle-1 grey--text"
          max-width="750"
          style="white-space: pre-line"
        >
          {{ $t('shop') }}
        </v-responsive>
      </section>
      <Paintings key="b" :listPictures="shopListPaintings" />
    </transition-group>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Shop',
  metaInfo: {
    title: 'Buy paintings',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content:
          'Choose and buy any oil painting, double-sided image, stained glass, mosaic or sculpture. Free shipping'
      }
    ]
  },
  components: {
    Paintings: () => import('@/components/Paintings')
  },
  computed: {
    ...mapState(['paintings']),
    shopListPaintings() {
      return this.paintings.filter((value) => value.price.split(' ')[0] === '€')
    }
  }
}
</script>

<style scoped />
