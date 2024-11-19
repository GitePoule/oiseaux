<template>
    <v-app-bar
      prominent
      >
        <v-app-bar-title>Découvrir les alentours</v-app-bar-title>
        <template v-slot:extension>
          <v-tabs
            align-tabs="center"
            stacked
            grow
            show-arrows
            >
                <v-tab href="#commerces">
                    <v-icon>mdi-baguette</v-icon>
                    Commerces
                </v-tab>
                <v-tab href="#bazoches">
                    <v-icon>mdi-walk</v-icon>
                    Proche de Bazoches
                </v-tab>
                <v-tab href="#villages">
                    <v-icon>mdi-map-marker-radius</v-icon>
                    Jolis villages
                </v-tab>
                <v-tab href="#villes">
                    <v-icon>mdi-castle</v-icon>
                    Villes historiques
                </v-tab>
                <v-tab href="#sports">
                    <v-icon>mdi-bike</v-icon>
                    Sport
                </v-tab>
            </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'AlentoursAppBar',
    data: () => {
        tab: null
    }
  }
</script>