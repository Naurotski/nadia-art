<template>
  <v-container id="about" class="pa-0 grey lighten-3" fluid tag="section">
    <transition appear name="fadeGroup" mode="out-in">
      <v-row class="ma-0" no-gutters>
        <v-col cols="12" md="4">
          <v-img
            gradient="to top, rgba(0, 0, 0, .0), rgba(0, 0, 0, .0)"
            :src="require('@/assets/IMG_8783.jpeg')"
          />
        </v-col>
        <v-col class="d-block d-md-flex align-center pa-6" cols="12" md="8">
          <v-responsive class="mx-auto px-3 px-md-12">
            <h1
              style="color: black; white-space: pre-line"
              class="mb-6"
              :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'"
            >
              Nadzeya Naurotskaya <br />
            </h1>
            <p class="text-justify">
              A self-taught artist. She left a successful career of a psychotherapist, osteopath and
              homeopath and gradually focused exclusively on art. She first mastered painting and
              photography on her own, then it was working with glass, mosaics and sculpture. The
              works are increasingly dominated by mixed media art technique that shows the search
              for a way to reflect the world seen by the artist. Glass and cement are embedded in
              canvases, portal paintings and portal sculptures appear. The works seem to lead to
              other realities. <br />“I’m getting to understand more and more that the words
              invented by people are too poor to reflect sensory experience. Only through images,
              colors, lines and elusive invisible spirit can one convey their experience. I am
              completely disappointed in psychotherapy – it's like an artificial attempt to
              manipulate the deep. Art has a much deeper and more healing effect.” <br />Hidden
              worlds break through the artist's works into our visible life: through vibrating
              brushstrokes, trembling images, through stained glass, through mosaics left in parks
              and on paths that evoke the feeling of a “break” in reality. <br />Digital
              technologies make it possible to make the picturesque fluidity of paintings almost
              tangible, that’s why many works are also becoming NFT digital objects. <br />“I am
              obsessed with the desire to depict the worlds which surround me and which I see.
              Whenever I manage to transfer a parallel reality into this one, I feel deep
              satisfaction, as if I managed to create a bridge between that world and this one. This
              is the feeling of incredible pleasure.”
            </p>
            <p>
              Exhibitions and catalogues <br />
              <br />
              May 2022 - collective exhibition «Ukraine and Russia, the Art for Freedom» (Pisa,
              Italy)
              <br />
              February 2022 – virtual exhibition «Gubbio With Love», Associazione culturale La
              Medusa, Italia <br />
              October 12 - November 11 2021 - Intimists 9 «Wonderful world», La Fenice Art Gallery
              (Hong Kong) <br />
              August 2021 - virtual exhibition of Belarusian contemporary art «2020», online gallery
              of the European Humanities University (Vilnius, Lithuania) <br />
              July 2020 - plein air and exhibition «Il balletto» (Nervi, Genoa, Italy) <br />
              October 2019 - plein air and exhibition «La bellezza del tempo 2» (Nervi, Genoa,
              Italy) <br />
              July 2019 - plein air and exhibition «NERVI. En PLEIN AIR» (Nervi, Genoa, Italy)
              <br />
              May 2019 - collective exhibition of botanical photography Fito-Photo 2019 (Botanical
              ointment of Pisa, Italy)
              <br />
              November 2018 - collective exhibition «Preziosità d'Italia» (Calcinaia (PI), Italy)
              <br />
              <br />
              Catalogues: <br />
              ARTNow - May-June, 2020 <br />
              Artisticamente n° 3 - Rome, 2018
              <br /><br />
              Press
              <br />
              <a
                href="https://www.lanazione.it/pisa/cronaca/ucraini-e-russi-arte-insieme-1.7671844?fbclid=IwAR3_RUWyGxKFoZ1tBlWwkG56PP1mBKSZqCaedxgHWMBgexDglvI5AvsHskg"
                target="_blank"
                >lanazione.it</a
              >
            </p>
          </v-responsive>
        </v-col>
      </v-row>
    </transition>
  </v-container>
</template>
<script>
export default {
  name: 'About',
  metaInfo: {
    title: 'Bio',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content:
          'Born in Belarus, Nadzeya Naurotskaya Italy base artist. Contemporary art as a possibility to understand human nature and the world around. Artist of freedom'
      }
    ]
  }
}
</script>

<style lang="sass">
.signature
  font-family: 'Cedarville Cursive', cursive !important
  font-size: 2rem
  font-style: italic
</style>
