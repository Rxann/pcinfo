"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const os = require('os');
function main() {
    const rn = new Date().getHours();
    console.log(chalk_1.default.bold('PC Stats 💻'));
    console.log(chalk_1.default.bold(`Architecture  🖱️  -  ${os.arch()}`));
    console.log(chalk_1.default.bold(`CPU ⌨️  -  ${os.cpus().length}`));
    console.log(chalk_1.default.bold(`Free Memory 💾  -  ${os.freemem()} bytes`));
    console.log(chalk_1.default.bold(`Total Memory 💾  -  ${os.totalmem()} bytes`));
    console.log(chalk_1.default.bold(`Hostname 📡  -  ${os.hostname()}`));
    if (os.platform() === 'win32') {
        console.log(chalk_1.default.bold(`Load Average 📊  -  *Not supported*`));
    }
    else {
        console.log(chalk_1.default.bold(`Load Average 📊  -  ${os.loadavg()}`));
    }
    console.log(chalk_1.default.bold(`Uptime 🕒  -  ${os.uptime() * 60} minutes`));
    console.log(chalk_1.default.bold(`User 🚹  -  ${os.userInfo().username}`));
    // Display the kernel version
    console.log(chalk_1.default.bold(`Kernel Version 💿  -  ${os.release()}`));
    setTimeout(() => {
        console.log(chalk_1.default.underline(chalk_1.default.green('Thank you for using! 🙏')));
        process.exit(0);
    }, 2500);
}
main();
