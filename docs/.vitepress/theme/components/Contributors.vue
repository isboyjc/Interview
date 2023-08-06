<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  list:{
    type: String,
    default: () => '[]'
  }
})

const { frontmatter } = useData()




const contributors = computed(() => {
  let localC = (frontmatter.value?.contributors || '').split(',')
  let propsC = (JSON.parse(props.list) || []).map(v => v.name)
  let mergedC = localC.concat(propsC).map(v => v.toLowerCase()).filter(v => v)
  
  // console.log('contributors', localC, propsC, Array.from(new Set(mergedC)))

  return Array.from(new Set(mergedC))
})
</script>

<template>
  <div class="flex flex-wrap gap-4 pt-2">
    <div v-for="name of contributors" :key="name" class="flex gap-2 items-center">
      <a :href="`https://github.com/${name}`" rel="noreferrer"  :aria-label="`${name} on GitHub`" target="_blank">
        <img :src="`https://github.com/${name}.png`" class="w-8 h-8 rounded-full" :alt="`${name}'s avatar`">
      </a>
      {{ name }}
    </div>
  </div>
</template>