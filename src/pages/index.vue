<template>
  <v-layout>

    <v-app-bar
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
      prominent
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-title>Title</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <div>
        <div v-if="isMobile">
          <v-bottom-navigation
            v-model="idxSelMainMenuItem"
            color="teal"
            grow
          >
            <v-btn v-for="(item, index) in mainMenuItem" :key="index">
              <v-icon>{{ item.icon }}</v-icon>{{ item.title }}
            </v-btn>
          </v-bottom-navigation>

        </div>
        <div v-else>
          <v-navigation-drawer
            image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            theme="dark"
            permanent
          >
            <v-list nav>
              <v-list-item v-for="(item, index) in mainMenuItem"
                :key="index"
                :prepend-icon="item.icon"
                :title="item.title"
                :value="item.value"
                @click="selMainMenuItem = item">
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

        </div>
      </div>

    <v-main style="height: 400px"></v-main>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      isMobile: false,
      idxSelMainMenuItem: 0,
      selMainMenuItem: {
          icon: 'mdi-account-supervisor-circle',
          title: 'Foo',
          value: 'foo',
      },
      mainMenuItem: [
        {
          icon: 'mdi-account-supervisor-circle',
          title: 'Foo',
          value: 'foo',
        },
        {
          icon: 'mdi-account-supervisor-circle',
          title: 'Bar',
          value: 'bar',
        },
        {
          icon: 'mdi-account-supervisor-circle',
          title: 'Fizz',
          value: 'fizz',
        },
        {
          icon: 'mdi-account-supervisor-circle',
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),
    mounted() {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        this.isMobile = window.innerWidth <= 768;
      }
    },
    watch: {
      selMainMenuItem(newValue) {
        this.idxSelMainMenuItem = this.mainMenuItem.indexOf(newValue);
      },
      idxSelMainMenuItem(newValue) {
        this.selMainMenuItem = this.mainMenuItem[newValue];
      }
    }
  }
</script>