/*
 * @LastEditTime: 2023-06-28 05:28:00
 * @Description: ...
 * @Date: 2023-06-27 20:48:53
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */

// 
/**
 * @param {*} code 目标片段
 * @param {*} value 植入片段
 * @param {*} key 更换标识
 * @param {*} insert 'head' 头部 | 'tail'  尾部| 'none' 不添加
 * @description 更换目标信息
 * @return {*}
 * @Date 2023-06-28 05:24:28
 * @Author isboyjc
 */
export function replacer(code, value, key, insert = 'none') {
  const START = `<!--${key}_STARTS-->`
  const END = `<!--${key}_ENDS-->`
  const regex = new RegExp(`${START}[\\s\\S]*?${END}`, 'im')

  const target = value ? `${START}\n${value}\n${END}` : `${START}${END}`

  if (!code.match(regex)) {
    if (insert === 'none')
      return code
    else if (insert === 'head')
      return `${target}\n\n${code}`
    else
      return `${code}\n\n${target}`
  }

  return code.replace(regex, target)
}