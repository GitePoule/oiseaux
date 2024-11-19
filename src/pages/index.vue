<script setup>
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
</script>

<template>
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

      <div>
        <div v-if="isMobile">
          <v-bottom-navigation
            v-model="idxSelMainMenuItem"
            color="teal"
            grow
          >
            <v-btn v-for="(item, index) in mainMenuItem" :key="index">
              <v-icon>{{ item.icon }}</v-icon>{{ item.title }}
            </v-btn>
          </v-bottom-navigation>

        </div>
        <div v-else>
          <v-navigation-drawer permanent >
            <v-list nav>
              <v-list-item v-for="(item, index) in mainMenuItem"
                :key="index"
                :prepend-icon="item.icon"
                :title="item.title"
                :value="item.value"
                @click="selMainMenuItem = item">
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

        </div>
      </div>

    <v-main style="height: 400px"></v-main>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      isMobile: false,
      idxSelMainMenuItem: 0,
      selMainMenuItem: {
          icon: 'mdi-home-group',
          title: 'Destination Bazoches',
          value: 'home',
      },
      mainMenuItem: [
        {
          icon: 'mdi-home-group',
          title: 'Destination Bazoches',
          value: 'home',
        },
        {
          icon: 'mdi-home-map-marker',
          title: 'Votre gîte',
          value: 'gite',
        },
        {
          icon: 'mdi-lightning-bolt ',
          title: 'Découvrir les alentours',
          value: 'alentours',
        }
      ],
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
    watch: {
      selMainMenuItem(newValue) {
        this.idxSelMainMenuItem = this.mainMenuItem.indexOf(newValue);
      },
      idxSelMainMenuItem(newValue) {
        this.selMainMenuItem = this.mainMenuItem[newValue];
      }
    }
  }
</script>