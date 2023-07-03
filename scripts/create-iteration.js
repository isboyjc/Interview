/*
 * @LastEditTime: 2023-07-04 01:30:54
 * @Description:  迭代新增题目脚本
 * @Date: 2023-06-25 17:24:42
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { run } from '../utils/process'

let fileArr = [
  ["React 版本线", "_react_version_line"],
  ["谈一谈对 React 的理解，它的理念是什么？", "_react"],
  ["React的生命周期有哪些？", "_react_lifecycle"],
  ["React 废弃了哪些生命周期？为什么？", "_what_lifecycles_have_react_abandoned"],
  ["React 16.X 中 props 改变后在哪个生命周期中处理", "_react16_props_in_which_lifecycle"],
  ["React 性能优化在哪个生命周期？它优化的原理是什么？", "_performance_optimization_in_which_lifecycle"],
  ["state 和 props 触发更新的生命周期分别有什么区别？", "_state_props_lifecycle_difference"],
  ["React中发起网络请求应该在哪个生命周期中进行？为什么？", "_network_request_in_which_lifecycle"],
  ["React必须使用JSX吗？", "_must_react_use_jsx"],
  ["为什么 React 要用 JSX？", "_why_react_uses_jsx"],
  ["为什么使用 JSX 的组件中没有看到使用 React 却需要引入 React？", "_why_should_jsx_introduce_react"],
  ["谈谈对 immutable 的理解？如何应用在 react 项目中？", "_immutable"],
  ["React Refs？应用场景？", "_react_refs"],
  ["React 16 解决了什么问题，增加了哪些东西", "_react16_update"],
  ["React 17 解决了什么问题，增加了哪些东西", "_react17_update"],
  ["React 18 解决了什么问题，增加了哪些东西", "_react18_update"],
]

let fileNamePrefix = "010"
let folderPath = "docs/interview/frontend/react/010base"
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

