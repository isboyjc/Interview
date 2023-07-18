---
layout: home
sidebar: false

title: 不正经的前端 | 八股
titleTemplate: 八股是一份开放的面试题库，我们的愿景是覆盖 90%+ IT 知识点问答，节省面试者和面试官的时间！同时也是一份结构化的知识图谱，源于学习，而不是刷题！

hero:
  name: 不正经的前端 | 八股
  text: Eight-Part Essay
  tagline: 八股是一份开放的面试题库，我们的愿景是覆盖 90%+ IT 知识点问答，节省面试者和面试官的时间！同时也是一份结构化的知识图谱，源于学习，而不是刷题！
  image:
    src: https://qiniu.isboyjc.com/picgo/202306170350886.svg
    alt: isboyjc
  actions:
    - theme: brand
      text: 快速了解
      link: /quick/010_quick
    - theme: alt
      text: 关于面试
      link: /about/010_self_introduction
    - theme: alt
      text: HTML
      link: /interview/frontend/html/010base/010010_stylization
    - theme: alt
      text: CSS
      link: /interview/frontend/css/010base/010010_css_load
    - theme: alt
      text: JavaScript
      link: /interview/frontend/javascript/core/010base/010010_stronglytype_and_weaklytype
    - theme: alt
      text: Vue
      link: /interview/frontend/vue/010base/010001_vue_version_line
    - theme: alt
      text: React
      link: /interview/frontend/react/010base/010010_react_version_line
    - theme: alt
      text: 浏览器
      link: /interview/frontend/browser/010processthread/010010_process_and_thread
    - theme: alt
      text: 网络
      link: /interview/base/network/010base/010010_osi_model
    - theme: alt
      text: Java
      link: /interview/backend/java/010base/010010_oop
features:
  - title: 安全
    icon: 🌟
    details: 尽量无错，持续更新，避免误导！
  - title: 全面
    icon: 👍
    details: 涵盖高频、小众面试问答！
  - title: 关联
    icon: 🔗
    details: 以问答的形式对琐碎的知识点关联，更易学习和理解！
  - title: 体系
    icon: ✨
    details: 关联的知识点逐步形成知识体系，更易查漏补缺！
  - title: 目的
    icon: 💡
    details: “卷” 的更有效率、更有收获！
  - title: 开放
    icon: 👀
    details: 共同纠错、讨论、输出！
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import { useData } from 'vitepress'
const data = useData()
const {icons, me} = data.theme.value 

const members = [
  {
    avatar: `https://www.github.com/${me.name}.png`,
    name: me.name,
    title: me.desc,
    desc: 'FE Developer<br/>',
    links: [
      { icon: icons.juejin, link: me.juejin },
      { icon: icons.github, link: me.github },
      { icon: 'twitter', link: me.twitter },
    ]
  },
  // {
  //   avatar: '',
  //   name: '',
  //   title: '',
  //   desc: 'FE Developer',
  //   links: [
  //     { icon: 'github', link: '' },
  //     {
  //      icon: { svg: icons.bilibili } ,link: "",
  //     },
  //   ]
  // },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      核心成员
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<HomContributors />

<HomeContent />