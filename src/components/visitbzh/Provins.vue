<template>
    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        :src="imgTour"
        cover
        >
        <v-card-title style="text-shadow: 1px 1px 2px black;"> Provins </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
            Provins, ville médiévale de Seine-et-Marne
        </v-card-subtitle>

        <v-card-text>
        <div>Provins est inscrite au patrimoine mondial de l'UNESCO. Ses remparts, ses tours et ses spectacles médiévaux en font une destination historique unique.</div>
        </v-card-text>
        <v-card-actions>
            <v-avatar image="https://mairie-provins.fr/wp/wp-content/uploads/2021/11/logo-ville.png"></v-avatar>
            <v-btn color="primary" text="Voir le site" href="https://provins.net/"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import imgTour from '@/assets/img/provins-vue-roseraie.jpg';
    export default {
        name: 'Provins',
        data: () => ({
            imgTour: imgTour,  
        })
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>