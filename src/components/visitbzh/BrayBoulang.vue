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
        <v-card-title> Boulangerie Patisserie </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
        Nicolas le Boulanger
        </v-card-subtitle>

        <v-card-text>
        <div>Depuis des années, cette boulangerie ravit ses clients avec ses produits de qualité. Le pain est délicieux et les pâtisseries, magnifiques et savoureuses, rappellent des souvenirs d'enfance. Le service est rapide et professionnel, même en période de forte affluence. Les gâteaux, notamment le framboisier et le "Royal" au chocolat, sont particulièrement appréciés. La galette à la frangipane est une véritable tuerie, généreuse en crème et au feuilletage réussi.</div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="blue" text="Téléphoner" href="tel:0160678630"></v-btn>
            <v-btn color="blue" text="Voir sur Maps" href="https://maps.app.goo.gl/WFu1eFem1rqd7d539"></v-btn>
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