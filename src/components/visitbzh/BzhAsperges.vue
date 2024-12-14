<template>

    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        src="https://champ-ramard.fr/assets/images/apserges_blanches.jpg"
        cover
        >
        <v-card-title style="text-shadow: 1px 1px 2px black;"> Ferme Champ-Ramard </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
        Les asperges et les fraises du printemps
        </v-card-subtitle>

        <v-card-text>
        <div>D'avril jusqu'à juin, profitez des asperges et des fraises bios de la ferme située à quelques pas de votre gîte.</div>
        </v-card-text>

        <v-card-actions>
        <v-btn color="orange" text="Voir le site" href="https://champ-ramard.fr"></v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
    export default {
        name: 'BzhAsperges',
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>