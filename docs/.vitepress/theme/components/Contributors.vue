<script setup>
import { computed } from 'vue'
const props = defineProps({
  list:{
    type: String,
    default: () => '[]'
  }
})

const contributors = computed(() => JSON.parse(props.list) || [])

console.log(contributors)
</script>

<template>
  <div class="flex flex-wrap gap-4 pt-2">
    <div v-for="{name, hash} of contributors" :key="hash" class="flex gap-2 items-center">
      <a :href="`https://github.com/${name}`" rel="noreferrer"  :aria-label="`${name} on GitHub`" target="_blank">
        <img :src="`https://github.com/${name}.png`" class="w-8 h-8 rounded-full" :alt="`${name}'s avatar`">
      </a>
      {{ name }}
    </div>
  </div>
</template>