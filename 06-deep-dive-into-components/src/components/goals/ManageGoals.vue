<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <!-- teleport is used to display the contained element into the element defined
      in the "to" property; which accepts css selector. The element will be displayed
      inside the first element that satisfies the passed selector. 
    -->
    <teleport to="body">
      <error-alert v-if="isInputInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter a goal...</p>
        <button @click="confirmError">Ok</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "../base/ErrorAlert.vue";
export default {
  components: {
    ErrorAlert
  },
  data: function () {
    return {
      isInputInvalid: false
    };
  },
  methods: {
    setGoal: function () {
      const value = this.$refs.goal.value;
      this.isInputInvalid = value === "";
    },
    confirmError: function () {
      this.isInputInvalid = false;
    }
  }
};
</script>
