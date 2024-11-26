<template>
      <div id="map" style="height: 100%; position: relative;">
        <l-map v-model:zoom="zoom" :use-global-leaflet="false" :center="[48.39644, 3.17230]"
          >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base" name="OpenStreetMap"
          ></l-tile-layer>
          <l-marker :lat-lng="[48.39759, 3.18890]" >
            <l-icon :icon-url="logoG2F" :icon-size="[25, 25]"></l-icon>
          </l-marker>
          <div v-for="marker in markers" :key="marker.id">
            <l-marker :lat-lng="marker.coord" v-if="toggle_multiple.includes(marker.categ)" >
              <l-icon
                  
                  icon-url="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png">
              </l-icon>
            </l-marker>
          </div>
        </l-map>
        <v-card class="map-button" style="position: absolute; top: 10px; left: 15%; right: 15%; width: 70%;">
          <v-btn-toggle
            v-model="toggle_multiple"
            background-color="primary"
            dark
            multiple
            style="overflow-x:auto; white-space: nowrap;"
          >
            <v-btn value="activity">
              <v-icon style="margin-right: 5px;">mdi-bowling</v-icon>
              <span v-if="!isMobile">Activités</span>
            </v-btn>
            <v-btn value="chateaux">
              <v-icon style="margin-right: 5px;">mdi-castle</v-icon>
              <span v-if="!isMobile">Châteaux</span>
            </v-btn>
            <v-btn value="commerces">
              <v-icon style="margin-right: 5px;">mdi-cart-outline</v-icon>
              <span v-if="!isMobile">Commerces</span>
            </v-btn>
            <v-btn value="randonnees">
              <v-icon style="margin-right: 5px;">mdi-walk</v-icon>
              <span v-if="!isMobile">Randonnées</span>
            </v-btn>
            <v-btn value="restos">
              <v-icon style="margin-right: 5px;">mdi-silverware-fork-knife</v-icon>
              <span v-if="!isMobile">Restaurants</span>
            </v-btn>
            <v-btn value="transports">
              <v-icon style="margin-right: 5px;">mdi-train</v-icon>
              <span v-if="!isMobile">Transports</span>
            </v-btn>

          </v-btn-toggle>
        </v-card>
      </div>
</template>

<script>
    import "leaflet/dist/leaflet.css";
    import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
    import logoG2F from "@/assets/img/gites-de-france.png";

    export default {
        name: 'Carte',
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LIcon,
        },
        data: () => ({
            logoG2F:logoG2F,
            zoom: 12,
            isMobile: false,
            toggle_multiple: [],
            markers: [
                  {
                    "id": "essai",
                    "categ": "activity",
                    "name": "Essai",
                    "coord": [48.1759, 3.18890],
                  },
                  {
                    "id": "essai2",
                    "categ": "activity",
                    "name": "Essai",
                    "coord": [48.39759, 3.18990],
                  },
            ],
            hiddenMarkers: {}
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
};
</script>

<style scoped>
.map-button {
  z-index: 1000;
}
</style>