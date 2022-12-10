const log = console.log;

console.log = function(msg) {
    const date = new Date().toLocaleString().split(' ')[1]
    log(`[${date}] - ${msg}`)
}