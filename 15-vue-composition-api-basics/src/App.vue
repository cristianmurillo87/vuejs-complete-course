<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName" :age="user.age"></user-data>
    <button @click="setAge(37)">Change age</button>

    <div>
      <input type="text" placeholder="First name" @input="setFirstName" v-model="firstName" />
      <input type="text" placeholder="Last name" @input="setLastName" ref="lastNameInputRef" />
    </div>
  </section>
</template>

<script>
import { reactive, ref, watch } from 'vue'
import UserData from './components/UserData.vue'

export default {
  components: { UserData },
  setup() {
    // ref can be used with aany data type
    const firstName = ref('Cristian')
    const lastName = ref('Murillo')
    const lastNameInputRef = ref(null)
    const userAge = ref(30)
    const userName = ref('')

    // reactive must always be passed and object
    const user = reactive({
      name: 'Cris',
      age: 30,
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
      lastName.value = lastNameInputRef.value.value
    }

    return {
      user,
      firstName,
      lastName,
      setAge,
      setFirstName,
      setLastName,
      lastNameInputRef,
    }
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
