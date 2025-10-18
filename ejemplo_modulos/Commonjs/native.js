const fs = require('fs')

const content = fs.readFileSync('./example.txt')

console.log(`Contenido del archivo: ${content}`)