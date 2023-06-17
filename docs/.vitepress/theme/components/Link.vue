<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
  <a class="link" v-bind="attrs"><slot /></a>
</template>


<style scoped>
</style>