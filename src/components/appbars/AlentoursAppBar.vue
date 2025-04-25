<template>
    <v-app-bar
      prominent
      >
        <v-app-bar-title>
            <v-icon icon="mdi-bird" v-if="isMobile" style="color:teal; margin-right: 10px;"></v-icon>
            Découvrir les alentours
        </v-app-bar-title>
        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            align-tabs="center"
            stacked
            grow
            show-arrows
            >
            <v-tab
                v-for="(tab, index) in tabs"
                :key="index"
                :href="tab.href"
                style="font-size: small; color: teal;"
              >
                <v-icon>{{ tab.icon }}</v-icon>
                {{ tab.label }}
              </v-tab>
            </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'AlentoursAppBar',
    data: () => ({
        tabs: [
          { href: '#commerces', icon: 'mdi-baguette', label: 'Faire les courses' },
          { href: '#bazoches', icon: 'mdi-walk', label: 'Proche de Bazoches' },
          { href: '#musees', icon: 'mdi-palette', label: 'Musées' },
          { href: '#villages', icon: 'mdi-map-marker-radius', label: 'Jolis villages' },
          { href: '#villes', icon: 'mdi-castle', label: 'Villes historiques' },
          { href: '#restos', icon: 'mdi-silverware-fork-knife', label: 'Restaurants' },
          { href: '#sports', icon: 'mdi-bike', label: 'Promenade & sport' }
        ],
        tab: null,
        isMobile: false,
    }),
    mounted() {
      this.tab = this.tabs.findIndex(tab => tab.href === window.location.hash);
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