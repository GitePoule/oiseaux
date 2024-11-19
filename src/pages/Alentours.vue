<template>
    <div>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item
                v-for="(value, name, index) in this.tabs"
                :key="name"
                >
                <v-card class="d-flex justify-center align-center" height="100%">
                  <span class="text-h2">{{ value }}</span>
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
                "#commerces": 'c',
                "#bazoches": "b",
                "#villages": 'v',
                "#villes": "V",
                "#sports": "s"
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
          }
        },
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>