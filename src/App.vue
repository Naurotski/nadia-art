<template>
  <v-app>
    <core-app-bar />
    <core-drawer />
    <v-main>
      <router-view />
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
    CoreAppBar: () => import('@/components/core/AppBar')
    // CoreView: () => import('@/components/core/View')
  },
  data: () => ({
    //
  })
}
</script>
