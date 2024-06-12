const {BaseData,assembly,tagComponent} = require('./moduleAssembly')
const date = new Date();
let baseData = new BaseData(date.getDate(),date.getMonth()+1,date.getFullYear())

console.log(baseData)
console.dir(baseData)
console.log(typeof(baseData))
console.log(Object.values(baseData))
console.log(Object.keys(baseData))

console.log(baseData.day)
console.log(typeof(baseData.day))