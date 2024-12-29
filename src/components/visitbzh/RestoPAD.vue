<template>
    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        :src="imgPAD"
        cover
        >
        <v-card-title style="text-shadow: 1px 1px 2px black;"> PAD </v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
            La maison de l'hambourgeois
        </v-card-subtitle>

        <v-card-text>
        <div>Provins est inscrite au patrimoine mondial de l'UNESCO. Ses remparts, ses tours et ses spectacles médiévaux en font une destination historique unique.</div>
        </v-card-text>

        <v-card-actions>
            <v-avatar :image="imgLogo"></v-avatar>
            <v-btn color="primary" text="Voir/fermer le menu" @click="show = !show"></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-img :src="imgMenu"></v-img>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
    import imgPAD from '@/assets/img/pad.jpg';
    import imgLogo from '@/assets/img/pad_logo.jpg';
    import imgMenu from '@/assets/img/pad_menu.jpg';

    export default {
        name: 'RestoPAD',
        data: () => ({
            show: false,
            imgPAD: imgPAD,
            imgMenu: imgMenu,
            imgLogo: imgLogo,
        })
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>