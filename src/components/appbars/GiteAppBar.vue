<template>
    <v-app-bar prominent >
        <v-app-bar-title>Votre gîte</v-app-bar-title>
        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn @click="toggleTheme" icon>
            <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>
<script>
  export default {
    name: 'GiteAppBar'
  }
</script>