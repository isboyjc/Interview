/*
 * @LastEditTime: 2023-06-28 05:33:48
 * @Description: Contributors Plugin 植入 /virtual-contributors 虚拟模块该模块数据为插件使用时传入的数据
 * @Date: 2023-06-26 22:02:50
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */

const ID = '/virtual-contributors'

export function Contributors(data) {
  return {
    name: 'isboyjc-contributors',
    // 在解析模块之前执行
    resolveId(id) {
      return id === ID ? ID : null
    },
    // 在加载模块之前执行
    async load(id) {
      if (id !== ID)
        return null

      return `export default ${JSON.stringify(data)}`
    },
  }
}