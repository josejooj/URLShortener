const log = console.log;
const timezone = new Date().getTimezoneOffset() / 60

console.log = function (msg) {
    const date = new Date().toLocaleString().split(' ')[1]
    log(`[${date}] - ${msg}`)
}

Date.getUTCTimestamp = function () {
    return Date.now() - (1000 * 60 * 60 * (timezone * -1))
}

console.log(Date.getUTCTimestamp()) 