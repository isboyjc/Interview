<script setup>
import _contributors from "./../../../contributors.json"

// console.log(_contributors)
</script>

<template>
  <div class="vp-doc mx-auto">
    <h2 class="op50 font-normal pt-5 text-center">
      感谢以下所有人的贡献与参与
    </h2>
    <p class="op40 font-normal text-center text-sm">
      以下排名根据提交数排序，无特别意义（参与或主动提 PR 通过审批即可加入）
    </p>
  </div>
  <div class="text-lg max-w-200 text-center leading-7 p-10 mx-auto">
    <div class="flex wrap gap-1 justify-center">
      <a v-for="name of _contributors" :key="name" :href="`https://github.com/${name}`" rel="noreferrer" class="m-0" :aria-label="`${name} on GitHub`" target="_blank">
        <img :src="`https://github.com/${name}.png`" class="min-w-10 min-h-10 h-10 w-10 rounded-full" :alt="`${name}'s avatar`">
      </a>
    </div>
    <br>
  </div>
</template>