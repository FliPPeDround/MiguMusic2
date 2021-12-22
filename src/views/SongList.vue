<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.query.id)
</script>

<template>
  <h1>songList</h1>
</template>
