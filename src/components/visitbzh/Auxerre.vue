<template>
    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        src="https://www.terre.tv/wp-content/uploads/2022/02/auxerre.jpg"
        cover
        >
        <v-card-title style="text-shadow: 1px 1px 2px black;"> Auxerre </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
            Auxerre
        </v-card-subtitle>

        <v-card-text>
        <div>Auxerre, ville historique de l'Yonne, est connue pour sa cathédrale Saint-Étienne et son abbaye Saint-Germain. Ses rues pavées et ses maisons à colombages en font une destination charmante et pittoresque.</div>
        </v-card-text>

        <v-card-actions>
            <v-avatar image="https://www.aja.fr/wp-content/uploads/2023/01/Groupe-320-1.svg"></v-avatar>
            <v-btn color="primary" text="Voir le site" href="https://www.auxerre.fr/"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'Auxerre',
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>