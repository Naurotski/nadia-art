<template>
  <transition appear name="fadeGroup" mode="out-in">
    <v-img class="studios" :src="backgroundUrl" :key="backgroundUrl"></v-img>
  </transition>

  <!--  <v-container  fluid>-->
  <!--    id="home" class="pt-12 pb-0 px-0"  tag="section"-->
  <!--    <section id="intro" class="text-center mb-12">-->
  <!--      <h1 class="display-2 font-weight-light mb-8">The world's best artist</h1>-->

  <!--      <v-responsive class="mx-auto subtitle-1 grey&#45;&#45;text" max-width="550">-->
  <!--        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam-->
  <!--        adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor-->
  <!--        fugit amet laboriosam.-->
  <!--      </v-responsive>-->
  <!--  </v-container>-->
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  data: () => ({
    painting: null,
    timer: null,
    backgroundUrl: null
  }),
  computed: {
    ...mapState(['paintings']),
    carouselFilter() {
      return this.paintings.filter((elem) => elem.promo)
    }
  },
  created() {
    if (!this.paintings.length) {
      this.getPaintings().then(() => (this.backgroundUrl = this.carouselFilter[0].imageSrc))
    } else {
      this.backgroundUrl = this.carouselFilter[0].imageSrc
    }
    let counter = 0
    this.timer = setInterval(() => {
      this.$forceUpdate()
      if (++counter >= this.carouselFilter.length) counter = 0
      this.backgroundUrl = this.carouselFilter[counter].imageSrc
    }, 5000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    ...mapActions(['getPaintings'])
  }
}
</script>
<style scoped lang="sass">
.studios
  position: fixed
  background-size: cover
  height: 100%
  width: 100%
.fadeGroup-enter-active, .fadeGroup-leave-active
  transition: opacity 2s
.fadeGroup-enter, .fadeGroup-leave-to
  opacity: 0
</style>
