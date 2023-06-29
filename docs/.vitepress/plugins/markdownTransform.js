/*
 * @LastEditTime: 2023-06-28 20:52:56
 * @Description: Markdown 转换插件，模块编译转换前执行，统一为 md 文件做批处理
 * @Date: 2023-06-26 04:30:12
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { getContributorsAt } from '../../../utils/changelog'
import { replacer } from '../../../utils/replacer'

export function MarkdownTransform() {
  return {
    name: 'isboyjc-md-transform',
    enforce: 'pre',
    // 在转换模块之前执行
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null
      // 将链接转换为相对链接
      // code = code.replace(/https?:\/\/interview\.isboyjc\.com\//g, '/')

      const [pkg, _name, i] = id.split('/').slice(-3)
      const ignoreList = ['docs', 'about', 'quick']
      if (ignoreList.some(v => v === _name))
        return code

      // 获取文件提交者记录 list
      let contributors = await getContributorsAt(id)
      const { footer } = await getDocsMarkdown([...contributors])
      code = replacer(code, footer, 'FOOTER', 'tail')

      // code = code.replace(/(#\s.+?\n)/, `$1\n\n<PageInfo />\n`)

      return code
    },
  }
}

/**
 * @param {*} list
 * @description 获取 MD Docs
 * @return {*}
 * @Date 2023-06-28 05:34:23
 * @Author isboyjc
 */
export async function getDocsMarkdown(list) {
  const ContributorsSection = `## 贡献者
  <Contributors list='${JSON.stringify(list)}'/>`

  const footer = `${ContributorsSection}`

  return {
    footer,
  }
}

