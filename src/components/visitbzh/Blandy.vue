<template>

    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        src="@/assets/img/blandy.jpg"
        cover
        >
        <v-card-title> Blandy les Tours </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
        Chateau fortifié
        </v-card-subtitle>

        <v-card-text>
        <div>Le Château de Blandy-les-Tours est une forteresse médiévale impressionnante avec ses tours imposantes et ses douves. Restauré avec soin, il offre un aperçu fascinant de l'architecture défensive du Moyen Âge et accueille régulièrement des expositions et des événements culturels.</div>
        </v-card-text>

        <!--<v-card-actions>
        <v-btn color="orange" text="Voir le site" href="https://champ-ramard.fr"></v-btn>
        </v-card-actions>-->
    </v-card>

</template>

<script>
    export default {
        name: 'Blandy',
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>