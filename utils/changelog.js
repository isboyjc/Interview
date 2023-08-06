/*
 * @LastEditTime: 2023-08-07 06:46:45
 * @Description: 获取仓库信息，贡献者及版本日志
 * @Date: 2023-06-26 22:04:56
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import md5 from 'md5'
import Git from 'simple-git'
import fetch from 'node-fetch'

const git = Git({
  maxConcurrentProcesses: 200,
})
let cache

/**
 * @param {*} count
 * @description 获取仓库发版log
 * @return {*}
 * @Date 2023-06-28 05:28:42
 * @Author isboyjc
 */
export async function getChangeLog(count = 200) {
  if (cache)
    return cache

  const logs = (await git.log({ maxCount: count })).all.filter(i =>
    i.message.includes('chore: release')
    || i.message.includes('!')
    || i.message.startsWith('feat')
    || i.message.startsWith('fix'),
  )

  for (const log of logs) {
    if (log.message.includes('chore: release')) {
      log.version = log.message.split(' ')[2].trim()
      continue
    }
    const raw = await git.raw(['diff-tree', '--no-commit-id', '--name-only', '-r', log.hash])
    delete log.body
    const files = raw.replace(/\\/g, '/').trim().split('\n')
    log.functions = Array.from(new Set(
      files
        .map(i => i.match(/^packages\/\w+\/(\w+)\/\w+?\.ts$/)?.[1])
        .filter(Boolean),
    ))
  }

  const result = logs.filter(i => i.functions?.length || i.version)
  cache = result
  return result
}


/**
 * @param {*} path 路径，./ - 相当于整个仓库
 * @description 获取目录文件提交者
 * @return {*}
 * @Date 2023-06-28 05:28:40
 * @Author isboyjc
 */
export async function getContributorsAt(path) {
  try {
    const list = (await git.raw(['log', '--pretty=format:"%an|%ae|%s|%H"|%cd', '--', path]))
      .split('\n')
      .map(i => i.slice(1, -1).split('|'))
    const map = {}

    list
      .filter(i => i[1])
      .forEach((i) => {
        if (!map[i[1]]) {
          map[i[1]] = {
            name: i[0],
            count: 0,
            md5Email: md5(i[1]),
            email: i[1],
            commit: i[2],
            hash: i[3]
          }
        }
        map[i[1]].count++
      })

    return Object.values(map).sort((a, b) => b.count - a.count)
  }
  catch (e) {
    console.error(e)
    return []
  }
}

/**
 * @param {*} email
 * @description 通过 Email 获取 Github 用户名
 * @return {*}
 * @Date 2023-06-28 05:22:51
 * @Author isboyjc
 */
export async function getGithubUsername(email) {
  const response = await fetch(`https://api.github.com/search/users?q=${email}+in:email`, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Authorization': `token ${process.env.GITHUB_TOKEN}`
    }
  });
  const data = await response.json();
  // console.log(data)
  const user = data.items.find(item => item.email === email);
  return user ? user.login : null;
}