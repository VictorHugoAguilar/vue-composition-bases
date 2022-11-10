<template>
  <div class="home">
    <h1>React vs Ref</h1>

    <h3>{{ ironman }} <button @click="changeIronman">Cambiar Ironman</button> </h3>
    <h3>{{ hulk }} <button @click="changeHulk">Cambiar Hulk</button></h3>

    <h3>Ironman: {{ ironmanIsAlive }}</h3>
    <h3>Hulk: {{ hulkIsAlive }}</h3>
    <button @click="changeStatus">Cambiar estado</button>

  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'HomeView',
  setup() {

    const ironman = ref({ name: 'Tony', age: 40 })
    const hulk = reactive({ name: 'Bruce', age: 40 })

    let ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      // ironmanIsAlive = reactive(!ironmanIsAlive);
      hulkIsAlive.value = !hulkIsAlive.value
    }

    return {
      ironman,
      hulk,

      ironmanIsAlive,
      hulkIsAlive,

      changeStatus,

      changeIronman: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 41
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 41
      }

    }
  }
}
</script>