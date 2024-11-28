<template>

<v-carousel
    height="100%"
    width="100%"
    hide-delimiter-background
    :show-arrows="false"
  >
    <v-carousel-item>
      <v-sheet color="blue" height="100%">
        <v-empty-state
          headline="Réserver votre logement"
          title=""
          :image="logoG2F"
        >
          <template v-slot:text>
            <v-btn>Réserver via Gites-De-France</v-btn>
          </template>
        </v-empty-state>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item>
      <v-sheet color="teal" height="100%">
        <v-empty-state
          headline="Bazoches-Lès-Bray"
          :image="logo77"
        >
          <template v-slot:text>
            <v-btn>Comment venir ?</v-btn>
          </template>
        </v-empty-state>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item>
      <v-sheet color="purple" height="100%">
        <v-empty-state
          headline="Préparer mon séjour"
          title=""
          :image="logoOdO"
        >
          <template v-slot:text>
            <v-btn>
               Découvrir mon logement
            </v-btn>
          </template>
        </v-empty-state>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item>
      <v-sheet color="red" height="100%">
        <v-empty-state
          headline="Préparer mon séjour"
          title=""
          icon="mdi-lightning-bolt"
          color="yellow"
        >
          <template v-slot:text>
            <v-btn>
               Découvrir les alentours 
            </v-btn>
          </template>
        </v-empty-state>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

</template>

<script>
    import welcomeImg from '@/assets/img/gites/home.jpg';
    import logoG2F from "@/assets/img/gites-de-france.png";
    import logo77 from "@/assets/img/logo_77.png";
    import logoOdO from "@/assets/img/IMG_20241128_234853.jpg'
    export default {
        name: 'Bienvenue',
        data: () => ({
          welcomeImg: welcomeImg,
          logoG2F: logoG2F,
          logo77: logo77,
          logoOdO: logoOdO,
        })
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>