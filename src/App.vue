<template>
  <v-app>
    <core-app-bar />
    <core-drawer />
    <v-main>
      <router-view />
      <Snackbars />
    </v-main>
    <core-footer />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreFooter: () => import('@/components/core/Footer'),
    CoreAppBar: () => import('@/components/core/AppBar'),
    Snackbars: () => import('@/components/core/Snackbar')
    // CoreView: () => import('@/components/core/View')
  },
  data: () => ({
    //
  })
}
</script>
