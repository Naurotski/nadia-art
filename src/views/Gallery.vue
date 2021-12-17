<template>
  <v-container id="home" class="pt-12 pb-0 px-0" fluid tag="section">
    <transition-group appear name="fadeGroup" mode="out-in">
      <section key="a" id="intro" class="text-center mb-12">
        <h1 class="display-2 font-weight-light mb-8">My Gallery</h1>
        <v-responsive class="mx-auto subtitle-1 grey--text" max-width="550">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam atque quas eligendi
          officiis nemo at praesentium molestiae, veritatis doloremque delectus nostrum provident
          temporibus aliquid autem ipsam ducimus magnam porro.
        </v-responsive>
      </section>
      <Paintings key="b" :listPictures="filteredPaintings" />
    </transition-group>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Gallery',
  metaInfo: {
    title: 'Gallery',
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
    ...mapGetters(['filteredPaintings'])
  }
}
</script>

<style scoped lang="sass"></style>
