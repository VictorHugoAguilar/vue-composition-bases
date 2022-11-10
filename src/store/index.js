import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default createStore({
    state: {
        todos: [
            { id: "1", text: "Recolectar las piedras del infinito", completed: false },
            { id: "2", text: "Piedra del alma", completed: true },
            { id: "3", text: "Piedra del poder", completed: true },
            { id: "4", text: "Piedra de realidad", completed: false },
            { id: "5", text: "Conseguir nuevos secuaces", completed: false },
        ],
    },
    getters: {
        pending(state) {
            return state.todos.filter((todo) => !todo.completed);
        },
        all(state) {
            return state.todos;
        },
        completed(state) {
            return state.todos.filter((todo) => todo.completed);
        },
        getTodoByTab: (_, getters) => (tab) => {
            switch (tab) {
                case "all":
                    return getters.all;
                case "pending":
                    return getters.pending;
                case "completed":
                    return getters.completed;
            }
        },
    },
    mutations: {
        toggleTodo(state, id) {
            const todoIdx = state.todos.findIndex((t) => t.id === id);
            state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
        },
        createTodo(state, text = "") {
            if (text.length <= 1) return;
            state.todos.push({ id: uuidv4(), completed: false, text: text });
        },
    },
    actions: {},
    modules: {},
});
