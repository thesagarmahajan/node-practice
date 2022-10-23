let fs = require("fs")

// Read files
fs.readFile("FileToRead.txt","utf8",(error, data)=>{
    console.log(data)
})

// Write, Update into files

fs.writeFile("FileToWrite.txt", "Content inside FileToWrite.txt", (error)=>{
    error ? console.log(error) : console.log("writeFile operation completed")
})

fs.appendFile("FileToWrite.txt", "\nAppended Line", (error)=>{
    error ? console.log(error) : console.log("appendFile operation completed")
})

// Delete files
fs.unlink("FileToDelete.txt", (error)=>{
    error ? console.log(error) : console.log("FileToDelete.txt has been deleted")
})

// Rename files
fs.rename("FileToRename.txt", "FileRenamed.txt", (error)=>{
    error ? console.log(error) : console.log("FileToRename.txt has been renamed to FileRenamed.txt")
})