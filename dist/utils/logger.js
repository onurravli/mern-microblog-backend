"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = __importStar(require("chalk"));
const moment = __importStar(require("moment"));
// Log levels: INFO, WARN, ERROR, DEBUG
class Logger {
    static info(message) {
        console.log(`[${chalk.default.blueBright(moment.default().format('YYYY-MM-DD HH:mm:ss'))}] - [${chalk.default.greenBright('INFO')}] - ${message}`);
    }
    static warn(message) {
        console.log(`[${chalk.default.blueBright(moment.default().format('YYYY-MM-DD HH:mm:ss'))}] - [${chalk.default.yellowBright('WARN')}] - ${message}`);
    }
    static error(message) {
        console.log(`[${chalk.default.blueBright(moment.default().format('YYYY-MM-DD HH:mm:ss'))}] - [${chalk.default.redBright('ERROR')}] - ${message}`);
    }
    static debug(message) {
        console.log(`[${chalk.default.blueBright(moment.default().format('YYYY-MM-DD HH:mm:ss'))}] - [${chalk.default.magentaBright('DEBUG')}] - ${message}`);
    }
}
exports.default = Logger;
