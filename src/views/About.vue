<template>
  <v-container id="about" class="pa-0 grey lighten-3" fluid tag="section">
    <transition appear name="fadeGroup" mode="out-in">
      <v-row class="ma-0" no-gutters>
        <v-col cols="12" md="4">
          <v-img
            gradient="to top, rgba(0, 0, 0, .0), rgba(0, 0, 0, .0)"
            :src="require('@/assets/DSC09434-9.jpg')"
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
            <p class="text-justify" style="white-space: pre-line">
              {{ $t('about') }}
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
