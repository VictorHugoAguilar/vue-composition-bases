<template>
    <h2 v-if="isLoading">Espera por favor...</h2>

    <h2 v-else>Usuarios</h2>

    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <ul>
            <li v-for="user in users" :key="user.id">
                <img :src="user.avatar" :alt="user.id" />
                <h4>{{ user.first_name }} {{ user.last_name }}</h4>
                <h6> {{ user.email }} </h6>
            </li>
        </ul>
    </div>

    <button @click="previusPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    <span>Pagina: {{ currentPage }}</span>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import useUsers from '@/composables/useUsers';

export default {

    setup() {
        const isLoading = ref(true);
        const users = ref([])
        const currentPage = ref(1)
        const errorMessage = ref("")

        const getUsers = async (page = 1) => {
            if (page <= 0) page = 1
            isLoading.value = true

            const { data } = await axios.get(`https://reqres.in/api/users`, {
                params: {
                    page
                }
            })

            if (data.data.length > 0) {
                users.value = data.data
                currentPage.value = page
                errorMessage.value = null
            } else if (currentPage.value > 0) {
                errorMessage.value = 'No hay más usuarios'
            }
            isLoading.value = false

        }

        getUsers()

        return {
            currentPage,
            errorMessage,
            isLoading,
            users,
            nextPage: () => getUsers(currentPage.value + 1),
            previusPage: () => getUsers(currentPage.value + -1),
        }
    }

}
</script>

<style scoped>
h2 {
    text-align: center;
    width: 100%;
}

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 250px;
}
</style>