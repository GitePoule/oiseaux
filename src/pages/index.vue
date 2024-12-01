<template>
  <div height="100%">
    <v-carousel
    hide-delimiter-background
    :show-arrows="false"
    :height="carouselHeight"
  >
    <v-carousel-item :src="imgBack1" cover>
      <v-sheet
        class="pa-4 align-center text-center mx-auto"
        color="transparent"
      >
        <v-img :src="logoG2F" height="200px" style="margin-top: 5%"></v-img>
        <h2 class="text-h4 mb-6" style="color: white; text-shadow: 2px 3px 2px black; ">
          Réserver votre séjour via Gites-De-France
        </h2>
        <p class="mb-4 text-medium-emphasis text-body-2">
          <v-btn>Réserver</v-btn>
        </p>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item :src="imgBack2" cover>
      <v-sheet
        class="pa-4 align-center text-center mx-auto"
        color="transparent"
      >
        <v-img :src="logo77" height="200px" style="margin-top: 5%"></v-img>
        <h2 class="text-h4 mb-6" style="color: white; text-shadow: 2px 3px 2px black; ">
          Se rendre à Bazoches-Lès-Bray
        </h2>
        <p class="mb-4 text-medium-emphasis text-body-2">
          <v-btn>Découvrir les itinéraires</v-btn>
        </p>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item :src="imgBack3" cover>
      <v-sheet
        class="pa-4 align-center text-center mx-auto"
        color="transparent"
      >
        <v-img :src="logoOdO" height="200px" style="margin-top: 5%"></v-img>
        <h2 class="text-h4 mb-6" style="color: white; text-shadow: 2px 3px 2px black; ">
          Préparer mon séjour
        </h2>
        <p class="mb-4 text-medium-emphasis text-body-2">
          <v-btn>Découvrir mon logement</v-btn>
        </p>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item :src="imgBack4" cover>
      <v-sheet
        class="pa-4 align-center text-center mx-auto"
        color="transparent"
      >
      <v-img :src="logoOdO" height="200px" style="margin-top: 5%"></v-img>
       <h2 class="text-h4 mb-6" style="color: white; text-shadow: 2px 3px 2px black; ">
          Préparer mon séjour
        </h2>
        <p class="mb-4 text-medium-emphasis text-body-2">
          <v-btn prepend-icon="mdi-lightning-bolt">Découvrir les alentours</v-btn>
        </p>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
    import welcomeImg from '@/assets/img/gites/home.jpg';
    import logoG2F from "@/assets/img/gites-de-france.png";
    import logo77 from "@/assets/img/logo_77.png";
    import logoOdO from "@/assets/img/IMG_20241128_234853.jpg";
    import imgBack1 from "@/assets/img/gites/int3.jpg";
    import imgBack2 from "@/assets/img/photo-vtt-bassée.jpg";
    import imgBack3 from "@/assets/img/gites/home.jpg";
    import imgBack4 from "@/assets/img/canal.jpg";    

    export default {
        name: 'Bienvenue',
        data: () => ({
          welcomeImg: welcomeImg,
          logoG2F: logoG2F,
          logo77: logo77,
          logoOdO: logoOdO,
          imgBack1: imgBack1,
          imgBack2: imgBack2,
          imgBack3: imgBack3,
        }),
        computed: {
    carouselHeight() {
      var toolbarHeight = 64;
      if (window.innerWidth <= 768) {
         toolbarHeight = 128;
      }
      return `calc(100vh - ${toolbarHeight}px)`;
    },
  },
    };
</script>

<style scoped>
.v-carousel {
  height: 100vh;
  width: 100vw;
}
</style>