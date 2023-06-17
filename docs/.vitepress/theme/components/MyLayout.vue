<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-after>
      <!-- 111 -->
    </template>
    <template #aside-ads-after>
      <!-- 333 -->
    </template>
  </Layout>
</template>

<style>
.VPHome{
  padding-bottom: 0!important;
}
</style>