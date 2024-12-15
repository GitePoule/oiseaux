<template>

    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        src="https://live.staticflickr.com/8012/6989832318_e17b2c9375_b.jpg"
        cover
        >
        <v-card-title style="text-shadow: 1px 1px 2px black;"> Boucherie </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
        Boucherie de l'Hotel de Ville
        </v-card-subtitle>

        <v-card-text>
            Renommée pour son accueil chaleureux et ses produits de qualité. Les propriétaires, sympathiques et professionnels, proposent des viandes excellentes et des spécialités maison très appréciées, comme le boudin et les tripes.
            Nous vous recommandons ce commerce de proximité ouvert du mardi au samedi entre 08h30 et 13h00 ou 16h00 et 19h00.
        </v-card-text>

        <v-card-actions>
            <v-btn color="primary" text="Téléphoner" href="tel:0164002931"></v-btn>
            <v-btn color="primary" text="Voir sur Maps" href="https://maps.app.goo.gl/fEYTXqgYL2qz5Wda7"></v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
    export default {
      name: 'BrayBoucherie',
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>