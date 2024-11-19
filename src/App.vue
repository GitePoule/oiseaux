<template>
  <v-app>
       
    <!-- TODO: Passer les items du menus en props-->
    <LeftAndBottomNavigation />

    <component :is="currentAppBarComponent"></component>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import AccueilAppBar from '@/components/appbars/AccueilAppBar.vue';
  import GiteAppBar from '@/components/appbars/GiteAppBar.vue';
  import AlentourAppBar from '@/components/appbars/AlentoursAppBar.vue';
  import LeftAndBottomNavigation from '@/components/LeftAndBottomNavigation.vue';
  export default {
    data: () => ({
      currentAppBarComponent: AccueilAppBar
    }),
    components: {
      LeftAndBottomNavigation
    },
    watch: {
      $route(to) {
        this.updateAppBarComponent(to.name);
      }
    },
    methods: {
      updateAppBarComponent(routeName) {
        switch (routeName) {
          case '':
            this.currentAppBarComponent = AccueilAppBar;
            break;
          case '/Bienvenue':
            this.currentAppBarComponent = AccueilAppBar;
            break;
          case '/Gite': 
            this.currentAppBarComponent = GiteAppBar;
            break;
         case '/Alentours':
            this.currentAppBarComponent = AlentourAppBar;
            break;
          default:
            this.currentAppBarComponent = AccueilAppBar;
        }
      }
    },
  };
</script>
