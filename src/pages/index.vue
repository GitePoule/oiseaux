<template>
<div>

  <v-parallax :src="welcomeImg"></v-parallax>

  <v-timeline side="end">

    <v-timeline-item dot-color="primary" icon="mdi-calendar">
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Réserver votre séjour
        </v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item dot-color="primary" icon="mdi-train">
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Venir à Bazoches-Lès-Bray
        </v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
    </v-timeline-item>

  <v-timeline-item dot-color="primary" icon="mdi-map-marker-radius">
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Profitez sur place
        </v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
    </v-timeline-item>

  <v-timeline-item dot-color="primary" icon="mdi-lightning-bolt">
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Profitez aux alentours
        </v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>

</div>
</template>

<script>
    import welcomeImg from '@/assets/img/gites/home.jpg';
    export default {
        name: 'Bienvenue',
        data: () => ({
          welcomeImg: welcomeImg,
        })
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>