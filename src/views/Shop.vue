<template>
  <v-container id="home" class="pb-0 px-0" fluid tag="section">
    <transition-group appear name="fadeGroup" mode="out-in">
      <section key="a" id="intro" class="text-center mb-12 mx-3">
        <h1 class="display-2 font-weight-light mb-8">Shop</h1>
        <v-responsive class="mx-auto subtitle-1 grey--text" max-width="750">
          You can buy any artwork with free worldwide delivery. At a buyer’s request, a painting or
          a stained-glass artwork can be framed for additional fee. <br />
          <br />
          Please check all the information about the packaging of artworks and delivery before
          confirming a purchase. All the contact options can be found in the "Contacts" section.
          <br />
          <br />Upon delivery outside the EU, for each painting, we issue accompanying documents
          allowing to export the art objects. This may take additional 2-3 weeks.
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
