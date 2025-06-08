export default {
  finalCounter(currentState) {
    return currentState.counter * 2;
  },
  normalizedCounter(currentState) {
    const finalCounter = currentState.counter * 3;

    if (finalCounter < 0) return 0;
    if (finalCounter > 100) return 100;
    return finalCounter;
  }
};
