<template>
  <v-container id="home" class="pb-0 px-0" fluid tag="section">
    <transition-group appear name="fadeGroup" mode="out-in">
      <v-filter :categories="categories" key="abc" />
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
    },
    categories() {
      return [
        {
          id: 'Visible World',
          category: this.$t('categories.category.VisibleWorld'),
          description: this.$t('categories.description.VisibleWorld')
        },
        {
          id: 'With a Secret',
          category: this.$t('categories.category.WithASecret'),
          description: this.$t('categories.description.WithASecret')
        },
        {
          id: 'Objects',
          category: this.$t('categories.category.Objects'),
          description: this.$t('categories.description.Objects')
        },
        {
          id: 'test',
          category: this.$t('categories.category.test'),
          description: this.$t('categories.description.test')
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass"></style>
