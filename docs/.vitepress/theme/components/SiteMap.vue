<script setup>
import Link from "./Link.vue"
import { useData } from 'vitepress'

import sidebarCatalogTree from "/interview_dir.json"
import navbarCatalogTree from "/interview_nav.json"

console.log('sidebarCatalogTree: ', sidebarCatalogTree)
console.log('navbarCatalogTree: ', navbarCatalogTree)

let coreData = navbarCatalogTree.map((v) => {
  if(!v?.items){
    return sidebarCatalogTree.find(j => j.key === v.key)
  }

  return v
}).reverse()


const data = useData()

const nav = data.site.value.themeConfig.nav
console.log(nav.find(v => v.key === 'quick'))

const friendlyLinks = [
  {
    text: 'Toolsdog',
    link: 'http://toolsdog.isboyjc.com/'
  },
  {
    text: '占位1',
    link: 'https://isboyjc.com'
  },
  {
    text: '占位2',
    link: 'https://isboyjc.com'
  },
]

const items = [
  nav.find(v => v.key === 'quick'),
  ...coreData, 
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