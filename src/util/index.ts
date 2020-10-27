import chalk from "chalk"
import * as Config from "../../config.json"
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const Delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export type CfxLogParams = {
  level: LogLevel
  resource?: string
  output: string
}
export const CfxLog = (params: CfxLogParams) => {
  if (params.level < Config.resource.logLevel) {
    console.log(
      chalk.redBright(chalk.bgBlackBright(
        chalk.bold(params.resource || Config.resource.name),
        params.output
      ))
    )
  }
}
