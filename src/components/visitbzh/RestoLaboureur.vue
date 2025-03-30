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
        :src="imgLaboureur"
        cover
        ></v-img>

        <v-card-item>
        <v-card-title>Au bon laboureur</v-card-title>
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
            :model-value="5"
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
            €€€ • Cuisine traditionnelle de saison
        </div>

        <div>
            <p>Votre restaurant, hôtel et traiteur à Bray sur Seine est sélectionné par le guide Gault Millau depuis 2011 et le Guide du Routard depuis 1998.</p>
            <p>Bien situé et au calme, vous apprécierez, sa grande salle à manger pour y déguster la cuisine gourmande du Chef.</p></div>
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
            <v-btn text="Téléphoner" color="deep-purple-lighten-2" prepend-icon="mdi-phone" href="tel:0160671081"></v-btn>
            <v-btn
                prepend-icon="mdi-web"
                color="deep-purple-lighten-2"
                text="Voir le site"
                href="http://www.aubonlaboureur.com/"
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
    import imgLaboureur from '@/assets/img/laboureur.jpg';
    import imgLogo from '@/assets/img/pad_logo.jpg';
    import imgMenu from '@/assets/img/pad_menu.jpg';

    export default {
        name: 'RestoLaboureur',
        data: () => ({
            show: false,
            imgLaboureur: imgLaboureur,
            imgMenu: imgMenu,
            imgLogo: imgLogo,
        })
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>