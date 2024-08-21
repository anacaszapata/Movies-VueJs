<template>
 <h1>DETALLES DE LA PELICULA ID {{ movieId }}</h1>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const movieId = route.params.id as string
</script>

<style lang="scss" scoped>
h1 {
    color: $white;
    text-align: center;
    margin-top: 50px;
}
</style>