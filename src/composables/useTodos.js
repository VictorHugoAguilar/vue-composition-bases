import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
    const store = useStore();

    const currentTab = ref("all");

    return {
        currentTab,

        all: computed(() => store.getters["all"]),
        completed: computed(() => store.getters["completed"]),
        getTodosByTab: computed(() => store.getters["getTodoByTab"](currentTab.value)),
        pending: computed(() => store.getters["pending"]),

        // Methods
        toogleTodo: (id) => store.commit("toggleTodo", id),
        createTodo: (text) => store.commit("createTodo", text),
    };
};

export default useTodos;
