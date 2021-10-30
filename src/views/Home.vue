<template>
  <v-container id="home" class="pt-12 pb-0 px-0" fluid tag="section">
    <section id="intro" class="text-center mb-12">
      <h1 class="display-2 font-weight-light mb-8">The world's best artist</h1>

      <v-responsive class="mx-auto subtitle-1 grey--text" max-width="550">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam
        adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor
        fugit amet laboriosam.
      </v-responsive>
    </section>
    <Paintings />
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Paintings: () => import('@/components/Paintings')
  }
}
</script>
