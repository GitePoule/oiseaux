<template>
      <div id="map" style="height: 100%; position: relative;">
        <l-map v-model:zoom="zoom" :use-global-leaflet="false" :center="[48.39644, 3.17230]"
          >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base" name="OpenStreetMap"
          ></l-tile-layer>
          <l-marker :lat-lng="[48.39759, 3.18890]" ></l-marker>
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

            <v-btn prepend-icon="mdi-bowling" value="activity">
              Activités
            </v-btn>
            <v-btn prepend-icon="mdi-castle" value="chateaux">
              Châteaux
            </v-btn>
            <v-btn prepend-icon="mdi-cart-outline" value="commerces">
              Commerces
            </v-btn>
            <v-btn prepend-icon="mdi-walk" value="randonnees">
              Randonnées
            </v-btn>
            <v-btn prepend-icon="mdi-silverware-fork-knife" value="restos">
              Restaurants
            </v-btn>
            <v-btn prepend-icon="mdi-train" value="transports">
              Transports
            </v-btn>

          </v-btn-toggle>
        </v-card>
      </div>
</template>

<script>
    import "leaflet/dist/leaflet.css";
    import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
    export default {
        name: 'Carte',
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LIcon,
        },
        data: () => ({
            zoom: 12,
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
        })
};
</script>

<style scoped>
.map-button {
  z-index: 1000;
}
</style>