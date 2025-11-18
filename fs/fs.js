const fs = require('fs')

const fileName = "example.txt";

// Creating file
if (!fs.existsSync(fileName)) {
  console.log("Creating file for the first time")
  fs.writeFileSync(fileName, 'Hello world, this is a example file')
}
console.log('File created succesfully')

// Read
const fileContent = fs.readFileSync(fileName, 'utf-8')
console.log("File content: ", fileContent)

// Update
fs.appendFileSync(fileName, "\nNew content!!!!")
console.log("File updated")

const fileContentUpdated = fs.readFileSync(fileName, 'utf-8')
console.log("New file content: ", fileContentUpdated)

// Delete
fs.unlinkSync(fileName)
console.log("File deleted succesfully")