/*
 * @LastEditTime: 2023-06-26 18:37:33
 * @Description: 百度统计
 * @Date: 2023-06-26 04:56:14
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { inBrowser } from 'vitepress'

/**
 * 注册统计
 */
export function registerAnalytics(siteId) {
  if (!inBrowser)
    return
  if (document.querySelector(`#analytics-plugin-${siteId}`))
    return
  window._hmt = window._hmt ? window._hmt : []
  const script = document.createElement('script')
  script.id = `analytics-${siteId}`
  script.async = true
  script.src = `https://hm.baidu.com/hm.js?${siteId}`
  document.querySelector('head')?.appendChild(script)
}

/**
 * 上报 PV 数据
 * @param siteId - 站点 ID
 * @param pageUrl - 页面 URL
 */
export function trackPageview(siteId, pageUrl) {
  if (!inBrowser)
    return
  if (!pageUrl || typeof pageUrl !== 'string')
    pageUrl = '/'

  if (pageUrl.startsWith('http')) {
    const urlFragment = pageUrl.split('/')
    const origin = `${urlFragment[0]}//${urlFragment[2]}`
    pageUrl = pageUrl.replace(origin, '')
  }

  window._hmt.push(['_setAccount', siteId])
  window._hmt.push(['_trackPageview', pageUrl])
}