/*
 * @LastEditTime: 2023-07-06 04:14:46
 * @Description: ...
 * @Date: 2023-02-15 01:12:53
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import path from 'path'
import { fileURLToPath } from 'url';

import { defineConfig, defineConfigWithTheme } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// vite插件
// md 转换
import { MarkdownTransform } from '../.vitepress/plugins/markdownTransform'
// import { Contributors } from '../.vitepress/plugins/contributors'

// PWA
import { withPwa } from '@vite-pwa/vitepress'
import { pwa } from './plugins/pwa'

// 原子CSS UnoCSS
import UnoCSS from "unocss/vite";

// 组件自动引入
import Components from 'unplugin-vue-components/vite'

// Iconify 解析插件
import Icons from 'unplugin-icons/vite'
// Iconify 自动引入解析器
import IconsResolver from 'unplugin-icons/resolver'
// icon 加载 loader
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// import { getChangeLog, getContributorsAt} from '../../utils/changelog'

import {catalogGeneration, getKeyForCatalogTree, getCatalogDepthLast} from "./plugins/catalogGeneration"

import socialLinks from "./link"
import {me, title, logo, site, description, ico, appleIcon, github, keywords} from "./meta"
import { icons as customIcons } from "./icon"

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (dir) => dir ? path.resolve(__dirname, '../', dir) : __dirname

const {
  sidebarCatalogTree,
  navbarCatalogTree
} = catalogGeneration(resolve('interview'), {
  ignoreList: [
    'interview/notype', 
    'interview/base/algorithm',
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
    'interview/frontend/react/010base': '基础',
    'interview/frontend/react/020data': '数据',
    'interview/frontend/react/030component': '组件',
    'interview/frontend/react/040hooks': 'Hooks',
    'interview/frontend/react/050state': '状态',
    'interview/frontend/react/060router': '路由',
    'interview/frontend/react/070source': '原理',
    'interview/frontend/react/080practice': '实践',
    'interview/frontend/react/090other': '其他',
    
    'interview/frontend/browser': '浏览器',
    'interview/frontend/browser/010processthread': '进程&线程',
    'interview/frontend/browser/020memory': '内存管理',
    'interview/frontend/browser/030form': '组成',
    'interview/frontend/browser/040render': '渲染',
    'interview/frontend/browser/050cache': '缓存',
    'interview/frontend/browser/060localstorage': '本地存储',
    'interview/frontend/browser/070cors': '同源策略',
    'interview/frontend/browser/080event': '事件机制',
    'interview/frontend/browser/090gc': '垃圾回收',
    'interview/frontend/browser/100memoryleak': '内存泄漏',
    'interview/frontend/browser/110other': '其他',


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

    'interview/backend': '后端 · 类',

    'interview/backend/java': 'Java',
    'interview/backend/java/010base': '基础',
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
          getKeyForCatalogTreeToNav('interview/frontend/react'),
        ]
      },
      {
        text: '其他',
        items: [
          getKeyForCatalogTreeToNav('interview/frontend/browser'),
        ]
      }
    ]
  },
  {
    text: '后端 · 类',
    activeMatch: `^/interview/backend`,
    items: [
      {
        text: '语言',
        items: [
          getKeyForCatalogTreeToNav('interview/backend/java'),
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
  "/interview/frontend/react": getKeyForCatalogTree('interview/frontend/react', sidebarCatalogTree)?.items,
  "/interview/frontend/browser": getKeyForCatalogTree('interview/frontend/browser', sidebarCatalogTree)?.items,
  "/interview/base/network": getKeyForCatalogTree('interview/base/network', sidebarCatalogTree)?.items,

  "/interview/backend/java": getKeyForCatalogTree('interview/backend/java', sidebarCatalogTree)?.items,
}


export default withPwa(withMermaid(defineConfig(async () => {
  // const [changeLog, contributions] = await Promise.all([
  //   getChangeLog(process.env.CI ? 1000 : 100),
  //   getFunctionContributors(),
  // ])

  // const changeLog = await getChangeLog(100)
  // console.log(changeLog)

  // const contributors = await getContributorsAt("docs/interview/frontend/javascript/core/040array/040010_arraytype_judgment.md")
  // const contributors = await getContributorsAt("docs/.vitepress/plugins/catalogGeneration.js")
  // const contributors = await getContributorsAt("./")

  return {
    pwa,

    // base
    title,
    description,
    lastUpdated: true,
    useWebFonts: false,
    locales: {
      root: { label: '简体中文', lang: 'zh-CN' },
    },
    markdown: {
      lineNumbers: true,
    },
    // rewrites: {
    //   'packages/:pkg/src/(.*)': ':pkg/index.md'
    // },
    
    head: [
      ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
      ['meta', { name: 'keywords', content: keywords }],
      ['meta', { name: 'author', content: me.name }],
      ['meta', { property: 'og:type', content: 'article' }],
      ['meta', { name: 'application-name', content: title }],
      ['meta', { name: 'apple-mobile-web-app-title', content: title }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
  
      ['link', { rel: 'shortcut icon', href: ico }],
      ['link', { rel: 'icon', type: 'image/x-icon', href: ico }],
      // ['link', { rel: 'mask-icon', href: '.svg', color: '#06f' }],
      // ['meta', { name: 'theme-color', content: '#06f' }],
  
      ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: appleIcon }],
  
      // webfont
      ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
      ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
  
      // og
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: site }],
      ['meta', { property: 'og:locale', content: 'zh_CN' }],
  
      // umami analytics：https://umami.is/
      ['script', { 'async': '', 'defer': '', 'data-website-id': `${process.env.UMAMI_WEBSITE_ID || ''}`, 'src': `${process.env.UMAMI_ENDPOINT || ''}` }],
    ],
  
    // 主题
    themeConfig: {
      outline: 'deep',
      outlineTitle: '快看这页儿写了啥...',
      returnToTopLabel: '返回顶部',
      darkModeSwitchLabel: '模式',
      sidebarMenuLabel: '归档',
      lastUpdatedText:"最后更新时间",
      docFooter: {
        prev: '上一页',
        next: '下一页',
      },
      editLink: {
        pattern: `${github}/tree/main/docs/:path`,
        text: '编辑此页面'
      },
      
      // 数据传递
      me,
      icons: customIcons,
  
      logo,
      
      nav,
      sidebar,
      socialLinks,
  
      footer: {
        message: `浏览量(PV)&nbsp;<span id="busuanzi_value_site_pv" style="font-weight: bold;"></span>&nbsp;次&nbsp;&nbsp;·&nbsp;&nbsp;独立访客(UV)&nbsp;<span id="busuanzi_value_site_uv" style="font-weight: bold;"></span>&nbsp;人次<br />${title} · 欢迎 <a target="_blank" style="color: var(--vp-c-brand)" href="${github}">star ⭐</a>`,
        copyright: `Copyright © 2019-${new Date().getFullYear()} | <a target="_blank" style="color: var(--vp-c-brand)" href="${github}/blob/main/LICENSE">MIT License</a> | <a target="_blank" style="color: var(--vp-c-brand)" href="${me.github}">${me.name}</a> and Contributors`
      },
  
      // algolia: {
      //   indexName: 'interview-isboyjc',
      //   appId: '893IJYY0YX',
      //   apiKey: 'd4ffd044368470111cee00cb39e66dd5',
      //   searchParameters:{
      //     facetFilters: ["version:latest"]
      //   },
      //   placeholder: '请输入关键词',
      //   translations: {
      //     button: {
      //       buttonText: '搜索文档',
      //       buttonAriaLabel: '搜索文档'
      //     },
      //     modal: {
      //       searchBox: {
      //         resetButtonTitle: '清除查询条件',
      //         resetButtonAriaLabel: '清除查询条件',
      //         cancelButtonText: '取消',
      //         cancelButtonAriaLabel: '取消'
      //       },
      //       startScreen: {
      //         recentSearchesTitle: '搜索历史',
      //         noRecentSearchesText: '没有搜索历史',
      //         saveRecentSearchButtonTitle: '保存至搜索历史',
      //         removeRecentSearchButtonTitle: '从搜索历史中移除',
      //         favoriteSearchesTitle: '收藏',
      //         removeFavoriteSearchButtonTitle: '从收藏中移除'
      //       },
      //       errorScreen: {
      //         titleText: '无法获取结果',
      //         helpText: '你可能需要检查你的网络连接'
      //       },
      //       footer: {
      //         selectText: '选择',
      //         navigateText: '切换',
      //         closeText: '关闭',
      //         searchByText: '搜索提供者'
      //       },
      //       noResultsScreen: {
      //         noResultsText: '无法找到相关结果',
      //         suggestedQueryText: '你可以尝试查询',
      //         reportMissingResultsText: '你认为该查询应该有结果？',
      //         reportMissingResultsLinkText: '点击反馈'
      //       }
      //     }
      //   }
      // },
  
      search: {
        provider: 'local',
        options: {
          translations: {
            button: {
              buttonText: '搜索',
              buttonAriaLabel: '搜索'
            },
            modal: {
              noResultsText: '无法找到相关结果',
              resetButtonTitle: '清除查询条件',
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭'
              }
            }
          }
        }
      }
    },
  
    // vite配置
    vite: {
      plugins: [
        // 自定义插件
        MarkdownTransform(),
        // Contributors(contributors),
  
        // 插件包
        Components({
          // dirs 指定自动引入组件所在目录位置
          dirs: [resolve('.vitepress/theme/components')],
          include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
          resolvers: [
            IconsResolver({
              prefix: 'icon',
              // 默认 iconify 集合别名
              // alias: {
              //   vsci: 'vscode-icons'
              // },
              customCollections: ['custom']
            })
          ]
        }),
        Icons({
          compiler: 'vue3',
          customCollections: {
            // custom 图标集, 给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
            custom: FileSystemIconLoader('public/svg/custom', svg => svg.replace(/^<svg /, '<svg fill="currentColor" '))
          },
          autoInstall: true
        }),
        UnoCSS({
          // 详见 unocss.config.js
        })
      ],
    },
  
    // 构建完成钩子
    async buildEnd(siteConfig) {
      // console.log(siteConfig)
      // TODO RSS订阅
    },
  }
})))
