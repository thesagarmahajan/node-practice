let fs = require('fs')
// Global Scope
setImmediate(()=>console.log("This is setImmediate"))
setTimeout(()=>console.log("This is setTimeout"), 0)

// Inside an I/O Cycle
// fs.readFile("sample.txt", "utf8", (error,data)=>{
//     setImmediate(()=>console.log("This is setImmediate inside readFile"))
//     setTimeout(()=>console.log("This is setTimeout inside readFile"), 0)
//     console.log("File Data: "+data)
// })