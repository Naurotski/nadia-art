<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card>
        <v-img
          :class="{
            'v-image--hovered': hover
          }"
          :src="src"
          height="350"
        />
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: 'GalleryCard',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
.v-image
  .v-image__image
    transition: .3s ease

  &.v-image--hovered .v-image__image
    transform: scale(1.2)
</style>
