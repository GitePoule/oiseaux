<template>
    <v-card
        :disabled="loading"
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
    >
        <template v-slot:loader="{ isActive }">
        <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
        ></v-progress-linear>
        </template>

        <v-img
        height="250"
        :src="imgPAD"
        cover
        ></v-img>

        <v-card-item>
        <v-card-title>PAD, la maison de l'hambourgeois</v-card-title>

        <v-card-subtitle>
            <span class="me-1">Produits de qualité</span>

            <v-icon
            color="error"
            icon="mdi-fire-circle"
            size="small"
            ></v-icon>
        </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            
        <v-row
            align="center"
            class="mx-0"
        >
            <v-rating
            :model-value="4"
            color="amber"
            density="compact"
            size="small"
            half-increments
            readonly
            ></v-rating>
            <v-spacer></v-spacer>
            <v-card-subtitle>
                <v-icon
                color="info"
                icon="mdi-map-marker-radius-outline"
                size="small"
                ></v-icon>
                <span class="me-1">Bray sur Seine</span>
            </v-card-subtitle>
        </v-row>
        <br/>

        <div class="my-4 text-subtitle-1">
            € • Burger, Salade, Glace
        </div>

        <div>Un hamburger avec de bons produits, locaux et des recettes finement élaborées. Nous vous recommandons ! Possibilité pour les végés de remplacer tous les steaks par du fromage.</div>
        </v-card-text>

        <div class="px-4 mb-2">
            <v-chip-group v-model="selection" selected-class="bg-deep-purple-lighten-2">
                <v-chip>
                    <v-icon icon="mdi-bike" start></v-icon> 15 min
                </v-chip>
                <v-chip>
                    <v-icon icon="mdi-car" start></v-icon> 5 min
                </v-chip>
                <v-chip>
                    <v-icon icon="mdi-walk" start></v-icon> 1 heure
                </v-chip>
            </v-chip-group>
        </div>

        <v-card-actions>
            <v-btn text="Téléphoner" color="deep-purple-lighten-2" prepend-icon="mdi-phone" href="tel:0164006922"></v-btn>
            <v-btn
                color="deep-purple-lighten-2"
                prepend-icon="mdi-silverware"
                text="Voir le menu"
                @click="show = !show"
            ></v-btn>
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