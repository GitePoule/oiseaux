<template>

    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        src="https://latribudanaximandre.files.wordpress.com/2020/05/moret-sur-loing-au-bord-de-leau-vue-classique-copie.jpg?w=1200&h=800"
        cover
        >
        <v-card-title style="text-shadow: 1px 1px 2px black;"> Moret sur Loing </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
            Parmi les plus beaux villages et détours de France
        </v-card-subtitle>

        <v-card-text>
            Moret-sur-Loing est un charmant village français situé en Seine-et-Marne, connu pour son patrimoine historique, ses paysages pittoresques le long du Loing, et son ambiance paisible. Les visiteurs apprécient ses ruelles médiévales, ses maisons anciennes et ses activités nautiques.
        </v-card-text>

        <v-card-actions>
            <v-btn color="primary" text="Voir le site" href="https://moretloingetorvanne.fr"></v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
    export default {
        name: 'MoretSurLoing',
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>