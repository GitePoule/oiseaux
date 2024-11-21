<template>
      <div id="map" style="height: 100%; position: relative;">
        <l-map v-model:zoom="zoom" :use-global-leaflet="false" :center="[48.39644, 3.17230]"
          >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base" name="OpenStreetMap"
          ></l-tile-layer>
        </l-map>
        <v-card class="map-button" style="position: absolute; top: 10px; left: 15%; right: 15%; width: 70%;">
          <v-btn-toggle
            v-model="toggle_multiple"
            background-color="primary"
            dark
            multiple
          >
            <v-btn prepend-icon="mdi-castle">Châteaux</v-btn>
            <v-btn>
              <v-icon>mdi-format-italic</v-icon>
            </v-btn>
            <v-btn>
              <v-icon>mdi-format-color-fill</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-card>
      </div>
</template>

<script>
    import "leaflet/dist/leaflet.css";
    import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
    export default {
        name: 'Carte',
        components: {
            LMap,
            LTileLayer,
        },
        data() {
            return {
                zoom: 12,
            };
        },
    };
</script>

<style scoped>
.map-button {
  z-index: 1000; /* Assurez-vous que les boutons sont au-dessus de la carte */
}
</style>