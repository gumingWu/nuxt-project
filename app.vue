<script setup lang="ts">
const store = useStateStore()
</script>

<template>
  <div style="font-size: 40px; line-height: 60px;">
    <div>Hi! I'm nuxt project!</div>
    <div>
      Here state: {{ store.state }}
      <button @click="store.setState">setState</button>
    </div>
  </div>
</template>
