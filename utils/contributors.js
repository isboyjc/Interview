/*
 * @LastEditTime: 2023-06-28 05:24:05
 * @Description: 更新脚本
 * @Date: 2023-06-28 00:31:52
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import path from 'path';
import fetch from 'node-fetch';
import fs from 'fs';

const DIR_SRC = path.resolve(__dirname, '../docs')


/**
 * @param {*} page
 * @description 获取仓库 Contributors 日志信息
 * @return {*}
 * @Date 2023-06-28 05:23:40
 * @Author isboyjc
 */
export async function fetchContributors(page = 1) {
  const additional = []
  const collaborators = []
  const response = await fetch(`https://api.github.com/repos/isboyjc/Interview/contributors?per_page=100&page=${page}`, {
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  })

  let data = await response.json() || [];
  collaborators.push(...data.sort((a, b)=> b.contributions - a.contributions).map(i => i.login))
  if (collaborators.length === 100)
    collaborators.push(...(await fetchContributors(page + 1)))

  return Array.from(new Set([
    ...collaborators.filter(collaborator => !['renovate[bot]', 'dependabot[bot]', 'renovate-bot', 'github-actions[bot]'].includes(collaborator)),
    ...additional,
  ]))
}

/**
 * @description 更新仓库 Contributors 日志信息
 * @return {*}
 * @Date 2023-06-28 05:23:09
 * @Author isboyjc
 */
export async function updateContributors() {
  const collaborators = await fetchContributors()
  fs.writeFileSync(path.join(DIR_SRC, './contributors.json'), JSON.stringify(collaborators, null,2));
}