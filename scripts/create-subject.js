import fs from 'fs';
import path from 'path';
import yargs from 'yargs';

import { prompt } from 'enquirer';
import chalk from 'chalk';


const argv = yargs.parse(process.argv.slice(2))

// 获取命令行参数
let [filePath, fileName, name] = argv._;

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
      writeFile(name);
    } else {
      // 如果用户不确认覆盖，则退出程序
      console.log(chalk.red('文件创建中止！'));
      process.exit(0);
    }
  });
} else {
  // 如果文件不存在，则直接写入文件
  writeFile(name);
}

// 写入文件
function writeFile(name) {
  let templatePath = path.join(__dirname, '../template/subject.md');
  let file = fs.readFileSync(templatePath, 'utf-8').toString();

  if(name){
    let lines = file.split('\n')
    if(lines[0].startsWith('# ')) lines[0] = lines[0].replace('# ',`# ${name}`)
    file = lines.join('\n')
  }

  fs.writeFileSync(path.join(filePath, fileName), file);
  console.log(chalk.green(`文件名：${fileName} \n题目名：${name} \n创建成功！`));
}