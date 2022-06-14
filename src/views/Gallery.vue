<template>
  <v-container id="home" class="pt-12 pb-0 px-0" fluid tag="section">
    <transition-group appear name="fadeGroup" mode="out-in">
      <v-filter key="abc" />
      <section key="a" id="intro" class="text-center mb-12 mx-3">
        <h1 class="display-2 font-weight-light mb-8">{{ $t(`gallery.categories.${filter}`) }}</h1>
        <v-responsive
          v-if="filter === 'Visible World'"
          class="mx-auto subtitle-1 grey--text"
          max-width="750"
        >
          Here you can see the artworks from different years. In each painting, there is a visible
          world. But behind each image, there is something more than can meet your eyes. Each canvas
          is a transition to a point between the worlds where boundaries are erased and narratives
          dissolve. The viewer immerses into his own unconscious, into a state of "here and
          nowhere." This is the experience of living free from any restrictions.
        </v-responsive>
        <v-responsive
          v-if="filter === 'With a Secret'"
          class="mx-auto subtitle-1 grey--text"
          max-width="750"
        >
          These paintings have two sides. The front side is a familiar landscape or portrait. But
          there is always a little window with glass. Which you can look into. And see what is
          there. On the other side... Only the owner of the painting knows what's on the back. This
          is their personal secret. <br />
          <br />
          Touch the cut on the canvas, touch the piece of stained glass, turn the canvas over. One
          small action and you will be beyond the visible reality. The collection "With a Secret"
          includes the artist's works, created at the intersection of techniques and practices. This
          not only enriches the visual language, but it also gives everyone their own unique
          experience of interactive engagement with the painting.
        </v-responsive>
        <v-responsive
          v-if="filter === 'Objects'"
          class="mx-auto subtitle-1 grey--text"
          max-width="750"
        >
          The author goes beyond the canvas. Stained-glass artworks and mosaics, mosaic sculptures
          become independent art objects. They tell more than pictures, but remain in the same
          paradigm: they allow you to see hidden meanings. It’s only this time when the volume
          allows you to see much more than the canvas does.
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
          "Double-sided images, oil paintings, stained glass, mosaics, sculpture. Photos and author's Concepts"
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
