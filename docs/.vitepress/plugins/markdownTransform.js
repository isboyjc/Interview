/*
 * @LastEditTime: 2023-06-26 04:33:34
 * @Description: Markdown 转换插件
 * @Date: 2023-06-26 04:30:12
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
// import { replacer } from '../../../scripts/utils'
// import { getReadingTime } from './../theme/utils'

export function MarkdownTransform() {
  return {
    name: 'isboyjc-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null
      // 将链接转换为相对链接
      // code = code.replace(/https?:\/\/interview\.isboyjc\.com\//g, '/')

      // TODO
      // const { footer } = await getDocsMarkdown()
      // code = replacer(code, footer, 'FOOTER', 'tail')
      // const { readTime, words } = getReadingTime(code)
      // code = code
      //   .replace(/(#\s.+?\n)/, `$1\n\n<PageInfo readTime="${readTime}" words="${words}"/>\n`)

      return code
    },
  }
}

export async function getDocsMarkdown() {
  const ContributorsSection = `## Contributors
  <Contributors/>`

  const CopyRightSection = `
  <CopyRight/>`

  const footer = `${ContributorsSection}\n${CopyRightSection}\n`

  return {
    footer,
  }
}