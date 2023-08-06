<script setup>
import Link from "./Link.vue"
import { useData } from 'vitepress'

import sidebarCatalogTree from "/interview_dir.json"
import navbarCatalogTree from "/interview_nav.json"

let coreData = [
  ...navbarCatalogTree.find(v => v.key === 'interview/frontend')?.items || [],
  ...navbarCatalogTree.find(v => v.key === 'interview/backend')?.items || [],
  ...navbarCatalogTree.find(v => v.key === 'interview/base')?.items || []
]


const data = useData()

const friendlyLinks = [
  {
    text: 'isboyjc · 不正经的前端',
    link: 'https://isboyjc.com'
  },
  {
    text: 'isboyjc · 掘金',
    link: 'https://juejin.cn/user/2999123452373735'
  },
  {
    text: 'isboyjc · GitHub',
    link: 'https://github.com/isboyjc'
  },
  {
    text: 'isboyjc · Toolsdog',
    link: 'http://toolsdog.isboyjc.com/'
  }
]

const nav = data.site.value.themeConfig.nav

const items = [
  {
    text: '快速了解',
    items: [
      {text: '快速了解', link: '/quick/010_quick'},
      { text: "新增题目", link: "/quick/030_add" },
      { text: '发现错误', link: '/quick/040_error' }
    ]
  },
  ...coreData, 
  nav.find(v => v.key === 'about'),
  {
    text: '友情链接',
    items: friendlyLinks
  }
]
</script>

<template>
  <section id="sitemap">
    <div class="container">
      <div class="sitemap-col" v-for="col in items">
        <Link v-if="!col?.items" :href="col?.depthLastKey || col.link">{{ col.text }}</Link>
        <h4 v-else>{{ col.text }}</h4>
        <ul>
          <li v-for="row in col.items">
            <Link :href="row?.depthLastKey || row.link">{{ row.text }}</Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
#sitemap {
  background: var(--vp-c-bg-soft);
}

#sitemap .container {
  max-width: 900px;
  margin: 0 auto;
  columns: 1;
  padding: 24px 32px;
}

@media (min-width: 768px) {
  #sitemap .container {
    columns: 2;
  }
}

@media (min-width: 1024px) {
  #sitemap .container {
    columns: 3;
  }
}

#sitemap h4 {
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25em;
}

.sitemap-col {
  margin-bottom: 2em;
  break-inside: avoid;
}

#sitemap .link {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}
</style>