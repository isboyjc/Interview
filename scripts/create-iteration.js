/*
 * @LastEditTime: 2023-07-13 19:52:06
 * @Description:  迭代新增题目脚本
 * @Date: 2023-06-25 17:24:42
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { run } from '../utils/process'

let fileArr = [
  ["对 React SSR 的理解", "_react_ssr"],
  ["React.Children.map 和 JS 的 map 有什么区别？", "_react_children_map_vs_js_map"],
  ["同时引用这三个库 react.js、react-dom.js 和 babel.js 它们都有什么作用？", "_react_babel"],
  ["React 的严格模式如何使用，有什么用处？", "_react_strict_mode"],
  ["React 中 constructor 和 getInitialState 的区别?", "_react_constructor_vs_getinitialstate"],
  ["React 中如何捕获异常？", "_react_capture_exceptions"],
  ["React 中引入 CSS 有哪些方式？区别？", "_react_lead_into_css"],
  ["React 性能优化?", "_react_performance_optimization"],
]

let fileNamePrefix = "090"
let folderPath = "docs/interview/frontend/react/090other"
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

