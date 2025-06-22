<template>
  <section class="container">
    <h2>{{ fullName }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge(37)">Change age</button>

    <div>
      <input type="text" placeholder="First name" @input="setFirstName" v-model="firstName" />
      <input type="text" placeholder="Last name" @input="setLastName" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { reactive, ref, computed, watch } from 'vue'

export default {
  setup() {
    // ref can be used with aany data type
    const firstName = ref('Cristian')
    const lastName = ref('Murillo')
    const userAge = ref(30)
    const userName = ref('')

    // reactive must always be passed and object
    const user = reactive({
      name: 'Cris',
      age: 30,
    })

    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value
    })

    watch([userAge, userName], (currentValues, previousValues) => {
      console.log('Old age:', previousValues[0])
      console.log('New age:', currentValues[0])

      console.log('Old username:', previousValues[1])
      console.log('New username:', currentValues[1])
    })

    const setAge = (age) => {
      user.age = age
      userAge.value = age
    }

    const setFirstName = (event) => {
      firstName.value = event.target.value
    }

    const setLastName = (event) => {
      lastName.value = event.target.value
    }

    return { user, firstName, lastName, fullName, setAge, setFirstName, setLastName }
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
