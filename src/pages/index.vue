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
          title="Via la plateforme Gites de France"
          :image="logoG2F"
        >
          <template v-slot:text>
            <v-btn>Réserver</v-btn>
          </template>
        </v-empty-state>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item>
      <v-sheet color="teal" height="100%">
        <v-empty-state
          headline="Venir à Bazoches-Lès-Bray"
          :image="logo77"
        >
          <template v-slot:text>
            <v-btn>Voir les itinéraires</v-btn>
          </template>
        </v-empty-state>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item>
      <v-sheet color="purple" height="100%">
        <v-empty-state
          headline="Préparer mon séjour"
          title="En savoir plus sur mon logement"
          icon="mdi-toothbrush"
        >
          <template v-slot:text>
            <v-btn>Voir les équipements</v-btn>
          </template>
        </v-empty-state>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item>
      <v-sheet color="red" height="100%">
        <v-empty-state
          headline="Préparer mon séjour"
          title="Des activités pour tous les goûts !"
          icon="mdi-lightning-bolt"
          color="yellow"
        >
          <template v-slot:text>
            <v-btn>Voir les itinéraires</v-btn>
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
    export default {
        name: 'Bienvenue',
        data: () => ({
          welcomeImg: welcomeImg,
          logoG2F: logoG2F,
          logo77: logo77,
        })
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>