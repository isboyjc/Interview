/*
 * @LastEditTime: 2023-07-06 03:44:54
 * @Description: 新增题目脚本
 * @Date: 2023-06-25 13:37:25
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import fs from 'fs';
import path from 'path';
import yargs from 'yargs';

import { prompt } from 'enquirer';
import chalk from 'chalk';


// 获取命令行参数
const argv = yargs.parse(process.argv.slice(2))
let [filePath, fileName, name] = argv._;
name = name.replace(/^"(.*)"$/, '$1')

// 判断文件是否存在
let fileExists = fs.existsSync(path.join(filePath, fileName));

if (fileExists) {
  // 如果文件已存在，则询问是否覆盖
  prompt({
    type: 'confirm',
    name: 'overwrite',
    message: chalk.yellow(`文件 ${fileName} 已存在，是否要覆盖它？`),
  }).then((answer) => {
    if (answer.overwrite) {
      // 如果用户确认覆盖，则写入文件
      writeTemplateFile(name);
    } else {
      // 如果用户不确认覆盖，则退出程序
      console.log(chalk.red('文件创建中止！'));
      process.exit(0);
    }
  });
} else {
  // 如果文件不存在，则直接写入文件
  writeTemplateFile(name);
}

// 写入模板文件
function writeTemplateFile(name) {
  let templatePath = path.join(__dirname, '../template/subject.md');
  let file = fs.readFileSync(templatePath, 'utf-8').toString();
  let newMarkdown;

  if(name) {
    const lines = file.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('# ')) {
        lines[i] = `# ${name}`;
        break;
      }
    }

    newMarkdown = lines.join('\n');
  }


  fs.writeFileSync(path.join(filePath, fileName), newMarkdown);
  console.log(chalk.green(`文件名：${fileName} \n题目名：${name} \n创建成功！`));
}