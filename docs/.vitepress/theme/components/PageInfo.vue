<script setup>
</script>

<template>
  <div>
    <section
      class="border-b-1 border-[var(--vp-c-divider)] w-full border-b-solid mt-[24px] pb-[12px] flex gap-[12px] mb-[12px] flex-wrap max-w-[85%]"
    >
      <!-- <div class="flex gap-[4px] items-center">
        作者: <span>{{ author }}</span>
      </div>
      <div class="flex gap-[4px] items-center">
        字数统计:<span>{{ words }} 字</span>
      </div>
      <div class="flex gap-[4px] items-center">
        阅读时长:<span>{{ readTime }} 分钟</span>
      </div> -->
      <div class="flex gap-[4px] items-center">
        阅读量:<span id="busuanzi_container_page_pv"><span id="busuanzi_value_page_pv" /></span>
      </div>
    </section>
  </div>
</template>