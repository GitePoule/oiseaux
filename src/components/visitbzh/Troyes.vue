<template>
    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        src="https://www.alaconquetedelest.fr/wp-content/uploads/2019/09/p9210122.jpg"
        cover
        >
        <v-card-title style="text-shadow: 1px 1px 2px black;"> Troyes </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
            Troyes, ville médiévale de l'Aube
        </v-card-subtitle>

        <v-card-text>
        <div>Troyes est célèbre pour ses maisons à pans de bois et ses rues pavées. Sa cathédrale gothique et ses nombreux musées en font une destination culturelle incontournable.</div>
        </v-card-text>

        <v-card-actions>
            <v-avatar image="https://www.ville-troyes.fr/wp-content/uploads/2019/06/logo_fond.png"></v-avatar>
            <v-btn color="primary" text="Voir le site" href="https://www.ville-troyes.fr/"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'Troyes',
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>