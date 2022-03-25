<template>
  <v-app>
    <core-app-bar />
    <core-drawer />
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
  }
}
</script>
