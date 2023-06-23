/*
 * @LastEditTime: 2023-06-23 18:13:35
 * @Description: ...
 * @Date: 2023-02-15 01:12:53
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { defineConfig, defineConfigWithTheme } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

import path from 'path'
import { fileURLToPath } from 'url';

import {catalogGeneration, getKeyForCatalogTree, getCatalogDepthLast} from "./plugins/catalogGeneration"

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const resolve = (dir) => dir ? path.resolve(__dirname, '../', dir) : __dirname

const {
  sidebarCatalogTree,
  navbarCatalogTree
} = catalogGeneration(resolve('interview'), {
  ignoreList: [
    'interview/notype', 
    'interview/react', 
    'interview/webpack', 
    'interview/algorithm',
    'interview/framework_comparison',
  ],
  collapsed: true,
  // collapsible: false,
  // showItemNums: true,
  showItemDepthNums: true,
  fileNameHash: {
    'interview/quick': '快速了解',

    'interview/html': 'HTML',
    'interview/html/010base': '基础',
    'interview/html/020labels_attributes': '标签&属性',
    'interview/html/030form': '表单',
    'interview/html/040other': '其他',
    
    'interview/css': 'CSS',
    'interview/css/010base': '基础',
    'interview/css/020selector': '选择器',
    'interview/css/030structure_stacking': '结构&层叠',
    'interview/css/040value_unit': '值&单位',
    'interview/css/050font_text': '字体&文本',
    'interview/css/060visual_formatting': '视觉格式化',
    'interview/css/070box': '盒子',
    'interview/css/080float': '浮动',
    'interview/css/090postion': '定位',
    'interview/css/100layout': '布局',
    'interview/css/110browser': '浏览器',
    'interview/css/120other': '其他',

    'interview/javascript': 'JavaScript',
    'interview/javascript/core': '理论题',
    'interview/javascript/core/010base': '基础',
    'interview/javascript/core/020datatype': '数据类型',
    'interview/javascript/core/030object': '对象',
    'interview/javascript/core/040array': '数组',
    'interview/javascript/core/050function': '函数',
    'interview/javascript/core/060scope': '作用域',
    'interview/javascript/core/070asynchronous': '异步',
    'interview/javascript/core/080this': 'This',
    'interview/javascript/core/090prototype': '原型',
    'interview/javascript/core/100eventloop': '事件循环',
    'interview/javascript/core/110browser': '浏览器对象',
    'interview/javascript/core/120other': '其他',
    'interview/javascript/write': '手写题',
    'interview/javascript/output': '输出题',

    'interview/vue': 'Vue',
    'interview/vue/010base': '基础',
    'interview/vue/020data': '数据',
    'interview/vue/030component': '组件',
    'interview/vue/040state': '状态',
    'interview/vue/050router': '路由',
    'interview/vue/060source': '原理',
    'interview/vue/070practice': '实践',
    'interview/vue/080other': '其他',

    'interview/react': 'React',

    'interview/other': '其他',

    'interview/algorithm': '算法',
  },
  generateDirectoryName: 'interview',
  generateDirectoryPath: resolve('./')
})

function getKeyForCatalogTreeToNav(key, arr = navbarCatalogTree){
  let obj = getKeyForCatalogTree(key, arr)
  return {
    ...obj,
    activeMatch: obj?.link ? `^${obj.link}` : `^/${obj.key}`,
    link: obj?.depthLastKey || obj.link
  }
}


// 快速了解
const quick = [
  {
    text: '快速了解',
    link: '/quick/010_quick'
  },
  {
    text: '参与共建',
    items: [
      {
        text: '新增题目',
        link: '/quick/030_add'
      },
      {
        text: '发现错误',
        link: '/quick/040_error',
      },
    ]
  }
]

const about = [
  {
    text: '一份好的自我介绍',
    link: '/about/010_self_introduction',
  },
  {
    text: '刷题是否应该',
    link: '/about/020_interview_question_brushing'
  },
  {
    text: '面试紧张怎么办',
    link: '/about/030_nervous_interview',
  },
  {
    text: '遇到不会的问题',
    link: '/about/040_encounter_problems_that_wonot_happen',
  },
  {
    text: '面试官问有什么想问',
    link: '/about/050_interviewer_question',
  },
]


// 导航
const nav = [
  {
    activeMatch: `^/quick`,
    key: 'quick',
    text: '快速了解',
    items: quick
  },
  {
    text: '大前端 · 类',
    activeMatch: `^/interview`,
    items: [
      {
        text: '语言',
        items: [
          getKeyForCatalogTreeToNav('interview/html'),
          getKeyForCatalogTreeToNav('interview/css'),
          getKeyForCatalogTreeToNav('interview/javascript'),
        ]
      },
      {
        text: '框架 & 库',
        items: [
          getKeyForCatalogTreeToNav('interview/vue'),
        ]
      },
      (function(){
        let obj = getKeyForCatalogTreeToNav('interview/other', sidebarCatalogTree)
        return {
          text: obj.text,
          activeMatch: obj.activeMatch,
          items: obj.items.map(v => {
            return getKeyForCatalogTreeToNav(v.key, sidebarCatalogTree)
          })
        }
      })()
    ]
  },
  {
    activeMatch: `^/about`,
    key: 'about',
    text: '关于面试',
    items: about
  }
  // {
  //   activeMatch: `^/interview/other`,
  //   ...sidebarCatalogTree.find(v => v.key === 'interview/other'),
  // },
]

// 侧边栏
const sidebar = {
  "/quick": quick,
  "/about": about,
  "/interview/html": sidebarCatalogTree.find(v => v.key === 'interview/html')?.items,
  "/interview/css": sidebarCatalogTree.find(v => v.key === 'interview/css')?.items,
  "/interview/javascript": sidebarCatalogTree.find(v => v.key === 'interview/javascript')?.items,
  "/interview/vue": sidebarCatalogTree.find(v => v.key === 'interview/vue')?.items,
  "/interview/other": sidebarCatalogTree.find(v => v.key === 'interview/other')?.items,
}

export default withMermaid(defineConfig({
  title: '不正经的前端 | 面试',
  description: '这是一份开放的面试题库',
  head: [
    ['link', { rel: 'icon', href: 'https://qiniu.isboyjc.com/picgo/202302150128528.ico', type: 'image/ico' }],
    // ['link', { rel: 'alternate icon', href: 'https://cdn.jsdelivr.net/gh/isboyjc/static/woniu.png', type: 'image/png', sizes: '16x16' }],
  ],
  // 清洁路由 - 删除.html后缀，需服务器支持
  // cleanUrls: true,
  // 路由重写
  rewrites: {
    // 'packages/:pkg/src/(.*)': ':pkg/index.md'
  },

  themeConfig: {
    outline: [2, 6],
    outlineTitle: '快看这页儿写了啥...',
    returnToTopLabel: '',
    
    me: {
      logo: "/logo.jpg",
      gongzhonghao: "/gongzhonghao.jpeg"
    },
    
    // logo: 'https://qiniu.isboyjc.com/picgo/202303141702350.png',
    logo: '/logo.jpg',

    nav,

    sidebar,

    socialLinks: [
      // { icon: 'discord', link: 'https://discord.gg/gtTAKTYGaN' },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 496 512"><path fill="" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7l-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1l114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4l-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/></svg>`
        }, 
        link: "https://t.me/+dcksy40MdTM4OWFl"
      },
      // { icon: 'twitter', link: 'https://twitter.com/isboyjc' },
      { 
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><path fill="" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15c0-4 1-7 3-9c0 0-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9c2 2 3 5 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0Z"/></svg>`
        }, 
        link: 'https://github.com/isboyjc/Interview' 
      },
    ],

    lastUpdatedText:"更新时间",

    editLink: {
      pattern: 'https://github.com/isboyjc/Interview/tree/main/docs/:path',
      text: '编辑此页面'
    },

    footer: {
      message: '不正经的前端 | 面试',
      copyright: 'Copyright © 2019-present isboyjc'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  },

  vite: {
    plugins: [],
  },

  markdown:{
    config(md){
      // md.use(taskLists)
    } 
  },


  // mermaid: {
  //   // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  // },
}))
