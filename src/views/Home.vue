<template>
  <div style="height: 100vh">
    <transition appear name="fadeGroup" mode="out-in">
      <v-img class="studios" :src="backgroundUrl" :key="backgroundUrl"></v-img>
    </transition>
  </div>
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
    backgroundUrl:
      'https://firebasestorage.googleapis.com/v0/b/first-project-6daea.appspot.com/o/paintinds%2F-LwVO3RdQAoakK_Me6z5?alt=media&token=d702f715-0cca-4e23-bf94-98c897cc908a'
  }),
  computed: {
    ...mapState(['paintings']),
    carouselFilter() {
      return this.paintings.filter((elem) => elem.promo)
    }
  },
  created() {
    if (!this.paintings.length) this.fetchPaintings()
    let counter = -1
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
    ...mapActions(['fetchPaintings'])
  }
}
</script>
<style scoped lang="sass">
.studios
  position: fixed
  height: 100%
  width: 100%
</style>
