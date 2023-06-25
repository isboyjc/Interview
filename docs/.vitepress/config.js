/*
 * @LastEditTime: 2023-06-25 22:40:40
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
    'interview/base/algorithm',
    // 'interview/base/network',
    'interview/frontend/react', 
    'interview/frontend/framework_comparison',
  ],
  collapsed: true,
  // collapsible: false,
  // showItemNums: true,
  showItemDepthNums: true,
  fileNameHash: {
    'interview/quick': '快速了解',

    'interview/frontend': '大前端 · 类',

    'interview/frontend/html': 'HTML',
    'interview/frontend/html/010base': '基础',
    'interview/frontend/html/020labels_attributes': '标签&属性',
    'interview/frontend/html/030form': '表单',
    'interview/frontend/html/040other': '其他',
    
    'interview/frontend/css': 'CSS',
    'interview/frontend/css/010base': '基础',
    'interview/frontend/css/020selector': '选择器',
    'interview/frontend/css/030structure_stacking': '结构&层叠',
    'interview/frontend/css/040value_unit': '值&单位',
    'interview/frontend/css/050font_text': '字体&文本',
    'interview/frontend/css/060visual_formatting': '视觉格式化',
    'interview/frontend/css/070box': '盒子',
    'interview/frontend/css/080float': '浮动',
    'interview/frontend/css/090postion': '定位',
    'interview/frontend/css/100layout': '布局',
    'interview/frontend/css/110browser': '浏览器',
    'interview/frontend/css/120other': '其他',

    'interview/frontend/javascript': 'JavaScript',
    'interview/frontend/javascript/core': '理论题',
    'interview/frontend/javascript/core/010base': '基础',
    'interview/frontend/javascript/core/020datatype': '数据类型',
    'interview/frontend/javascript/core/030object': '对象',
    'interview/frontend/javascript/core/040array': '数组',
    'interview/frontend/javascript/core/050function': '函数',
    'interview/frontend/javascript/core/060scope': '作用域',
    'interview/frontend/javascript/core/070asynchronous': '异步',
    'interview/frontend/javascript/core/080this': 'This',
    'interview/frontend/javascript/core/090prototype': '原型',
    'interview/frontend/javascript/core/100eventloop': '事件循环',
    'interview/frontend/javascript/core/110browser': '浏览器对象',
    'interview/frontend/javascript/core/120other': '其他',
    'interview/frontend/javascript/write': '手写题',
    'interview/frontend/javascript/output': '输出题',

    'interview/frontend/vue': 'Vue',
    'interview/frontend/vue/010base': '基础',
    'interview/frontend/vue/020data': '数据',
    'interview/frontend/vue/030component': '组件',
    'interview/frontend/vue/040state': '状态',
    'interview/frontend/vue/050router': '路由',
    'interview/frontend/vue/060source': '原理',
    'interview/frontend/vue/070practice': '实践',
    'interview/frontend/vue/080other': '其他',

    'interview/frontend/react': 'React',


    'interview/base': '基础 · 类',

    'interview/base/network': '网络',
    'interview/base/network/010base': '基础',
    'interview/base/network/020dns': 'DNS',
    'interview/base/network/030httphttps': 'HTTP / HTTPS',
    'interview/base/network/040tcpudp': 'TCP / UDP',
    'interview/base/network/050socket': 'Socket',
    'interview/base/network/060security': '网安',
    'interview/base/network/070other': '其他',
    
    'interview/base/algorithm': '算法',
  },
  generateDirectoryName: 'interview',
  generateDirectoryPath: resolve('./')
})

// 获取指定层级的导航目录树
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
// 关于面试
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
  {
    text: '职业问题参考',
    link: '/about/060_occupation',
  },
  {
    text: '项目问题参考',
    link: '/about/070_project',
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
    text: '基础 · 类',
    activeMatch: `^/interview/base`,
    items: [
      getKeyForCatalogTreeToNav('interview/base/network'),
    ]
  },
  {
    text: '大前端 · 类',
    activeMatch: `^/interview/frontend`,
    items: [
      {
        text: '语言',
        items: [
          getKeyForCatalogTreeToNav('interview/frontend/html'),
          getKeyForCatalogTreeToNav('interview/frontend/css'),
          getKeyForCatalogTreeToNav('interview/frontend/javascript'),
        ]
      },
      {
        text: '框架 & 库',
        items: [
          getKeyForCatalogTreeToNav('interview/frontend/vue'),
        ]
      }
    ]
  },
  {
    activeMatch: `^/about`,
    key: 'about',
    text: '关于面试',
    items: about
  }
]

// 侧边栏
const sidebar = {
  "/quick": quick,
  "/about": about,
  "/interview/frontend/html": getKeyForCatalogTree('interview/frontend/html', sidebarCatalogTree)?.items,
  "/interview/frontend/css": getKeyForCatalogTree('interview/frontend/css', sidebarCatalogTree)?.items,
  "/interview/frontend/javascript": getKeyForCatalogTree('interview/frontend/javascript', sidebarCatalogTree)?.items,
  "/interview/frontend/vue": getKeyForCatalogTree('interview/frontend/vue', sidebarCatalogTree)?.items,
  "/interview/base/network": getKeyForCatalogTree('interview/base/network', sidebarCatalogTree)?.items
}

export default withMermaid(defineConfig({
  lang: 'zh-CN',
  title: '不正经的前端 | 面试',
  description: '这是一份开放的面试题库',
  head: [
    ['link', { rel: 'icon', href: 'https://qiniu.isboyjc.com/picgo/202302150128528.ico', type: 'image/ico' }],
    ['script', { 
      async: true, 
      src: 'https://www.googletagmanager.com/gtag/js?id=G-EHYCMJEYM4' 
    }],
    ['script', {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-EHYCMJEYM4');
      `
    ]
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
      copyright: `Copyright © 2019-${new Date().getFullYear()} isboyjc`
    },

    search: {
      provider: 'algolia',
      options: {
        indexName: 'interview-isboyjc',
        appId: '893IJYY0YX',
        apiKey: 'dd7d8c15cd3834c4adba57c9adb4324b',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    }

    // search: {
    //   provider: 'local',
    //   options: {
    //     locales: {
    //       zh: {
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档'
    //           },
    //           modal: {
    //             noResultsText: '无法找到相关结果',
    //             resetButtonTitle: '清除查询条件',
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换'
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  },

  markdown:{
    config(md){
      // md.use(taskLists)
    } 
  },


  // mermaid: {
  //   // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  // },

  vite: {
    plugins: [],
  },
}))
