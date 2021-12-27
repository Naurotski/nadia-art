<template>
  <v-container id="home" class="pt-12 pb-0 px-0" fluid tag="section">
    <transition-group appear name="fadeGroup" mode="out-in">
      <v-filter key="abc" />
      <section key="a" id="intro" class="text-center mb-12">
        <h1 class="display-2 font-weight-light mb-8">{{ filter }}</h1>
        <v-responsive
          v-if="filter === 'Life Captured'"
          class="mx-auto subtitle-1 grey--text"
          max-width="550"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem beatae consequuntur
          deleniti doloremque incidunt ipsa labore quo quos tenetur?
        </v-responsive>
        <v-responsive
          v-if="filter === 'Between the Worlds'"
          class="mx-auto subtitle-1 grey--text"
          max-width="550"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, assumenda blanditiis
          dolor ea earum est explicabo facere fugiat inventore iusto libero odio quibusdam quidem
          repudiandae!
        </v-responsive>
        <v-responsive
          v-if="filter === 'Beyond Reality'"
          class="mx-auto subtitle-1 grey--text"
          max-width="550"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cupiditate dicta
          expedita labore laborum molestias nam nemo odio officia possimus provident quisquam
          ratione repellendus sapiente similique sit unde, vel velit.
        </v-responsive>
      </section>
      <Paintings key="b" :listPictures="sortPaintings" />
    </transition-group>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Gallery',
  metaInfo: {
    title: 'Gallery',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        // Поменять
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem cupiditate dignissimos dolor esse ex nostrum porro quaerat rerum tempore.'
      }
    ]
  },
  components: {
    Paintings: () => import('@/components/Paintings'),
    VFilter: () => import('@/components/Filter')
  },
  computed: {
    ...mapState(['filter']),
    ...mapGetters(['filteredPaintings']),
    sortPaintings() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.filteredPaintings.sort((a, b) => {
        if (a.index < b.index) return -1
        if (a.index === b.index) return 0
        if (a.index > b.index) return 1
      })
    }
  }
}
</script>

<style scoped lang="sass"></style>
