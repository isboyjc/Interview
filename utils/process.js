/*
 * @LastEditors: isboyjc
 * @Description: 命令执行方法
 * @Date: 2021-10-20 17:05:10
 * @LastEditTime: 2023-06-25 21:24:53
 * @Author: isboyjc
 */
import util from 'util';
import yargs from 'yargs';

import { spawnSync, execSync, spawn, exec } from 'child_process'
import chalk from 'chalk';

const execPromise = util.promisify(exec);

export const runCommand = async (command) => {
  const { error, stdout, stderr } = await execPromise(command);
  if (error) {
    return Promise.reject(error)
  }

  return {stdout, stderr}
}


export const run = async (command, cwd) =>
  new Promise((resolve, reject) => {

    const argv = yargs.parse(command)

    const args = argv._
    const cmd = args.shift()

    // console.log(chalk.cyan(`run: ${cmd} ${args.join(' ')}`))
    const app = spawn(cmd, args, {
      cwd,
      stdio: 'inherit',
      // shell: process.platform === 'win32',
    })

    const onProcessExit = () => app.kill('SIGHUP')

    app.on('close', (code) => {
      process.removeListener('exit', onProcessExit)

      if (code === 0) resolve()
      else
        reject(
          new Error(`Command failed. \n Command: ${command} \n Code: ${code}`)
        )
    })
    process.on('exit', onProcessExit)
  })