<template>

    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-carousel 
            show-arrows="hover"
            cycle
            hide-delimiter-background
            height="250px"
        >
            <v-carousel-item :src="img1" cover></v-carousel-item>
            <v-carousel-item :src="img2" cover></v-carousel-item>
            <v-carousel-item :src="img3" cover></v-carousel-item>
        </v-carousel>

        <v-card-subtitle class="pt-4">
            Observatoire ornithologique de Champmorin
        </v-card-subtitle>

        <v-card-text>
            Localisé entre Bazoches et Balloy, entre le canal et la Seine, cet observatoire est parfait pour admirer ou photographier les oiseaux vivant dans la vallée de Seine.
            Avec un peu de chance, vous pourrez même y voir d'autres habitants des forêts du secteur, comme par exemple, une famille de sanglier !
        </v-card-text>

    </v-card>

</template>

<script>
    import img1 from "@/assets/img/observatoire/IMG_1532.jpg";
    import img2 from "@/assets/img/observatoire/IMG_1534.jpg";
    import img3 from "@/assets/img/observatoire/IMG_1536.jpg";

    export default {
        name: 'ObservatoireOiseaux',
        data: () => ({
            img1: img1,
            img2: img2,
            img3: img3
        })
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>