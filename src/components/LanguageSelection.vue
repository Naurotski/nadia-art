<template>
  <v-menu transition="slide-y-transition" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn active-class="primary--text" class="subtitle-1 ml-1" exact text v-on="on"
        >{{ $i18n.locale }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="item in languages" :key="item" @click="$i18n.locale = item">
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'LanguageSelection',
  data: () => ({
    languages: ['en', 'it']
  })
}
</script>

<style />
