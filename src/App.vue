<template>
  <v-app>
    <core-app-bar :links="links" />
    <core-drawer :links="links" />
    <v-main>
      <router-view v-slot="{ Component }">
        <keep-alive :max="3">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <snackbars />
      <floating-button />
      <snackbar-service-worker />
    </v-main>
    <core-footer />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'Nadzeya Naurotskaya - Artist Gallery Shop',
    titleTemplate: '%s | Nadzeya Naurotskaya - Artist',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content:
          'Italy based artist - Double-sided images, stained glass, mosaics, sculpture - Art-objects «with a secret'
      }
    ]
  },
  components: {
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreFooter: () => import('@/components/core/Footer'),
    CoreAppBar: () => import('@/components/core/AppBar'),
    Snackbars: () => import('@/components/core/Snackbar'),
    FloatingButton: () => import('@/components/FloatingButton'),
    SnackbarServiceWorker: () => import('@/components/SnackbarServiceWorker')
  },
  computed: {
    links() {
      return [
        { link: this.$t('core.links.home'), path: '/' },
        { link: this.$t('core.links.about'), path: '/about' },
        { link: this.$t('core.links.gallery'), path: '/gallery' },
        { link: this.$t('core.links.shop'), path: '/shop' },
        { link: this.$t('core.links.contact'), path: '/contact' }
      ]
    }
  }
}
</script>
