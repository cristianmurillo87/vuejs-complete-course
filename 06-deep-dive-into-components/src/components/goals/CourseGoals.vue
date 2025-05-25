<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-property="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data: function () {
    return {
      goals: ["Finish the course", "Learn Vue"]
    };
  }
};
</script>
