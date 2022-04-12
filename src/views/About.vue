<template>
  <v-container id="about" class="pa-0 grey lighten-3" fluid tag="section">
    <transition appear name="fadeGroup" mode="out-in">
      <v-row class="ma-0" no-gutters>
        <v-col cols="12" md="4">
          <v-img
            gradient="to top, rgba(0, 0, 0, .0), rgba(0, 0, 0, .0)"
            :src="require('@/assets/IMG_3049.jpg')"
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
              Born in Belarus, Nadzeya has been living in Pisa (Italy) since 2017. Her professional
              route (medical psychology, psychotherapy and art therapy) has led Nadzeya to painting
              and photography and their limitless possibilities in understanding herself and the
              world around her.
            </p>
            <p class="text-justify">
              Nadzeya studied drawing at Accademia d'arte di Pisa (class of Prof. Bruno Pollacci).
              Traditional paintings on canvas, followed by the study of stained glass and mosaics.
              Today, Nadzeya's works are art objects made in mixed techniques.
            </p>
            <p class="text-justify">
              Today, the artist's attention is focused on double-sided paintings "with a secret."
              Nadzeya spent her childhood in the Soviet Union. At that time, a children's game
              "secrets" was popular. It was almost a ritual: to dig a small hole, hide a “treasure”
              (a button, really beautiful pebble or flower, a piece of foil or a colored picture),
              to cover it with transparent bottle glass, sprinkle it with ground, remember this
              place. In order to come there later, dig out the "secret" and admire without telling
              others. Adults, in the life behind the Iron Curtain, and then in dictatorial Belarus,
              have always had a secret. However, this secret is of the opposite nature. A beautiful
              picture outside and terrifying secrets inside ...
            </p>
            <p class="text-justify">
              So, this is the way it works with the paintings “with a secret”. On the front side,
              there’s a painting, familiar to the eye of a layperson. Clear colors, easy to see
              people, nature, architecture. Simple, rather even primitive, naive creativity. Each
              painting has a little glass window. A window which you can look into and see what is
              there, "on the other side." On the inside, hidden from prying eyes. What are the
              secrets?
            </p>
            <p class="text-justify">
              Nadzeya's double-sided paintings and art objects also embody the global concept of
              double reality. It is difficult to imagine anything behind this materialistic world,
              where people are accustomed to see only what is shown to them. But look at this piece
              of colored glass just for a few seconds. That's enough. You are already there. The
              only thing you need is to turn the picture around, to turn its another side – here it
              is, your rabbit hole. And you will never forget this experience.
            </p>
            <p class="text-justify">
              What creates such a powerful effect? The very personality of the author. The artist
              knows exactly how to see more in everyone and everything. And her paintings are
              inviting you to discover for yourself – who are we?
            </p>
            <p>
              Exhibitions and catalogues <br />
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
              November 2018 - collective exhibition «Preziosità d'Italia» (Calcinaia (PI), Italy)
              <br />
              <br />
              Catalogues: <br />
              ARTNow - May-June, 2020 <br />
              Artisticamente n° 3 - Rome, 2018
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
