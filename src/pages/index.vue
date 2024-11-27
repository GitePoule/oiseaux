<template>

 <v-parallax :src="welcomeImg"></v-parallax>

</template>

<script>
    import welcomeImg from '@/assets/img/gites/home.jpg';
    export default {
        name: 'Bienvenue',
        data: () => ({
          welcomeImg: welcomeImg,
        })
    };
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>