<template>
    <div>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="(cards, name) in this.autoTab" :key="name">
                <v-row style="margin: 15px;">
                    <v-col cols="12" md="4" v-for="(card, index) in cards" :key="name+index">
                        <component :is="card"></component>
                    </v-col>
                </v-row>
                <v-empty-state
                    v-if="cards.length == 0"
                    headline="Aucun endroit trouvé"
                    title="Pourtant il y a de quoi faire..."
                    text="Il reste du travail à faire sur cette page !"
                    >
                    <template v-slot:media>
                        <v-icon>mdi-bird</v-icon>
                    </template>
                </v-empty-state>
            </v-tabs-window-item>
            <v-tabs-window-item key="#sports" name="#sports">
                <v-row style="margin: 15px;">
                    <v-col cols="12" md="4">
                        <BleauEscalade></BleauEscalade>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <div class="strava-embed-placeholder" data-embed-type="route" data-embed-id="3350061464593558620" data-style="standard" data-hide-elevation="true" data-map-hash="11.44/48.4033/3.1716" data-from-embed="true"></div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <div class="strava-embed-placeholder" data-embed-type="route" data-embed-id="3350403441514672646" data-style="standard" data-hide-elevation="true" data-map-hash="11.56/48.4112/3.1838" data-from-embed="true"></div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <div class="strava-embed-placeholder" data-embed-type="route" data-embed-id="3350404349986308492" data-style="standard" data-hide-elevation="true" data-map-hash="12/48.40773/3.17126" data-from-embed="true"></div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <div class="strava-embed-placeholder" data-embed-type="route" data-embed-id="3350405696633225444" data-style="standard" data-hide-elevation="true" data-map-hash="10.41/48.4009/3.1445" data-from-embed="true"></div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <div class="strava-embed-placeholder" data-embed-type="route" data-embed-id="3350406692774109180" data-style="standard" data-hide-elevation="true" data-map-hash="12.83/48.40567/3.18233" data-from-embed="true"></div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <div class="strava-embed-placeholder" data-embed-type="route" data-embed-id="3350407847134029820" data-style="standard" data-hide-elevation="true" data-from-embed="false"></div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <div class="strava-embed-placeholder" data-embed-type="route" data-embed-id="3350411461795114380" data-style="standard" data-map-hash="9.29/48.4767/3.2289" data-from-embed="true"></div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <div class="strava-embed-placeholder" data-embed-type="route" data-embed-id="3350409867206224268" data-style="standard" data-map-hash="10.23/48.4334/3.0977" data-from-embed="true"></div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-tabs-window-item>
        </v-tabs-window>
    </div>
</template>

<script>
    import Barbizon from '../components/visitbzh/Barbizon.vue'
    import Blandy from '../components/visitbzh/Blandy.vue'
    import BzhAsperges from '../components/visitbzh/BzhAsperges.vue';
    import BleauCastle from '../components/visitbzh/BleauCastle.vue';
    import BleauEscalade from '../components/visitbzh/BleauEscalade.vue';
    import Sens from '../components/visitbzh/Sens.vue';
    import Paris from '../components/visitbzh/Paris.vue';
    import Auxerre from '../components/visitbzh/Auxerre.vue';
    import Troyes from '../components/visitbzh/Troyes.vue';
    import Provins from '../components/visitbzh/Provins.vue';
    import BrayBoulang from '../components/visitbzh/BrayBoulang.vue';
    import BraySupermarches from '../components/visitbzh/BraySupermarches.vue';
    import BrayBoucherie from '../components/visitbzh/BrayBoucherie.vue';
    import BrayCinema from '../components/visitbzh/BrayCinema.vue';
    import MoretSurLoing from '../components/visitbzh/MoretSurLoing.vue';
    import Marches from '../components/visitbzh/Marches.vue';
    import ObservatoireOiseaux from '../components/visitbzh/ObservatoireOiseaux.vue';
    import RestoPAD from '../components/visitbzh/RestoPAD.vue';
    import RestoLaboureur from '../components/visitbzh/RestoLaboureur.vue';

    export default {
        name: 'Alentours',  
        data: () => ({
            tabs: null,
            tab: 0,
        }),          
        mounted() {
            let stravaScript = document.createElement('script')
            stravaScript.setAttribute('src', 'https://strava-embeds.com/embed.js')
            document.head.appendChild(stravaScript)

            function shuffle(a) {
                var j, x, i;
                for (i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                }
                return a;
            }
            this.tabs = {
                "#commerces": shuffle([BraySupermarches, BzhAsperges, BrayBoulang, BrayBoucherie, Marches]),
                "#bazoches": shuffle([ObservatoireOiseaux, BrayCinema]),
                "#musees": shuffle([]),
                "#villages": shuffle([Barbizon, Blandy, MoretSurLoing]),
                "#villes": shuffle([BleauCastle, Sens, Paris, Auxerre, Troyes, Provins]),
                "#restos": shuffle([RestoPAD, RestoLaboureur]),
                "#sports": shuffle([BleauEscalade])
            }
            this.checkHref();
            window.addEventListener('popstate', this.checkHref);
        },
        computed: {
            autoTab(){
                const result = { ...this.tabs };
                ["#sports"].forEach(function (prop) {
                    delete result[prop];
                });
                return result;
            }
        },
        methods: {
          checkHref() {
            this.tab = Object.keys(this.tabs).indexOf(window.location.hash);
            if (this.tab == -1){
                this.tab = 0
            }
          },
        },
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>