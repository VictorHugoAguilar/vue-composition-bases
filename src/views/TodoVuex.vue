<template>
    <h1>Lista de tareas</h1>
    <h4>Pendientes: {{ pending.length }}</h4>

    <hr />

    <button :class="{ 'active': currentTab === 'all' }" @click="currentTab = 'all'">Todos</button>
    <button :class="{ 'active': currentTab === 'pending' }" @click="currentTab = 'pending'">Pendientes</button>
    <button :class="{ 'active': currentTab === 'completed' }" @click="currentTab = 'completed'">Completados</button>

    <div>
        <ul>
            <li :class="{ 'completed': todo.completed }" v-for="todo in getTodosByTab" :key="todo.id"
                @dblclick="toogleTodo(todo.id)">
                {{ todo.text }}
            </li>
        </ul>
    </div>

    <button @click="openModal"> Crear tarea </button>

    <modal v-if="isOpen" @on:close="isOpen = false">
        <template v-slot:header>
            <h2>Nueva tarea: </h2>
        </template>
        <template v-slot:body>
            <form @submit.prevent="createTodo(txtNewTarea); closeModal()">
                <input type="text" placeholder="nueva tarea" v-model="txtNewTarea" />
                <br />
                <br />
                <button type="submit">Crear</button>
            </form>
        </template>
    </modal>

</template>

<script>
import useTodos from '@/composables/useTodos';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

export default {
    components: {
        Modal
    },

    setup() {
        const { currentTab, getTodosByTab, pending, toogleTodo, createTodo } = useTodos();

        const isOpen = ref(false)

        return {
            isOpen,
            txtNewTarea: ref(),

            currentTab,
            getTodosByTab,
            pending,

            closeModal: () => isOpen.value = false,
            createTodo,
            openModal: () => isOpen.value = true,
            toogleTodo,
        }
    }

}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 300px;
    text-align: left;
}

li {
    cursor: pointer;
}

.active {
    background-color: #2c3e50;
    color: white
}

.completed {
    text-decoration: line-through;
}
</style>