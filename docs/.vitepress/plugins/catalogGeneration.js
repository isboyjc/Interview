import fs from 'fs'
import path from 'path'

/**
 * @param { String } fullPath 根文件夹目录完整绝对地址
 * @param { Array } options.base 根目录，默认 /docs
 * @param { Array } options.ignoreList 忽略列表，默认 []，示例：[ '/aaa/', '/xxx.md']
 * @param { Boolean } options.collapsible 是否可折叠，默认 true
 * @param { Boolean } options.collapsed 是否展开，默认 false
 * @param { Boolean } options.showItemNums 是否显示子级数量，默认 false，showItemDepthNums 为 true 时，优先 showItemDepthNums
 * @param { Boolean } options.showItemDepthNums 是否显示子级文件数量，默认 false
 * @param { Object } options.fileNameHash 文件名映射
 * @param { Function } options.beforeMountedSidebar Sidebar 挂载前回调，可处理具体文件夹、文件名
 * @param { Function } options.generateDirectoryName 生成目录文件名
 * @param { Function } options.generateDirectoryPath 生成目录相对地址
 * 
 * @description 生成目录树（导航&侧边栏）
 * @return {*}
 * @Date 2023-06-11 14:59:25
 * @Author isboyjc
 */
export function catalogGeneration(fullPath, options) {
  let base = options?.base || '/'
  base = base === "/" ? '/docs' : base

  let idx = fullPath.indexOf(base)
  if(idx === -1) return console.error("base path error")

  let folderPath = fullPath.substring(idx + base.length)
  folderPath = folderPath.startsWith('/') ? folderPath.substring(1) : folderPath;

  const ignoreList = (options?.ignoreList || []).map(v => v.replace(/^\//, '').replace(/\.md$/, ''))
  const collapsible = options?.collapsible === undefined ? true : options.collapsible
  const collapsed = options?.collapsed === undefined ? false : options.collapsed
  const showItemNums = options?.showItemNums === undefined ? false : options.showItemNums
  const showItemDepthNums = options?.showItemDepthNums === undefined ? false : options.showItemDepthNums
  const fileNameHash = options?.fileNameHash || {}


  const sidebarCatalogTree = getSidebar({
    ignoreList, 
    collapsible, 
    collapsed, 
    fileNameHash, 
    folderPath, 
    fullPath, 
    showItemNums,
    showItemDepthNums
  })

  const navbarCatalogTree =  sidebarTreeToNavTree(sidebarCatalogTree)

  options?.beforeMountedSidebar && options.beforeMountedSidebar(sidebarCatalogTree)

  const dirName = `${options?.generateDirectoryName || folderPath}_dir`
  const navName = `${options?.generateDirectoryName || folderPath}_nav`

  const dirPath = options?.generateDirectoryPath
  if(dirName && dirPath){
    fs.writeFileSync(path.resolve(dirPath, `${dirName}.json`), JSON.stringify(sidebarCatalogTree, null,2));
    fs.writeFileSync(path.resolve(dirPath, `${navName}.json`), JSON.stringify(navbarCatalogTree, null,2));
  }
  return { sidebarCatalogTree, navbarCatalogTree }
}

/**
 * @param { String } options.folderPath 根文件夹名
 * @param { String } options.fullPath 根文件夹完整绝对路径
 * @param { Array } options.ignoreList 忽略列表，默认 []，示例：[ '/aaa/', '/xxx.md']
 * @param { Boolean } options.collapsible 是否可折叠，默认 true
 * @param { Boolean } options.collapsed 是否展开，默认 false
 * @param { Boolean } options.showItemNums 是否显示子级数量，默认 false，showItemDepthNums 为 true 时，优先 showItemDepthNums
 * @param { Boolean } options.showItemDepthNums 是否显示子级文件数量，默认 false
 * @param { Object } options.fileNameHash 文件名映射
 * 
 * @description 生成侧边栏树
 * @return {*}
 * @Date 2023-06-11 14:59:25
 * @Author isboyjc
 */
export function getSidebar(options) {
  const {
    ignoreList, 
    collapsible, 
    collapsed, 
    fileNameHash, 
    folderPath, 
    fullPath, 
    showItemNums,
    showItemDepthNums
  } = options
  if(!fs.existsSync(fullPath)) return []

  const dirct = fs.readdirSync(fullPath)

  return dirct.map(dir => {
    const filePath = path.join(fullPath, dir)
    const stats = fs.statSync(filePath)
    if(stats.isDirectory()){
      // 目录
      const dirPath = `${folderPath}/${dir}`

      let items = getSidebar(Object.assign({}, options, {
        folderPath: dirPath,
        fullPath: filePath
      }))

      let itemNums = items.length
      let itemDepthNums = items.reduce((prev, cur) => prev + (cur?.items && Array.isArray(cur.items) && cur.items.length > 0 ? cur.itemDepthNums : 1), 0)

      let text = (fileNameHash[dirPath] || dir) 

      text = showItemDepthNums ? text + ` · ${itemDepthNums}` : showItemNums ? text + ` · ${itemNums}` : text

      return {
        text,
        itemNums,
        itemDepthNums,
        collapsed,
        collapsible,
        key: dirPath,
        items
      }
    }else{
      // console.log(dir)
      // 文件
      const file = fs.readFileSync(path.resolve(fullPath, dir)).toString()
      let text = dir
      let lines = file.split('\n')
      const line = lines.shift()
      if(line.startsWith('# ')){
        text = line.replace('# ','')
      }else if(line.startsWith('---')){
        const index = lines.findIndex(v => v.startsWith('---'))
        lines = lines.slice(index + 1).filter(v => v)
        if(lines[0].startsWith('# ')){
          text = lines[0].replace('# ','')
        }
      }else{
        text = text.replace('.md','')
      }

      return {
        text,
        key: `/${folderPath}/${dir.replace('.md','')}`,
        link: `/${folderPath}/${dir.replace('.md','')}`
      }
    }
  }).filter(v => ignoreList.every(j => !v.key.includes(j) ))
}

/**
 * @param {*} arr
 * @description 侧边栏树转导航树
 * @return {*}
 * @Date 2023-06-17 01:35:20
 * @Author isboyjc
 */
export function sidebarTreeToNavTree(arr, idx = -1){
  let newArr = []
  arr.map((item, index) => {
    let itemObj = {... item}
    let childrens = itemObj?.items
    if(childrens){
      if(Array.isArray(childrens) && childrens.length > 0){
        if(childrens.some(v => v?.items && Array.isArray(v.items) && v.items.length > 0)){
          return newArr.push(Object.assign({}, itemObj, {
            depthLastKey: getCatalogDepthLast(itemObj).link,
            items: sidebarTreeToNavTree(childrens, index),
          }))
        }else{
          itemObj.link = childrens[0].link
          itemObj.childKey = childrens[0].key
          delete itemObj.items
        }
      }
    }

    return newArr.push({... itemObj, depthLastKey: getCatalogDepthLast(itemObj).link})
  })
  return newArr
} 

/**
 * @param {*} obj 目录树对象
 * @description 获取目录对象最深层级
 * @return {*}
 * @Date 2023-06-17 02:05:06
 * @Author isboyjc
 */
export function getCatalogDepthLast(obj){
  if(obj?.items && Array.isArray(obj.items) && obj.items.length > 0){
    return getCatalogDepthLast(obj.items[0])
  }

  return obj
}

/**
 * @param {*} key 路径
 * @description 查找目录树中key值相同的对象
 * @return {*}
 * @Date 2023-06-18 03:41:37
 * @Author isboyjc
 */
export function getKeyForCatalogTree(key, arr){
  for(let i = 0; i < arr.length; i++){
    let item = arr[i]

    if(item.key.indexOf(key) !== -1) return item
    
    if(item?.items && Array.isArray(item.items) && item.items.length > 0){
      let obj = getKeyForCatalogTree(key, item.items)
      if(obj) return obj
    }
  }
}