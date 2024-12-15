<template>
  <div>
    <v-alert
        v-model="alert"
        color="primary"
        icon="mdi-bag-checked"
        :rounded="false"
        prominent
        closable
      >
      Bienvenue sur ce site prévu pour vous accompagner avant et pendant votre séjour. Préparez vos valises, votre planning et passez de bons moments à Bazoches-Lès-Bray.
    </v-alert>
    <v-container fluid>
      <v-row>
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
              <v-avatar :image="logoG2F"></v-avatar>
              <v-spacer></v-spacer>
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

            <v-card-actions class="justify-center">
              <v-btn @click="radioButtonTransport('showCar');" icon="mdi-car" size="small" color="medium-emphasis"></v-btn>
              <v-btn @click="radioButtonTransport('showTrain')" icon="mdi-train" size="small" color="medium-emphasis"></v-btn>
              <v-btn @click="radioButtonTransport('showBike')" icon="mdi-bike" size="small" color="medium-emphasis"></v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="showCar">
                <v-divider></v-divider>
                <v-timeline density="compact" style="margin-left: 5px;">
                  <v-timeline-item icon="mdi-highway" dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <strong>Par l'autoroute A5</strong>
                      </div>
                      <div>Sur l'autoroute A5 en provenance de l'Ouest ou de l'Est, sortir à "Marolles sur Seine" (Sortie n°18).</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item icon="mdi-highway" dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <strong>Par l'autoroute A6/A19</strong>
                      </div>
                      <div>En provenance de l'A6, prendre l'A19 qui assure la jonction entre l'A6 et l'A5. Sortir à "Pont sur Yonne" / "Sens" (Sortie n°1).</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </div>
            </v-expand-transition>
            <v-expand-transition>
              <div v-show="showTrain">
                <v-divider></v-divider>
                <v-timeline density="compact" style="margin-left: 5px;">
                  <v-timeline-item size="large" dot-color="white" :fill-dot="true">
                    <template v-slot:icon>
                      <v-avatar :image="ligneR" size="30" :rounded="false" style="margin-left:2px;"></v-avatar>
                    </template>
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        Via la ligne R au départ de <strong>Paris</strong>
                      </div>
                      <div>Descendre à <strong>Montereau</strong>. Une ligne de bus permet de rejoindre directement Bazoches-Lès-Bray depuis la gare de Montereau-Fault-Yonne.</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item size="large" dot-color="white" :fill-dot="true">
                    <template v-slot:icon>
                      <v-avatar :image="ligneP" size="30" :rounded="false" style="margin-left:2px;"></v-avatar>
                    </template>
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        Via la ligne P au départ de <strong>Paris</strong>
                      </div>
                      <div>Descendre à <strong>Provins</strong> ou <strong>Longueville</strong>. Une ligne de bus permet de rejoindre Bray sur Seine depuis la gare de Provins.</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item icon="mdi-train" dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        Via le TER Grand Est en passant par <strong>Troyes</strong>
                      </div>
                      <div>Descendre à <strong>Nogent sur Seine</strong>. Il vous faudra une voiture ou un covoiture pour rejoindre Bazoches-Lès-Bray.</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item icon="mdi-train" dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        Via le TER Bourgognes en passant par <strong>Sens</strong>
                      </div>
                      <div>Descendre à <strong>Sens</strong>. Il vous faudra une voiture ou un covoiture pour rejoindre Bazoches-Lès-Bray.</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </div>
            </v-expand-transition>
            <v-expand-transition>
              <div v-show="showBike">
                <v-divider></v-divider>
                <v-timeline density="compact" style="margin-left: 5px;">
                  <v-timeline-item dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <strong>Depuis la gare de Nangis :</strong>
                      </div>
                      <div>Plus d'info à venir</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <strong>Depuis la gare de Longueville :</strong>
                      </div>
                      <div>Plus d'info à venir</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <strong>Depuis la gare de Montereau :</strong>
                      </div>
                      <div>Plus d'info à venir</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <strong>Depuis la gare de Sens :</strong>
                      </div>
                      <div>Plus d'info à venir</div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item dot-color="blue">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <strong>Depuis la gare de Nogent sur Seine :</strong>
                      </div>
                      <div>Plus d'info à venir</div>
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
  </div>
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
          showBike: false,
          ligneP:ligneP,
          ligneR:ligneR,
          alert: true,
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
        methods: {
          radioButtonTransport(sel) {
            for (let a of ['showCar', 'showBike', 'showTrain']){
              if(a != sel){
                this[a] = false;
              }
            }
            this[sel] = !this[sel];
          }
        }
    };
</script>

<style scoped>
.v-carousel {
  height: 100vh;
  width: 100vw;
}
</style>