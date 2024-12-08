<template>
    <v-container fluid>
      <v-snackbar
        v-model="snackbar"
      >
        Fonctionnalité pas encore disponible

        <template v-slot:actions>
          <v-btn
            color="pink"
            variant="text"
            @click="snackbar = false"
          >
            Fermer
          </v-btn>
        </template>
      </v-snackbar>
      <v-row dense>
        <v-col cols="12" md="6">
          <v-card>
            <v-img
              :src="imgBack3"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
              cover
            >
              <v-card-title class="text-white">Réserver votre séjour</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-avatar :image="logoG2F"></v-avatar>
              <v-btn href="https://www.gites-de-france.com/fr/ile-de-france/seine-et-marne/lombre-des-oiseaux-77g624">Réserver</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>


        <v-col cols="12" md="6">
          <v-card>
            <v-img
              :src="imgBack2"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
              cover
            >
              <v-card-title class="text-white">Se rendre à Bazoches-Lès-Bray</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="showCar = !showCar; showTrain = false;" icon="mdi-car" size="small" color="medium-emphasis"></v-btn>
              <v-btn @click="showCar = false; showTrain = !showTrain;" icon="mdi-train" size="small" color="medium-emphasis"></v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="showCar">
                <v-divider></v-divider>
                <v-timeline density="compact">
                  <v-timeline-item size="x-small" dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <strong>Bla</strong> @ Oh
                      </div>
                      <div>Comme cela</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item size="x-small" dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <strong>Bla</strong> @ Oh
                      </div>
                      <div>Comme cela</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </div>
            </v-expand-transition>
            <v-expand-transition>
              <div v-show="showTrain">
                <v-divider></v-divider>
                <v-timeline density="compact">
                  <v-timeline-item size="medium" dot-color="white">
                    <template v-slot:icon>
                      <v-avatar :image="ligneR" size="35" :rounded="false"></v-avatar>
                    </template>
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        Via la ligne R au départ de <strong>Paris</strong>
                      </div>
                      <div>Descendre à <strong>Montereau</strong>. Une ligne de bus permet de rejoindre directement Bazoches-Lès-Bray depuis la gare de Montereau-Fault-Yonne.</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item size="medium" dot-color="white">
                    <template v-slot:icon>
                      <v-avatar :image="ligneP" size="29" :rounded="false"></v-avatar>
                    </template>
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        Via la ligne P au départ de <strong>Paris</strong>
                      </div>
                      <div>Descendre à <strong>Provins</strong>. Une ligne de bus permet de rejoindre Bray sur Seine depuis la gare de Provins.</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item size="x-small" dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        Via le TER Grand Est en passant par <strong>Troyes</strong>
                      </div>
                      <div>Comme cela</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item size="x-small" dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        Via le TER Bourgognes en passant par <strong>Sens</strong>
                      </div>
                      <div>Comme cela</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card>
            <v-img
              :src="imgBack1"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400px"
              cover
            >
              <v-card-title class="text-white">Préparer mon séjour</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn href="/gite" prepend-icon="mdi-home-map-marker">Découvrir mon logement</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card>
            <v-img
              :src="imgBack4"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
              cover
            >
            <v-card-title class="text-white">Préparer mon séjour</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn href="/alentours" prepend-icon="mdi-lightning-bolt">Découvrir les alentours</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>
    </v-container>

</template>

<script>
    import welcomeImg from '@/assets/img/gites/home.jpg';
    import logoG2F from "@/assets/img/gites-de-france.png";
    import logo77 from "@/assets/img/logo_77.png";
    import logoOdO from "@/assets/img/IMG_20241128_234853.jpg";
    import imgBack1 from "@/assets/img/gites/int3.jpg";
    import imgBack2 from "@/assets/img/photo-vtt-bassée.jpg";
    import imgBack3 from "@/assets/img/gites/home.jpg";
    import imgBack4 from "@/assets/img/canal.jpg"; 
    import ligneP from "@/assets/img/transport/ligneP.png"   
    import ligneR from "@/assets/img/transport/ligneR.png"   

    export default {
        name: 'Bienvenue',
        data: () => ({
          welcomeImg: welcomeImg,
          logoG2F: logoG2F,
          logo77: logo77,
          logoOdO: logoOdO,
          imgBack1: imgBack1,
          imgBack2: imgBack2,
          imgBack3: imgBack3,
          imgBack4: imgBack4,
          snackbar: false,
          showCar: false,
          showTrain: false,
          ligneP:ligneP,
          ligneR:ligneR,
        }),
        computed: {
    carouselHeight() {
      var toolbarHeight = 64;
      if (window.innerWidth <= 768) {
         toolbarHeight = 128;
      }
      return `calc(100vh - ${toolbarHeight}px)`;
    },
  },
    };
</script>

<style scoped>
.v-carousel {
  height: 100vh;
  width: 100vw;
}
</style>