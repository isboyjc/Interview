/*
 * @LastEditTime: 2023-07-04 00:17:14
 * @Description: ...
 * @Date: 2023-06-26 00:39:07
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { version, author, keywords as ks, description as desc } from '../../package.json'

// base
export const title = '不正经的前端 | 八股'
export const site = 'https://interview.isboyjc.com/'
export const logo = '/img/site/logo.png'
export const ico = '/img/site/logo.ico'
export const keywords = ks.join("、")
export const description = desc
export const appleIcon = '/images/icons/apple-touch-icon.png'
export const androidChrome192 = '/images/icon/android-chrome-192x192.png'
export const androidChrome512 = '/images/icon/android-chrome-512x512.png'
export const me = {
  avatar: '/img/me/avatar.jpeg',
  name: author,
  desc: '不正经的前端，很正经的摄影！',
  wx: '/img/me/wx.jpeg',
  github: 'https://github.com/isboyjc',
  twitter: 'https://twitter.com/isboyjc',
  juejin: 'https://juejin.cn/user/2999123452373735',
  // gongzhonghao: ''
}

// link
export const github = 'https://github.com/isboyjc/Interview'
export const twitter = 'https://twitter.com/isboyjc'
export const tgGroup  = 'https://t.me/+dcksy40MdTM4OWFl'
export const discordGroup  = 'https://discord.gg/gtTAKTYGaN'
export const bilibili = ''

// version
export const docsVersion = version

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
export const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
export const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
export const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')