<template>
  <v-container id="home" class="pt-12 pb-0 px-0" fluid tag="section">
    <transition-group appear name="fadeGroup" mode="out-in">
      <section key="a" id="intro" class="text-center mb-12">
        <h1 class="display-2 font-weight-light mb-8">Shop</h1>
        <v-responsive class="mx-auto subtitle-1 grey--text" max-width="550">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam atque quas eligendi
          officiis nemo at praesentium molestiae, veritatis doloremque delectus nostrum provident
          temporibus aliquid autem ipsam ducimus magnam porro.
        </v-responsive>
      </section>
      <Paintings key="b" :listPictures="shopListPaintings" />
    </transition-group>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Shop',
  metaInfo: {
    title: 'Buy paintings',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem cupiditate dignissimos dolor esse ex nostrum porro quaerat rerum tempore.'
      }
    ]
  },
  components: {
    Paintings: () => import('@/components/Paintings')
  },
  computed: {
    ...mapGetters(['filteredPaintings']),
    shopListPaintings() {
      return this.filteredPaintings.filter((value) => value.price.split(' ')[0] === '€')
    }
  }
}
</script>

<style scoped />
