<template>
    <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
    <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
    <template v-else>
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />

        <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
    </template>
</template>

<script>
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import usePokemon from '@/composables/usePokemon';
import { watch } from '@vue/runtime-core';

export default {

    setup() {
        const route = useRoute()
        // console.log('route.params.id', route.params.id)
        const { pokemon, isLoading, errorMessage, searchPokemon } = usePokemon(route.params.id);

        watch(
            () => route.params.id,
            (value, _) => searchPokemon(value)
        )

        onBeforeRouteLeave(() => {
            // console.log('salir o cambiar ruta -> onBeforeRouteLeave');
            const answer = window.confirm('Esta seguro?');
            if (!answer) return false;
        })

        return {
            pokemon, isLoading, errorMessage
        }

    }

}
</script>

<style>

</style>