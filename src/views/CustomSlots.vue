<template>
    <h1>Aprendiendo con Slot</h1>
    <button @click="openModal">Abrir modal</button>

    <modal title="titulo del modal" v-if="isOpen" @on:close="closeModal">
        <template v-slot:header>
            <h2>Titulo Modal</h2>
        </template>
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi fugiat corporis voluptate
                perspiciatis?</p>
        </template>
        <template v-slot:footer>
            <button @click="closeModal">Cerrar</button>
        </template>

        <template v-slot:exposed="{ newTitle }">
            <h5>{{ newTitle }}</h5>
        </template>
    </modal>
</template>

<script>
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

export default {
    components: {
        Modal
    },
    setup() {

        const isOpen = ref(false);

        return {
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }

    }

}
</script>

<style scoped>

</style>