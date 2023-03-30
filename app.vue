<script setup lang="ts">
const store = useStateStore()
const pStore = usePluginStateStore()
</script>

<template>
  <div style="font-size: 40px; line-height: 60px;">
    <div>Hi! I'm nuxt project!</div>
    <div>
      Here state: {{ store.state }}
      <button @click="store.setState">setState</button>
    </div>
    <div>
      Here plugin state: {{ pStore.pState }}
      <button @click="pStore.setPState">setPState</button>
    </div>
  </div>
</template>
