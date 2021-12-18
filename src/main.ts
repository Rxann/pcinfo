
const chalk = require('chalk')
const os = require('os')
function main() {
    const rn = new Date().getHours()
    console.log(chalk.bold('PC Stats 💻'))
    console.log(chalk.bold(`Architecture  🖱️  -  ${os.arch()}`))
    console.log(chalk.bold(`CPUS ⌨️  -  ${os.cpus().length}`))
    console.log(chalk.bold(`Free Memory 💾  -  ${os.freemem()} bytes`))
    console.log(chalk.bold(`Total Memory 💾  -  ${os.totalmem()} bytes`))
    console.log(chalk.bold(`Hostname 📡  -  ${os.hostname()}`))
    if (os.platform() === 'win32') {

        console.log(chalk.bold(`Load Average 📊  -  *Not supported*`))
    } else {

        console.log(chalk.bold(`Load Average 📊  -  ${os.loadavg()}`))
    }
    console.log(chalk.bold(`Uptime 🕒  -  ${os.uptime() * 60} minutes`))
    console.log(chalk.bold(`User 🚹  -  ${os.userInfo().username}`))
    // Display the kernel version
    console.log(chalk.bold(`Kernel Version 💿  -  ${os.release()}`))
    setTimeout(() => {
        console.log(chalk.underline(chalk.green('Thank you for using! 🙏')))
        process.exit(0)
    }, 2500)
}
main()