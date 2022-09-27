let fs = require('fs')
setTimeout(()=>{
    process.nextTick(()=>{
        console.log("nextTick in setTimeout")
    })
    console.log("Inside setTimeout")
}, 0)

fs.readFile("sample.txt", "utf8", (error, data)=>{
    
    process.nextTick(()=>{
        console.log("nextTick in readFile")
    })

    console.log("Inside readFile")
    
    for (let index = 0; index < 10000; index++) {
        console.log(index)
    }

    fs.writeFile("sampleWrite.txt", data, (error)=>{
        if(error)
            console.log(error)
        else
            console.log("Inside WriteFile - (File Saved)")
    })
})

