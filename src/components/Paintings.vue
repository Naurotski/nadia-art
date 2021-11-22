<template>
  <div v-scroll="onScroll" class="v-gallery">
    <v-filter />
    <v-container :fluid="!isScrolling" class="transition-swing">
      <v-row :no-gutters="!isScrolling" class="transition-swing mx-n4">
        <v-col
          v-for="pic in paginatedPictures"
          :key="pic.imageSrc"
          cols="12"
          md="4"
          class="transition-swing"
        >
          <router-link :to="`/painting/${pic.id}`">
            <painting-card :src="pic.imageSrc" />
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    <v-responsive
      v-if="paginatedPictures.length < listPictures.length"
      class="white py-12 mx-n3 text-center"
    >
      <v-btn text @click="page++"> Load More Works </v-btn>
    </v-responsive>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Gallery',
  props: {
    listPictures: {
      type: Array,
      required: true
    }
  },
  components: {
    PaintingCard: () => import('@/components/PaintingCard'),
    VFilter: () => import('@/components/Filter')
  },
  data: () => ({
    dialog: false,
    isScrolling: false,
    page: 1
  }),
  computed: {
    ...mapState(['filter', 'picture', 'paintings']),
    paginatedPictures() {
      return this.listPictures.slice(0, this.page * 12)
    }
  },
  created() {
    if (!this.listPictures.length) {
      this.fetchPaintings()
    }
  },
  methods: {
    ...mapActions({
      fetchPaintings: 'fetchPaintings'
    }),
    onScroll() {
      this.isScrolling = window.pageYOffset > 50
    },
    setPicture(index) {
      this.picture = index
      this.$nextTick(() => (this.dialog = true))
    }
  }
}
</script>

<style lang="sass" />
