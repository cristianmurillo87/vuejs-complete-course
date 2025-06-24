export default function useAlert(initialVisibility = false) {
  const alertIsVisible = ref(initialVisibility)

  function showAlert() {
    alertIsVisible.value = true
  }

  function hideAlert() {
    alertIsVisible.value = false
  }

  return [alertIsVisible, showAlert, hideAlert]
}
