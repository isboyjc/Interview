/*
 * @LastEditTime: 2023-06-26 21:00:02
 * @Description: socialLinks
 * @Date: 2023-06-26 02:52:33
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import {github, bilibili, twitter, tgGroup, discordGroup} from "./meta"
import {icons} from "./icon"

export default [
  {
    icon: icons.tg, 
    link: tgGroup
  },
  { 
    icon: icons.github, 
    link: github
  },
  // { icon: 'discord', link: discordGroup },
  // { icon: 'twitter', link: twitter },
  // {
  //   icon: icons.bilibili,
  //   link: bilibili
  // },
  // {
  //   icon: icons.rss,
  //   link: '/feed.xml',
  // },
]