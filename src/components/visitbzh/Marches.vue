<template>
    <v-card
        class="mx-auto"
        max-width="400"
        style="margin-top: 20px;margin-bottom: 20px;"
    >
        <v-img
        class="align-end text-white"
        height="200"
        src="https://c.pxhere.com/photos/54/f2/sevilla_andalusia_triana-528915.jpg!d"
        cover
        >
        <v-card-title style="text-shadow: 1px 1px 2px black;"> Les marchés du secteur </v-card-title>
        </v-img>

        <v-chip-group
            mandatory
            v-model="selection"
            selected-class="text-deep-purple-accent-4"
            style="margin: 5px;"
        >
            <v-chip text="Lundi"></v-chip>
            <v-chip text="Mardi"></v-chip>
            <v-chip text="Mercredi"></v-chip>
            <v-chip text="Jeudi"></v-chip>
            <v-chip text="Vendredi"></v-chip>
            <v-chip text="Samedi"></v-chip>
            <v-chip text="Dimanche"></v-chip>
        </v-chip-group>

        <div style="margin: 20px">
            <div v-if="selection==0">
                <p>Donnemarie-Dontilly, de 8h à 13h</p>
            </div>
            <div v-if="selection==1">
                <p>Varennes-sur-Seine, de 8h à 12h</p>
            </div>
            <div v-if="selection==2">
                <p>Montereau-fault-Yonne, de 8h à 13h</p>
                <p>Pont-sur-Yonne, de 8h à 13h</p>
                <p>Château de la Motte-Tilly, de 10h à 15h</p>
            </div>
            <div v-if="selection==3">
                <p>Misy-sur-Yonne, de 9h à 12h</p>
            </div>
            <div v-if="selection==4">
                <p>Bray-sur-Seine, de 8h à 13h</p>
            </div>
            <div v-if="selection==5">
                <p>Montereau-fault-Yonne, de 8h à 13h</p>
                <p>Provins, de 8h à 12h</p>
            </div>
            <div v-if="selection==6">
                <p>Pont-sur-Yonne, de 8h à 13h</p>
            </div>
        </div>

        <v-card-actions>
            <v-btn color="primary" text="Plus d'infos" href="https://www.jours-de-marche.fr/recherche/?idLieu=32146"></v-btn>
        </v-card-actions>

    </v-card>
</template>

<script>
    export default {
        name: 'Marches',
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