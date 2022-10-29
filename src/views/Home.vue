<template>
  <div style="height: 100vh">
    <transition appear name="fadeGroup" mode="out-in">
      <!--      <v-img class="studios" :src="backgroundUrl" :key="backgroundUrl"></v-img>-->
      <v-img class="studios" :src="require('@/assets/blackMoon2.jpg')" />
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
  <!--  <div style="height: 80vh; background-color: #bdbdbd">-->
  <!--    <video preload="auto" muted autoplay loop width="100%" height="100%">-->
  <!--      <source src="IMG_783.mp4" />-->
  <!--      Sorry, your browser doesn't support embedded videos.-->
  <!--    </video>-->
  <!--  </div>-->
</template>

<script>
// import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  metaInfo: {
    title: 'Nadzeya Naurotskaya - Artist Gallery Shop',
    titleTemplate: null,
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content:
          'Italy based artist - Double-sided images, stained glass, mosaics, sculpture - Art-objects «with a secret»'
      }
    ]
  }
  // data: () => ({
  //   painting: null,
  //   timer: null,
  //   backgroundUrl:
  //     'https://firebasestorage.googleapis.com/v0/b/first-project-6daea.appspot.com/o/paintinds%2F-Mycj0hSYuN7gY4B4WNb?alt=media&token=77814594-32cc-4598-970f-6674badeb91e'
  // }),
  // computed: {
  //   ...mapState(['paintings']),
  //   carouselFilter() {
  //     return this.paintings.filter((elem) => elem.promo)
  //   }
  // },
  // created() {
  //   if (!this.paintings.length) this.fetchPaintings()
  //   let counter = 0
  //   this.timer = setInterval(() => {
  //     if (++counter >= this.carouselFilter.length) counter = 0
  //     this.backgroundUrl = this.carouselFilter[counter].imageSrc
  //   }, 8000)
  // },
  // beforeDestroy() {
  //   clearInterval(this.timer)
  // },
  // methods: {
  //   ...mapActions(['fetchPaintings'])
  // }
}
</script>
<style scoped lang="sass">
.studios
  position: fixed
  height: 100%
  width: 100%
</style>
