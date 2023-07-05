/*
 * @LastEditTime: 2023-07-04 01:30:54
 * @Description:  迭代新增题目脚本
 * @Date: 2023-06-25 17:24:42
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { run } from '../utils/process'

let fileArr = [
  ["面向对象特性？", "_oop"],
  ["a = a + b 与 a += b 的区别", "_a_b_difference"],
]

let fileNamePrefix = "010"
let folderPath = "docs/interview/backend/java/010base"
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

