/*
 * @LastEditTime: 2023-06-26 18:45:50
 * @Description: 扩展默认主题
 * @Date: 2023-05-10 14:28:25
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { inBrowser, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MyLayout from './components/MyLayout.vue'
import NotFound from './components/NotFound.vue';

import busuanzi from 'busuanzi.pure.js'
import { registerAnalytics, trackPageview } from './plugins/baidutongji'

import googleAnalytics from './plugins/googleAnalytics'

import './styles/main.css'
import './styles/global.css'
import './styles/vars.css'
import 'uno.css'

const baiduSiteIds = "2da9f42d35f8a1d3db441632b9730f1c"
const gaIds = 'G-EHYCMJEYM4'

export default {
  ...DefaultTheme,
  NotFound,
  // 使用包装组件重写布局
  // 注入插槽
  Layout: MyLayout,
  enhanceApp({router}) {
    // 注册自定义全局组件
    // ctx.app.component('Home', Home)

    googleAnalytics({
      id: gaIds,
    })

    // 百度统计使用
    if (inBrowser) {
      // 注册百度统计
      registerAnalytics(baiduSiteIds)

      // 监听 url hash 改变
      window.addEventListener('hashchange', () => {
        const { href: url } = window.location
        // 上报 PV
        trackPageview(baiduSiteIds, url)
      })

      // 监听路由改变
      router.onAfterRouteChanged = (to) => {
        // 上报 PV
        trackPageview(baiduSiteIds, to)

        // 数据统计
        busuanzi.fetch()
      }
    }
  },
  
}