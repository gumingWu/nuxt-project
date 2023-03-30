import { skipHydrate } from 'pinia'

export const useStateStore = defineStore('nuxtStore', () => {
  // const state = ref(0)
  const state = useSessionStorage('nuxt-store-test', 0)

  const setState = () => {
    state.value = state.value + 1
  }

  return {
    state: skipHydrate(state),
    setState,
  }
})