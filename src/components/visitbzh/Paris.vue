<template>
    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        src="https://www.tripsavvy.com/thmb/YAP8RHHEm1DUNGh-LsOCBnxzoA0=/5000x3520/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-167849334-57bee14a5f9b5855e5baed5c.jpg"
        cover
        >
        <v-card-title style="text-shadow: 1px 1px 2px black;"> Paris </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
            Paris
        </v-card-subtitle>

        <v-card-text>
        <div>Paris, capitale de la France, est mondialement connue pour ses monuments emblématiques comme la Tour Eiffel, le Louvre et Notre-Dame. Ses quartiers animés, ses musées et ses cafés en font une destination incontournable.</div>
        </v-card-text>

        <v-card-actions>
            <v-avatar image="https://www.sortiraparis.com/favicon.ico"></v-avatar>
            <v-btn color="primary" text="Sortir à Paris" href="https://www.sortiraparis.com/"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'Paris',
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>