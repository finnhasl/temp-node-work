// Modules
// You split code into modules
// CommonJS library every file is module (BY DEFAULT)
// Modules - Encapsulated Code

const names = require('./4-names')
const sayHi = require('./5-utils')
console.log(names)
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)