/*
 * @LastEditTime: 2023-06-25 22:02:23
 * @Description: ...
 * @Date: 2023-06-25 17:24:42
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { run } from '../utils/process'

let fileArr = [
  ["介绍下 JWT 中的 token 如何实现加密", "_jwt_token_encryption"],
  ["介绍下单点登录 SSO", "_sso"],
  ["列举常用的网络性能优化方法", "_network_performance_optimization"],
  ["地址栏输入 URL 敲下回车后发生了什么?", "_what_happened_when_entering_the_url"],
]

let folderPath = "docs/interview/base/network/070other/"
let fileNamePrefix = "070"
let count = 10;



;(async () => {
  for (let i = 0; i < fileArr.length; i++) {
    let [name, fileName] = fileArr[i]
  
    const numStr = count.toString().padStart(3, '0');
    fileName = `${fileNamePrefix}${numStr}` + (fileName || '') + '.md'
    count += 10;

    await run(`babel-node scripts/create-subject.js ${folderPath} ${fileName} -- "${name}"`)
  }
})()

