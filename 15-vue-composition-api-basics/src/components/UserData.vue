<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['firstName', 'lastName', 'age'],
  // the contex contains among others the attrs, emit and slots properties
  // which can be used for emitting custom events
  // and use the "slot" elements in the template
  setup(props, context) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName
    })

    console.log('context', context)

    return {
      userName,
    }
  },
}
</script>
