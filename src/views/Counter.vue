<template>
    <h1>Counter Vue</h1>
    <h3> {{ counter }} </h3>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
</template>

<script>
import useCounter from '@/composables/useCounter';

export default {
    name: 'counter-view',
    props: {},
    emits: [],
    setup() {
        const { counter, decrease, increase } = useCounter(1);

        return {
            counter,
            decrease,
            increase
        };
    }
}
</script>

<style>

</style>
