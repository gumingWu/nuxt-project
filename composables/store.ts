export const useStateStore = defineStore('nuxtStore', () => {
  const state = ref(0)

  const setState = () => {
    state.value = state.value + 1
  }

  return {
    state,
    setState,
  }
})