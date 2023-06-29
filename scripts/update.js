import { updateContributors } from "../utils/contributors"

;(async () => {
  // 更新 Contributors 文件
  // 该文件主要作用于整个仓库的贡献者
  await updateContributors()
})()