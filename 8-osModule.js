const os = require('os')

//current info about user
const user = os.userInfo()
console.log(user)

//method that returns the system uptime in seconds
console.log(`the system uptime in seconds is: ${os.uptime()}`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}

console.log(currentOS)