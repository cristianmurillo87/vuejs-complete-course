<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge(37)">Change age</button>
  </section>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    // ref can be used with aany data type
    // const userName = ref('Cris')
    // const userAge = ref(30)

    // reactive must always be passed and object
    const user = reactive({
      name: 'Cris',
      age: 30,
    })

    const setAge = (age) => {
      user.age = age
    }

    return { user, setAge }
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
