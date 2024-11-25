<template>
    <v-card style="border-radius:0px;height:500px;max-height:20%;width:100%;">
        <v-carousel
            cycle
            :show-arrows="false"
            progress="teal"
            height="100%"
            width="100%"
        >  
        <div >
            </div>
            <v-carousel-item
                v-for="(image, index) in imgCarousel" :key="index"
                :src="image" :alt="'Image ' + index" cover
            ></v-carousel-item>
      </v-carousel>
    </v-card>
  <div style="margin-left: 10%; margin-right: 10%;">

    <br />

    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
      >
        <h3>A l'ombre des oiseaux</h3>
        <br />
        <p>Maison - Bazoches-Lès-Bray (77118)</p>
        <p>1 lit double - 2 lits simples</p>
        <p style="font-size: 9pt;">Note Gîtes de France : 5/5 (Déc. 2024) </p>
        <p style="font-size: 9pt;">Classement Gîtes de France : 3 épis  </p>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="d-flex align-center mb-6"
      >
        <v-avatar color="green-darken-2" size="small" style="margin-right: 5px;">
        <v-icon icon="mdi-barley"></v-icon>
        </v-avatar>
        <v-avatar color="green-darken-2" size="small" style="margin-right: 5px;">
        <v-icon icon="mdi-barley"></v-icon>
        </v-avatar>
        <v-avatar color="green-darken-2" size="small" style="margin-right: 5px;">
        <v-icon icon="mdi-barley"></v-icon>
        </v-avatar>
        <v-chip
        class="ma-2"
        color="indigo"
        href="https://www.gites-de-france.com/fr/ile-de-france/seine-et-marne/lombre-des-oiseaux-77g624#reviews"
        prepend-icon="mdi-star"
        >
        Avis et commentaires
        </v-chip>
        <br/>
      </v-col>
    </v-row>
    
    <br /><v-divider></v-divider>
    <h3>Rez-de-chausée</h3>
    
    <br/>

    <v-card
        class="mx-auto"
        prepend-icon="mdi-chef-hat"
        subtitle=""
        width="200"
    >
        <template v-slot:title>
        <span class="font-weight-black">Cuisine</span>
        </template>
    </v-card><br/>

    <v-card
        class="mx-auto"
        prepend-icon="mdi-television"
        subtitle="Android TV"
        width="200"
    >
        <template v-slot:title>
        <span class="font-weight-black">Salon</span>
        </template>
    </v-card><br/>

    <v-card
        class="mx-auto"
        prepend-icon="mdi-shower"
        subtitle="Douche"
        width="200"
    >
        <template v-slot:title>
        <span class="font-weight-black">Salle de bain</span>
        </template>
    </v-card><br/>

    <v-card
        class="mx-auto"
        prepend-icon="mdi-toilet"
        subtitle="Papier toilette inclus"
        width="200"
    >
        <template v-slot:title>
        <span class="font-weight-black">Toilettes 1</span>
        </template>
    </v-card>

    <br /><v-divider></v-divider>
    <h3>L'étage</h3>

    <br/>

    <v-card
        class="mx-auto"
        prepend-icon="mdi-bed-king"
        subtitle="1 lit double"
        width="200"
    >
        <template v-slot:title>
        <span class="font-weight-black">Chambre 1</span>
        </template>
    </v-card><br/>

    <v-card
        class="mx-auto"
        prepend-icon="mdi-bed"
        subtitle="2 lits simples"
        width="200"
    >
        <template v-slot:title>
        <span class="font-weight-black">Chambre 2</span>
        </template>
    </v-card><br/>

    <v-card
        class="mx-auto"
        prepend-icon="mdi-toilet"
        subtitle="Papier toilette inclus"
        width="200"
    >
        <template v-slot:title>
        <span class="font-weight-black">Toilettes 2</span>
        </template>
    </v-card>

    <br/><br /><v-divider></v-divider>
    <h3>Les équipements du logement</h3><br />

        <v-chip v-for="(e) in equipements" :key="e.label"  style="margin: 5px;" size="small">
            {{ e.label }}
        </v-chip>
        <v-chip
            @click="sheetEquipmt = !sheetEquipmt"
            size="small"
            variant="elevated"
            style="margin: 5px;"
 prepend-icon="mdi-format-list-bulleted"
        >
            Voir les équipements
        </v-chip>

        <v-bottom-sheet inset v-model="sheetEquipmt"><v-card>
            <v-card-text>
                <v-row align="center" justify="center">
                    <v-btn
                        variant="text"
                        @click="sheetEquipmt = !sheetEquipmt"
                    >
                        Fermer la liste
                    </v-btn>
                </v-row>
            </v-card-text>
            <v-list>
                <div v-for="(e, l, i) in equipements" :key="e">
                    <v-divider v-if="i != 0"></v-divider>
                    <v-list-subheader>{{ e.label }}</v-list-subheader>
                    <v-list-item
                        v-for="item in e.items"
                        :class="{ 'text-decoration-line-through': !item.available }"
                        :key="item.id"
                        :prepend-icon="item.icon"
                        :title="item.name"
                        :append-icon="item.ask ? 'mdi-chat-question' : ''"
                    ></v-list-item>
                    <br />
                </div>
            </v-list>

        </v-card></v-bottom-sheet>

    <br/><br/><v-divider></v-divider>
    <h3>Petits guides d'utilisation</h3><br/>

    <v-chip v-for="(e) in ['Four', 'Télévision', 'Wifi']" :key="e.label"  style="margin: 5px;" size="small">
        {{ e }}
    </v-chip>
    <v-chip
        @click="sheetGuide = !sheetGuide"
        size="small"
        variant="elevated"
        prepend-icon="mdi-help-box"
        style="margin: 5px;"
    >
        Ouvrir les guides
    </v-chip>

    <v-bottom-sheet inset v-model="sheetGuide"><v-card>
        <v-tabs
            v-model="tabGuide"
            align-tabs="center"
            color="deep-purple-accent-4"
            >
            <v-tab prepend-icon="mdi-stove" :value="1"></v-tab>
            <v-tab prepend-icon="mdi-television" :value="2"></v-tab>
            <v-tab prepend-icon="mdi-wifi" :value="3"></v-tab>
            <v-tab prepend-icon="mdi-close" @click="sheetGuide = !sheetGuide" ></v-tab>
        </v-tabs>

        <v-tabs-window v-model="tabGuide">
            <v-tabs-window-item :value="1" height="600px">Guide 1</v-tabs-window-item>
            <v-tabs-window-item :value="2" height="600px">Guide 2</v-tabs-window-item>
            <v-tabs-window-item :value="3" height="600px">Guide 3</v-tabs-window-item>
        </v-tabs-window>
        
    </v-card></v-bottom-sheet>

    <br /><br /><v-divider></v-divider>
    <h3>Jeux de société</h3><br />

    <v-chip v-for="(e) in games" :key="e.label" :color="e.color" style="margin: 5px;" variant="flat" size="small">
        {{ e.name }}
    </v-chip>
    <v-chip
        @click="sheetGame = !sheetGame"
        size="small"
        variant="elevated"
        prepend-icon="mdi-cards-playing"
        style="margin: 5px;"
    >
        Voir tous les jeux
    </v-chip>

    <v-bottom-sheet inset v-model="sheetGame"><v-card>
        <v-card-text>
            <v-row align="center" justify="center">
                <v-btn
                    variant="text"
                    @click="sheetGame = !sheetGame"
                >
                    Fermer la liste
                </v-btn>
            </v-row>
        </v-card-text>
        <v-list>
            <v-list-item
                v-for="e in games"
                :key="e.name"
                :prepend-avatar="e.logo"
                :title="e.name"
            ></v-list-item>
        </v-list>
    </v-card></v-bottom-sheet>
    
    <br /><br /><v-divider></v-divider>
    <h3>Jardin extérieur</h3><br />

    <br /><v-divider></v-divider>
    <h3>Règlement intérieur</h3><br />

    <br /><v-divider></v-divider>
    <h3>Sécurité du logement</h3><br />

</div>
</template>

<script>
    import equipements from '@/assets/equipments';
    import games from '@/assets/games';
    import images from '@/assets/img/gites';

    export default {
        name: 'Gite',
        data: () => ({
          tabGuide: 1,
          imgCarousel: images,
          games: games,
          sheetEquipmt: false,
          sheetGuide: false,
          sheetGame: false,
          equipements: equipements
        })
    };
</script>

<style scoped>
.text-decoration-line-through{
    text-decoration-thickness: 1.5px !important;
}
</style>