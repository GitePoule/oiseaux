<template>
    <v-card style="border-radius:0px;height:300px;">
        <v-carousel
            v-model="shownPicture"
            progress="primary"
            height="100%"
            width="100%"
            hide-delimiters
        >  
            <v-chip
                label
                class="ma-2 opacity-80"
                color="white"
                variant="elevated"
                v-if="showCarBtn"
                style="z-index:1000;position:absolute;top:15px;left:25px;"
                prepend-icon="mdi-account-hard-hat"
                >
                {{ this.imagesDeck }}
            </v-chip>

            <v-btn
                v-if="showCarBtn"
                @click="switchGite"
                density="compact"
                icon="mdi-arrow-u-left-top"
                style="z-index:1000;position:absolute;top:20px;right:75px;width:35px;height:35px;"
            >
            </v-btn>

            <v-btn
                density="compact"
                icon="mdi-arrow-expand"
                @click="dialogPics = true"
                style="z-index:1000;position:absolute;top:20px;right:25px;width:35px;height:35px;"
            >
            </v-btn>

            <v-carousel-item
                v-for="(image, index) in imgCarousel" :key="index"
                :src="image" :alt="'Image ' + index" cover
            ></v-carousel-item>
      </v-carousel>
    </v-card>

    <v-dialog v-model="dialogPics">
        <template v-slot:default="{ isActive }">
            <v-card
                prepend-icon="mdi-account-hard-hat"
                :title="imagesDeck"
            >
                <v-carousel
                    progress="primary"
                    hide-delimiters
                    cover
                >
                    <v-carousel-item
                        v-for="(image, index) in imgCarousel" :key="index"
                        :src="image" :alt="'Image ' + index"
                    ></v-carousel-item>
                </v-carousel> 

                <template v-slot:actions>
                <v-btn
                    class="ml-auto"
                    text="Fermer"
                    @click="dialogPics = false"
                ></v-btn>
                </template>
            </v-card>
        </template>
    </v-dialog>

  <div style="margin-left: 10%; margin-right: 10%;">

    <br />

    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
      >
        <h3>A l'ombre des oiseaux</h3>
        <br />
        <p>
           Logement entier - Bazoches-Lès-Bray
        </p>
        <p>1 lit double - 2 lits simples</p>
        <p style="font-size: 9pt;">Surface de 70m² </p>
        <p style="font-size: 9pt;">Note Gîtes de France ® : 5/5 (Déc. 2024) </p>
        <p style="font-size: 9pt;">Classement Gîtes de France ® : 3 épis  </p>
        <br />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="d-flex align-center mb-6"
      >
        <br/>
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
      </v-col>
    </v-row>
    
    <br /><v-divider></v-divider>
    <h3>Rez-de-chausée</h3>
    
    <br/>

    <v-row>
        <v-col cols="12" md="6">
            <v-card
                class="mx-auto"
                prepend-icon="mdi-chef-hat"
                subtitle="Équipée"
                width="250"
            >
                <template v-slot:title>
                <span class="font-weight-black">Cuisine</span>
                </template>
            </v-card><br/>
        </v-col>

        <v-col cols="12" md="6">
            <v-card
                class="mx-auto"
                prepend-icon="mdi-television"
                subtitle="Android TV"
                width="250"
            >
                <template v-slot:title>
                <span class="font-weight-black">Salon</span>
                </template>
            </v-card><br/>
        </v-col>

        <v-col cols="12" md="6">
            <v-card
                class="mx-auto"
                prepend-icon="mdi-shower"
                subtitle="Douche"
                width="250"
                >
                <template v-slot:title>
                <span class="font-weight-black">Salle de bain</span>
                </template>
            </v-card><br/>
        </v-col>

        <v-col cols="12" md="6">
            <v-card
                class="mx-auto"
                prepend-icon="mdi-toilet"
                subtitle="Papier toilette inclus"
                width="250"
                >
                <template v-slot:title>
                <span class="font-weight-black">Toilettes 1</span>
                </template>
            </v-card>
        </v-col>
    </v-row>

    <br /><br /><v-divider></v-divider>
    <h3>L'étage</h3>

    <br/>

    <v-row>

        <v-col cols="12" md="4">
            <v-card
                class="mx-auto"
                prepend-icon="mdi-bed-king"
                subtitle="1 lit double"
                width="250"
            >
                <template v-slot:title>
                <span class="font-weight-black">Chambre 1</span>
                </template>
            </v-card><br/>
        </v-col>

        <v-col cols="12" md="4">

            <v-card
                class="mx-auto"
                prepend-icon="mdi-bed"
                subtitle="2 lits simples"
                width="250"
            >
                <template v-slot:title>
                <span class="font-weight-black">Chambre 2</span>
                </template>
            </v-card><br/>
        </v-col>

        <v-col cols="12" md="4">
            <v-card
                class="mx-auto"
                prepend-icon="mdi-toilet"
                subtitle="Papier toilette inclus"
                width="250"
            >
                <template v-slot:title>
                <span class="font-weight-black">Toilettes 2</span>
                </template>
            </v-card>
        </v-col>

    </v-row>

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
                <p style="padding: 20px;">Certains équipements ne seront pas présents dès votre arrivée dans le logement. Ils sont indiqués dans la liste ci-dessous par l'icone <v-icon icon="mdi-chat-question"></v-icon>. N'hésitez pas à nous demander, si besoin, avant ou pendant votre séjour.</p>
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
                    >
                       <v-tooltip
                           v-if="item.ask"
                           activator="parent"
                           location="end"
                       >
                          Demandez-nous!
                       </v-tooltip>
                    </v-list-item>
                    <br />
                </div>
            </v-list>

        </v-card></v-bottom-sheet>

    <br/><br/><br/><v-divider></v-divider>
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
            <v-tabs-window-item :value="1" height="600px">
                <br/><br/><br/>
                Plus d'information à venir sur l'utilisation du four
                <br/><br/><br/>
            </v-tabs-window-item>
            <v-tabs-window-item :value="2" height="600px">
                <br/><br/><br/>
                Plus d'information à venir sur l'utilisation de la télévision
                <br/><br/><br/>
            </v-tabs-window-item>
            <v-tabs-window-item :value="3" height="600px">
                <br/><br/><br/>
                Plus d'information à venir sur l'utilisation du wifi
                <br/><br/><br/>
            </v-tabs-window-item>
        </v-tabs-window>
        
    </v-card></v-bottom-sheet>

    <br/><br/><br/><v-divider></v-divider>
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
    
    <br/><br/><br/><v-divider></v-divider>
    <h3>Jardin extérieur</h3><br />

    <v-row>
        <v-col cols="12" md="4">
            <v-card
                class="mx-auto"
                prepend-icon="mdi-grill"
                subtitle="Orienté au sud-est"
                width="250"
            >
                <template v-slot:title>
                <span class="font-weight-black">Terrasse extérieure</span>
                </template>
            </v-card><br/>
        </v-col>
        <v-col cols="12" md="4">
            <v-card
                class="mx-auto"
                prepend-icon="mdi-grill"
                subtitle="Plancha"
                width="250"
            >
                <template v-slot:title>
                <span class="font-weight-black">Barbecue</span>
                </template>
            </v-card><br/>
        </v-col>
        <v-col cols="12" md="4">
            <v-card
                class="mx-auto"
                prepend-icon="mdi-emoticon-cool"
                subtitle="Crème solaire non fournie"
                width="250"
            >
                <template v-slot:title>
                <span class="font-weight-black">Chaises longues</span>
                </template>
            </v-card><br/>
        </v-col>
    </v-row>

    <br/><br/><v-divider></v-divider>
    <h3>Gîte rénové en 2020</h3><br />

    <p>Avant que votre logement ne prenne sa forme actuelle, il a connu plusieurs décennies sans habitant. Les travaux de rénovation ont débuté en 2020 pour passer d'une maison avec des planchers en terre battue au gîte que vous voyez aujourd'hui.</p><br/>

    <div align="center">
        <v-btn @click="switchTravaux(true)" style="margin: 15px;">
           Photos d'avant travaux
        </v-btn>
        <v-btn @click="switchTravaux(false)">
           Photos des travaux
        </v-btn>
    </div><br/>

    <br /><v-divider></v-divider>
    <h3>Sécurité du logement</h3><br />
    <p>Plus d'information à venir</p>
    <br /><br /><br />

</div>
</template>

<script>
    import equipements from '@/assets/equipments';
    import games from '@/assets/games';
    import images from '@/assets/img/gites';
    import imagesAvantTravaux from '@/assets/img/av-travaux';
    import imagesTravaux from '@/assets/img/travaux';

    export default {
        name: 'Gite',
        data: () => ({
          shownPicture: 0,
          tabGuide: 1,
          imgCarousel: images,
          showCarBtn: false,
          games: games,
          sheetEquipmt: false,
          sheetGuide: false,
          sheetGame: false,
          equipements: equipements,
          showImgTravaux: false,
          imagesDeck: "Photos du gîte",
          dialogPics: false
        }),
        methods: {
           switchTravaux(which) {
               if(which){
                this.imgCarousel = imagesAvantTravaux;
                this.imagesDeck = "Gîte avant travaux";
               } else {
                this.imgCarousel = imagesTravaux;
                this.imagesDeck = "Gîte pendant travaux";
               }
               this.showCarBtn = true;
               this.shownPicture = 0;
               window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
              });
            },
            switchGite() {
               this.imgCarousel = images;
               this.showCarBtn = false;
               this.shownPicture = 0;
               this.imagesDeck = "Photos du gîte";
            },
      }
    };
</script>

<style scoped>
.text-decoration-line-through{
    text-decoration-thickness: 1.5px !important;
}
</style>