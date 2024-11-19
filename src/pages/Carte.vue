<template>
  <div style="height:100%; width:100%">
    <l-map ref="map" v-model:zoom="zoom" :use-global-leaflet="false" :center="[48.39644, 3.17230]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
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
/* Ajoutez vos styles ici */
</style>