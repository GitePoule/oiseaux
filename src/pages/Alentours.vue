<template>
    <div>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item
                v-for="(value, name, index) in this.tabs"
                :key="name"
                >
                    <v-card
                        class="mx-auto"
                        max-width="400"
                        style="margin-top: 20px;margin-bottom: 20px;"
                    >
                        <v-img
                        class="align-end text-white"
                        height="200"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        cover
                        >
                        <v-card-title> {{ value }}</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pt-4">
                        Number 10
                        </v-card-subtitle>

                        <v-card-text>
                        <div>Whitehaven Beach</div>

                        <div>Whitsunday Island, Whitsunday Islands</div>
                        </v-card-text>

                        <v-card-actions>
                        <v-btn color="orange" text="Share"></v-btn>

                        <v-btn color="orange" text="Explore"></v-btn>
                        </v-card-actions>
                    </v-card>
            </v-tabs-window-item>
        </v-tabs-window>
    </div>
</template>

<script>
    export default {
        name: 'Alentours',
        data: () => ({
            tabs: {
                "#commerces": 'Boulangerie',
                "#bazoches": "Illumination de noël de Vimpelles",
                "#villages": 'Moret sur Loing',
                "#villes": "Troyes",
                "#sports": "Promenade le long de l'Yonne"
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
          }
        },
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>