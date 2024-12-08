<template>

    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        src="https://www.chateaudefontainebleau.fr/wp-content/uploads/2019/12/fontainebleau.rec.faire-savoir.com-grand-parterre--jerome-schwab-5-scaled.jpg"
        cover
        >
        <v-card-title> Fontainebleau </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
        Ville et Chateau de Fontainebleau
        </v-card-subtitle>

        <v-card-text>
        <div>La ville de Fontainebleau, située en Île-de-France, est célèbre pour son château majestueux, résidence des rois de France. Le Château de Fontainebleau, avec ses somptueux jardins et sa riche histoire, attire des visiteurs du monde entier. La ville elle-même offre un charme provincial, avec ses rues pavées, ses boutiques pittoresques et ses restaurants accueillants. Les amateurs d'art et d'histoire y trouvent un véritable trésor culturel, tandis que les amoureux de la nature peuvent explorer la magnifique forêt environnante.</div>
        </v-card-text>

        <v-card-actions>
            <v-avatar icon="mdi-castle"></v-avatar>
            <v-btn color="primary" text="Voir le site" href="https://www.chateaudefontainebleau.fr"></v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
    export default {
        name: 'BleauCastle',
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>