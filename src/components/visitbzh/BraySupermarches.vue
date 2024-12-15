<template>
    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        :src="marques[selection].img"
        cover
        >
        <v-card-title style="text-shadow: 1px 1px 2px black;"> Supermarché {{ marques[selection].text }} </v-card-title>
        </v-img>

        <v-chip-group
            mandatory
            v-model="selection"
            selected-class="text-deep-purple-accent-4"
            style="margin-left: 15px;"
            >
            <v-chip v-for="marque in marques" :key="marque.text" :text="marque.text"></v-chip>
        </v-chip-group>

        <v-card-text>
        <div> {{ marques[selection].desc }} </div>
        </v-card-text>

        <v-card-actions>
            <v-avatar :image="marques[selection].logo"></v-avatar>
            <v-btn color="primary" text="Voir les horaires" :href="marques[selection].link"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'BraySupermarches',
        data: () => ({
            marques: [
                {
                    text: 'Aldi',
                    logo: 'https://levillagedesrecruteurs.fr/wp-content/uploads/gravity_forms/19-bf0649d5b725f4f2783391d3505e4d13/2022/05/Aldi_logo.png',
                    img: 'https://magasins.bi1.fr/uploads/other/xtype_banner_web-62222a7cb8a798.71338395.png.pagespeed.ic.udsXkAVhOY.jpg',
                    link: 'https://www.aldi.fr/magasins-et-horaires-d-ouverture.html/l/bray-sur-seine/951-rue-albert-einstein/3435797',
                    desc: "Comme Carrefour Market, Aldi est situé à l'opposé de Bray par rapport à Bazoches.",
                },
                {
                    text: 'Bi1',
                    logo: 'https://v2.smart-traffik.com/uploads/other/logo-60643d12237762.17076341.png',
                    img: 'https://magasins.bi1.fr/uploads/other/xtype_banner_web-62222a7cb8a798.71338395.png.pagespeed.ic.udsXkAVhOY.jpg',
                    link: 'https://magasins.bi1.fr/bi1-supermarches/fr/store/france/ile-de-france/seine-et-marne/mousseaux-les-bray/mousseaux-les-bray/70253',
                    desc: 'Ce supermarché est le plus proche de votre gîte. Il est situé à Mousseaux-lès-Bray à deux pas de Bray sur Seine.',
                },
                {
                    text: 'Carrefour Market',
                    logo: 'http://tous-logos.com/wp-content/uploads/2017/07/Le-logo-Carrefour.png',
                    img: 'https://magasins.bi1.fr/uploads/other/xtype_banner_web-62222a7cb8a798.71338395.png.pagespeed.ic.udsXkAVhOY.jpg',
                    link: 'https://www.carrefour.fr/magasin/market-bray-sur-seine',
                    desc: "Comme Aldi, Carrefour Market est situé à l'opposé de Bray par rapport à Bazoches.",
                }
            ],
            selection: 1
        })
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>