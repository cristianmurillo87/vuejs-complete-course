<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition
    name="modal-animation"
    @before-enter="beforeEnter"
    @before-leave="beforeLeave"
  >
    <dialog v-if="open" open>
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ["open"],
  emits: ["close"],
  methods: {
    beforeEnter(el) {
      console.log("Before enter", el);
    },
    beforeLeave(el) {
      console.log("Before leave", el);
    }
  }
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
}

.modal-animation-enter-active {
  animation: modal 0.5s ease-out;
}

.modal-animation-leave-active {
  animation: modal 0.5s ease-in reverse;
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-enter-to,
.modal-animation-leave-from {
  opacity: 1;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}
</style>
