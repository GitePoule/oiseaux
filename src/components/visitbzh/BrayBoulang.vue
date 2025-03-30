<template>

    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        src="https://www.terroirettraditions.net/wp-content/uploads/2019/06/baguette.jpeg"
        cover
        >
        <v-card-title style="text-shadow: 1px 1px 2px black;"> Boulangerie Patisserie </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
        Nicolas le Boulanger
        </v-card-subtitle>

        <v-card-text>
        <div>Depuis des années, cette boulangerie ravit ses clients avec ses produits de qualité. Le service est rapide et professionnel, même en période de forte affluence. Les pâtisseries et gâteaux, notamment le framboisier et le "Royal" au chocolat, sont particulièrement appréciés.</div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="primary" text="Téléphoner" prepend-icon="mdi-phone" href="tel:0160678630"></v-btn>
            <v-btn color="primary" text="Voir sur Maps" href="https://maps.app.goo.gl/WFu1eFem1rqd7d539"></v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
    export default {
      name: 'BrayBoulang',
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>