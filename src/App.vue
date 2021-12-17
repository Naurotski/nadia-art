<template>
  <v-app>
    <core-app-bar />
    <core-drawer />
    <v-main>
      <router-view />
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
    title: 'Naurotskaya Nadzeya',
    titleTemplate: '%s | Naurotskaya Nadzeya',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content:
          'MetaMorfosi - виртуальное пространство психологических игр, погружения в бессознательное и арт-терапии. Психосоматика, психология отношений, мотивация, развитие творческого потенциала, раскрытие талантов, искусство.'
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
