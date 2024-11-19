<script setup>
  import { useTheme } from 'vuetify'
  const theme = useTheme()
  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
</script>

<template>  
<v-app>
    <v-layout>
      <v-app-bar prominent >
        <v-app-bar-title>A l'Ombre des Oiseaux</v-app-bar-title>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn @click="toggleTheme" icon>
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <LeftAndBottomNavigation />

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</v-app>
</template>

<script>
  import LeftAndBottomNavigation from '@/components/LeftAndBottomNavigation.vue';
  export default {
    data: () => ({}),
    components: {
      LeftAndBottomNavigation
    },
  };
</script>
