<template>
    <ul>
        <!-- Antes se haría algo así  -->
        <!-- <li v-for="user in users" :key="user.id">
            <h1>Hols</h1>
            <img :src="user.avatar" :alt="user.id" />
            <h4>{{ user.first_name }} {{ user.last_name }}</h4>
            <h6> {{ user.email }} </h6>
        </li> -->
        <!-- Con la utilización de slot lo que hacemos es retornar un 
            objeto para utilizar el templates desde donde se llama -->
        <slot v-for="user in users" :key="user.id" :user="user">
            Si no envian contenido
        </slot>
    </ul>
</template>

<script>
export default {
    props: {
        users: {
            type: Array,
            required: true
        }
    }

}
</script>

<style scoped>
ul {
    list-style: none;
}
</style>