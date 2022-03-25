<template>
  <v-footer class="justify-center" color="grey lighten-2" inset>
    <div class="text-center">
      <v-btn
        v-for="item in socialMedia"
        :key="item.path"
        :href="item.path"
        class="ma-1"
        icon
        target="_blank"
      >
        <v-icon v-text="item.icon" />
      </v-btn>
      <p class="caption">&copy; {{ date }} Naurotskaya Nadzeya</p>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'CoreFooter',

  data: () => ({
    date: new Date().getFullYear(),
    socialMedia: [
      { icon: 'mdi-facebook', path: 'https://www.facebook.com/Naurotskaya.ART' },
      { icon: 'mdi-instagram', path: 'https://instagram.com/art_navrotskaya?utm_medium=copy_link' }
    ]
  })
}
</script>
