<template>
    <v-card style="border-radius:0px;height:500px;max-height:20%;width:100%;">
        <v-carousel
            cycle
            :show-arrows="false"
            progress="teal"
            height="100%"
            width="100%"
        >  
            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
            ></v-carousel-item>
            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                cover
            ></v-carousel-item>
            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
            ></v-carousel-item>
      </v-carousel>
    </v-card>
  <div style="margin: 10px;">

    <br />
    <h3>Gîte "A l'ombre des oiseaux"</h3>
    <br />
    <p>Maison - Bazoches-Lès-Bray (77118)</p>
    <p>1 lit double - 2 lits simples</p>
    <br />

    <v-chip
      class="ma-2"
      color="indigo"
      href="https://www.gites-de-france.com/fr/ile-de-france/seine-et-marne/lombre-des-oiseaux-77g624#reviews"
      prepend-icon="mdi-star"
    >
    Avis et commentaires
    </v-chip>
    <br />

    <br /><v-divider></v-divider>
    <h3>Rez-de-chausée</h3>

    <br /><v-divider></v-divider>
    <h3>L'étage</h3>

    <br /><v-divider></v-divider>
    <h3>Les équipements du logement</h3>

    <br /><v-divider></v-divider>
    <h3>Petit guide pour le wifi</h3>

    <br /><v-divider></v-divider>
    <h3>Petit guide pour la télévision</h3>

    <br /><v-divider></v-divider>
    <h3>Jeux de société</h3>
    <p>Les jeux de société sont disponibles à la demande.</p>

    <br /><v-divider></v-divider>
    <h3>Jardin extérieur</h3>

    <br /><v-divider></v-divider>
    <h3>Règlement intérieur</h3>

    <br /><v-divider></v-divider>
    <h3>Sécurité du logement</h3>

</div>
</template>

<script>
    export default {
        name: 'Gite',
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>