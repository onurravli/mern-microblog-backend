// Betty Logger
// Written by Onur Ravli, 2023
// MIT License

import * as chalk from 'chalk'
import * as moment from 'moment'

// Log levels: INFO, WARN, ERROR, DEBUG

export default class Betty {
  public static info(message: string) {
    console.log(
      `[${chalk.default.blueBright(
        moment.default().format('YYYY-MM-DD HH:mm:ss')
      )}] - [${chalk.default.greenBright('INFO')}] - ${message}`
    )
  }

  public static warn(message: string) {
    console.log(
      `[${chalk.default.blueBright(
        moment.default().format('YYYY-MM-DD HH:mm:ss')
      )}] - [${chalk.default.yellowBright('WARN')}] - ${message}`
    )
  }

  public static error(message: string) {
    console.log(
      `[${chalk.default.blueBright(
        moment.default().format('YYYY-MM-DD HH:mm:ss')
      )}] - [${chalk.default.redBright('ERROR')}] - ${message}`
    )
  }

  public static debug(message: string) {
    console.log(
      `[${chalk.default.blueBright(
        moment.default().format('YYYY-MM-DD HH:mm:ss')
      )}] - [${chalk.default.magentaBright('DEBUG')}] - ${message}`
    )
  }
}
