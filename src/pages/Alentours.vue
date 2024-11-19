<template>
    <div>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="(cards, name) in this.tabs" :key="name">
                <div style="margin: 15px;"><component
                    v-for="(card, index) in cards"
                    :is="card" :key="name+index"
                ></component></div>
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

    export default {
        name: 'Alentours',  
        data: () => ({
            tabs: {
                "#commerces": [BzhAsperges],
                "#bazoches": [],
                "#musees": [],
                "#villages": [Barbizon, Blandy],
                "#villes": [BleauCastle, Sens, Paris, Auxerre, Troyes, Provins],
                "#sports": [BleauEscalade]
            },
            tab: 0,
        }),  
        mounted() {
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
          shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
          }
        },
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>