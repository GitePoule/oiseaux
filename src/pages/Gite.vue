<template>
    <v-card style="border-radius:0px;height:500px;max-height:20%;width:100%;">
        <v-carousel
            cycle
            :show-arrows="false"
            progress="teal"
            height="100%"
            width="100%"
        >  
            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
            ></v-carousel-item>
            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                cover
            ></v-carousel-item>
            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
            ></v-carousel-item>
      </v-carousel>
    </v-card>
  <div style="margin: 10px;">

    <br />
    <h3>Gîte "A l'ombre des oiseaux"</h3>
    <br />
    <p>Maison - Bazoches-Lès-Bray (77118)</p>
    <p>1 lit double - 2 lits simples</p>
    <br />

    <v-chip
      class="ma-2"
      color="indigo"
      href="https://www.gites-de-france.com/fr/ile-de-france/seine-et-marne/lombre-des-oiseaux-77g624#reviews"
      prepend-icon="mdi-star"
    >
    Avis et commentaires
    </v-chip>
    <br />

    <br /><v-divider></v-divider>
    <h3>Rez-de-chausée</h3>

    <br /><v-divider></v-divider>
    <h3>L'étage</h3>

    <br /><v-divider></v-divider>
    <h3>Les équipements du logement</h3>
    <v-bottom-sheet inset>
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text="Liste des équipements"></v-btn>
        </template>

        <v-card
            title="Les équipements"
            style="max-height:50%"
        >
            <v-list>
                <v-list-subheader>Votre gîte contient</v-list-subheader>
                <v-list-item
                    v-for="tile in available"
                    :key="tile.title"
                    prepend-icon="mdi-bike"
                    :title="tile.title"
                ></v-list-item>
                <v-divider></v-divider>
                <v-list-subheader>A la demande</v-list-subheader>
                <v-list-item
                    v-for="tile in ondemand"
                    :key="tile.title"
                    prepend-icon="mdi-bike"
                    :title="tile.title"
                ></v-list-item>
                <v-divider></v-divider>
                <v-list-subheader>Votre gîte ne contient pas</v-list-subheader>
                <div class="text-decoration-line-through" style="text-decoration-thickness: 1.5px !important;">
                    <v-list-item
                        v-for="tile in unavailable"
                        :key="tile.title"
                        prepend-icon="mdi-bike"
                        :title="tile.title"
                    ></v-list-item>
                </div>
            </v-list>
        </v-card>
    </v-bottom-sheet>

    <br /><v-divider></v-divider>
    <h3>Petit guide pour le wifi</h3>

    <br /><v-divider></v-divider>
    <h3>Petit guide pour la télévision</h3>

    <br /><v-divider></v-divider>
    <h3>Jeux de société</h3>
    <p>Les jeux de société sont disponibles à la demande.</p>

    <br /><v-divider></v-divider>
    <h3>Jardin extérieur</h3>

    <br /><v-divider></v-divider>
    <h3>Règlement intérieur</h3>

    <br /><v-divider></v-divider>
    <h3>Sécurité du logement</h3>

</div>
</template>

<script>
    export default {
        name: 'Gite',
        data: () => ({
          available: [
            { img: 'mdi-bike', title: 'Keep' },
            { img: 'mdi-bike', title: 'Inbox' },
            { img: 'mdi-bike', title: 'Hangouts' },
            { img: 'mdi-bike', title: 'Messenger' },
            { img: 'mdi-bike', title: 'Google+' },
          ],
          unavailable: [
            { img: 'mdi-bike', title: 'Keep' },
            { img: 'mdi-bike', title: 'Inbox' },
            { img: 'mdi-bike', title: 'Hangouts' },
            { img: 'mdi-bike', title: 'Messenger' },
            { img: 'mdi-bike', title: 'Google+' },
          ],
          ondemand: [
            { img: 'mdi-bike', title: 'Keep' },
            { img: 'mdi-bike', title: 'Inbox' },
            { img: 'mdi-bike', title: 'Hangouts' },
            { img: 'mdi-bike', title: 'Messenger' },
            { img: 'mdi-bike', title: 'Google+' },
          ],
        })
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>