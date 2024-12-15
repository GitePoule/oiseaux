<template>
    <div>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="(cards, name) in this.tabs" :key="name">
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
    import MoretSurLoing from '../components/visitbzh/MoretSurLoing.vue';
    
    export default {
        name: 'Alentours',  
        data: () => ({
            tabs: null,
            tab: 0,
        }),  
        mounted() {
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
                "#commerces": shuffle([BraySupermarches, BzhAsperges, BrayBoulang, BrayBoucherie]),
                "#bazoches": shuffle([]),
                "#musees": shuffle([]),
                "#villages": shuffle([Barbizon, Blandy, MoretSurLoing]),
                "#villes": shuffle([BleauCastle, Sens, Paris, Auxerre, Troyes, Provins]),
                "#restos": shuffle([]),
                "#sports": shuffle([BleauEscalade])
            }
            this.checkHref();
            window.addEventListener('popstate', this.checkHref);
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