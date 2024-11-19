<template>
  <div>
    <div v-if="isMobile">
      <v-bottom-navigation
        v-model="idxSelMainMenuItem"
        color="teal"
        grow
      >
        <v-btn v-for="(item, index) in mainMenuItem" :key="index" :to="item.value">
            <v-icon>{{ item.icon }}</v-icon>{{ item.title }}
        </v-btn>
      </v-bottom-navigation>
    </div>
    <div v-else>
      <v-navigation-drawer expand-on-hover permanent rail>
        <v-list dense>
          <v-list-item
            prepend-icon="mdi-bird"
            title="">
          </v-list-item>
        </v-list>
        <v-list nav dense>
          <v-list-item v-for="(item, index) in mainMenuItem"
            :key="index"
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.value"
            :to="item.value"
            @click="selMainMenuItem = item">
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LeftAndBottomNavigation',
    data: () => ({
      isMobile: false,
      idxSelMainMenuItem: 0,
      selMainMenuItem: {
          icon: 'mdi-home-group',
          title: 'Bienvenue',
          value: ''
      },
      mainMenuItem: [
        {
          icon: 'mdi-home-group',
          title: 'Bienvenue',
          value: '/',
        },
        {
          icon: 'mdi-home-map-marker',
          title: 'Votre gîte',
          value: 'gite',
        },
        {
          icon: 'mdi-map',
          title: 'La carte',
          value: 'carte',
        },
        {
          icon: 'mdi-lightning-bolt ',
          title: 'Aux alentours',
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
    },
  }
</script>
