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

</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex';

export default {

    setup() {
        const store = useStore()

        const currentTab = ref('all')

        return {
            currentTab,

            all: computed(() => store.getters['all']),
            completed: computed(() => store.getters['completed']),
            getTodosByTab: computed(() => store.getters['getTodoByTab'](currentTab.value)),
            pending: computed(() => store.getters['pending']),

            // methods
            toogleTodo: (id) => store.commit('toggleTodo', id)
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