<script setup>
  import { useTheme } from 'vuetify'
  const theme = useTheme()
  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
</script>
<template>
    <v-app-bar prominent >
      <div v-if="isMobile" style="color:teal; margin-left: 20px;">
        <v-icon icon="mdi-bird"></v-icon>
      </div>
      <div v-else>
        <v-app-bar-title>A l'Ombre des Oiseaux</v-app-bar-title>
      </div>
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