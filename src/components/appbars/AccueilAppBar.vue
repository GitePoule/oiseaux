<script setup>
  import { useTheme } from 'vuetify'
  const theme = useTheme()
  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
</script>
<template>
    <v-app-bar prominent >
      <v-app-bar-title v-if="!isMobile">A l'Ombre des Oiseaux</v-app-bar-title>
      <v-app-bar-title v-if="isMobile"><v-icon icon="mdi-bird" style="color:teal;"></v-icon></v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn @click="toggleTheme" icon>
          <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
</template>
<script>
  export default {
    name: 'AccueilAppBar',
    data: () => ({
      isMobile: false,
    }),
    mounted() {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        this.isMobile = window.innerWidth <= 768;
      }
    },
  }
</script>