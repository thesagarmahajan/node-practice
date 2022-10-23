let http = require('http')
let fs = require('fs')


// Priority - 1 - Timers
setTimeout(()=>{
    console.log("Priority - 1 - Timers (setTimeout)")
}, 0)


// Check Phase
setImmediate(() => {
    console.log("SetImmediate")
});

process.nextTick(() => {
    console.log('Next Tick');
});

// Priority - 3 - IO Operation
fs.readFile("sample.txt", 'utf8', (error,data)=>{
    console.log("Priority - 3 - IO Operation (readFile)")
})


// Priority - 2 - OS Operation
http.createServer((req, res)=>{
    // console.log("SERVER CREATED")
    // res.end();
}).listen(6, "localhost", ()=>console.log("Priority - 2 - OS Operation ( )"));

new Promise((resolve, reject)=>{
    resolve("Microtask Queue (Resolving Promise)")
}).then((res)=>console.log(res))

console.log('Global Scope');


// Check Phase
setImmediate(() => {
    console.log("SetImmediate")
});

// Before next phase
process.nextTick(() => {
    console.log('Next Tick');
});

// Priority - 3 - IO Operation
fs.readFile("sample.txt", 'utf8', (error,data)=>{
    console.log("Priority - 3 - IO Operation (readFile)")
})

// Priority - 1 - Timers
setTimeout(()=>{
    console.log("Priority - 1 - Timers (setTimeout)")
}, 0)

// Priority - 2 - OS Operation
http.createServer((req, res)=>{
    // console.log("SERVER CREATED")
    // res.end();
}).listen(5056, "localhost", ()=>console.log("Priority - 2 - OS Operation ( )"));

new Promise((resolve, reject)=>{
    resolve("Microtask Queue (Resolving Promise)")
}).then((res)=>console.log(res))

console.log('Global Scope');