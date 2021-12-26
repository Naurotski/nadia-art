<template>
  <v-container id="about" class="pa-0" fluid tag="section">
    <transition appear name="fadeGroup" mode="out-in">
      <v-row class="ma-0" no-gutters>
        <v-col cols="12" md="4">
          <v-img
            gradient="to top, rgba(0, 0, 0, .0), rgba(0, 0, 0, .0)"
            :src="require('@/assets/IMG_3049.jpg')"
          />
        </v-col>
        <v-col class="d-block d-md-flex align-center grey lighten-3 pa-6" cols="12" md="8">
          <v-responsive class="mx-auto px-3 px-md-12">
            <h1
              style="color: black; white-space: pre-line"
              class="mb-6"
              :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'"
            >
              Nadzeya Naurotskaya <br />
            </h1>
            <p>was born in Belarus and since 2017 lives in Pisa (Italy).</p>
            <p>
              It was art therapy that led to painting and photography. Studied drawing at Accademia
              d’arte di Pisa (Professor Bruno Pollacci&#39;s class). Traditional paintings on canvas
              and graphic drawings were soon supplemented by work on stained glass.
            </p>
            <p>
              Her paintings are like entrances to parallel worlds. They are for those who knows: the
              world is not enough. There are other spaces where we live right now. Where we live a
              different life. And we can transfer between these worlds. What for? To have other
              experience of ourselves, to open the mind, to expand the consciousness.
            </p>
            <p>
              Everything starts from acrylic one day, then - oil, a bit later comes to oil canvases
              with built-in glass. Vital brushstroke and bold colors create memorable images. They
              seem to be both familiar and unexplored, vivid and intimate, something that you easily
              identify but it remains mysterious.
            </p>
            <p>
              Nadzeya&#39;s double-sided paintings embody the concept of dual reality in it&#39;s
              best way. Even if it&#39;s hard for one to imagine something behind this materialistic
              world - just take a look at these small pieces of stained glass. It&#39;s enough, you
              are already there. Just turn a picture to the other side and you are in a rabbit-hole.
              Everything is possible there, everything is allowed.
            </p>
            <p>
              It&#39;s an incredible and unforgettable experience. Mostly because of the
              author&#39;s background - Nadezhda is an art therapist with more than 20 year
              practice. She knows how to see more in everybody and everything. Her paintings are
              invitations to find out - who we are?
            </p>
            <p>
              Выставки и каталоги <br />
              август 2021 - виртуальная выставка белорусского современного искусства «2020», <br />
              виртуальная галерея Европейского Гуманитарного университета (Вильнюс, Литва)<br />
              июль 2020 - пленэр и выставка “Il balletto” (Нерви, Генуя, Италия)<br />
              октябрь 2019 - пленэр и выставка «La bellezza del tempo 2» (Нерви, Генуя, Италия)<br />
              июль 2019 - пленэр и выставка «NERVI. En PLEIN AIR» (Нерви, Генуя, Италия)<br />
              ноябрь 2018 - коллективная выставка «Preziosità d’Italia» (Calcinaia (PI), Италия)<br />
              Каталоги:<br />
              ARTNow – май-июнь, 2020<br />
              Artisticamente n°3 - Roma, 2018
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
    title: 'About Me',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem cupiditate dignissimos dolor esse ex nostrum porro quaerat rerum tempore.'
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
