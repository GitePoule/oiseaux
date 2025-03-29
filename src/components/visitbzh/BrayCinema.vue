<template>

    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        :src="imgCine"
        cover
        >
        <v-card-title style="text-shadow: 1px 1px 2px black;"> Cinéma Renaissance </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
        Salle indépendante associative de Bray Sur Seine
        </v-card-subtitle>

        <v-card-text>
        <div>Charmant petit cinéma tenu par des bénévoles, vous proposant les meilleurs films récemment sortis au cinéma, avec un léger déphasage par rapport aux plus grosses salles. Parfait pour compenser un rendez-vous manqué avec un film.</div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="primary" text="Voir l'affiche" href="https://www.bray-sur-seine.fr/programme-de-votre-cinema-le-renaissance-de-bray-sur-seine/"></v-btn>
            <v-btn color="primary" text="Voir sur Maps" href="https://maps.app.goo.gl/HmhM7RtJD4wZqNKJ8"></v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
    import imgCine from '@/assets/img/renaissance.png';

    export default {
      name: 'BrayCinema',
      data: () => ({
        imgCine: imgCine,
      }),
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>