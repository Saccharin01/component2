const {BaseData,assembly,tagComponent} = require('./moduleAssembly')
const date = new Date();
let baseData = new BaseData(date.getDate(),date.getMonth()+1,date.getFullYear())

console.log(baseData)
console.dir(baseData)
console.log(typeof(baseData))
console.log(Object.values(baseData))
console.log(Object.keys(baseData))
console.log(Object.entries(baseData))

console.log(baseData.day)
console.log(typeof(baseData.day))

console.log(typeof(baseData.day.split("일")[0]))

let something = "";
something += date.getDate()
console.log(something)
console.log(typeof(something))


let stateFunc = ()=>{
  if(baseData.day.split("일")[0] == date.getDate()){
    console.log('tracking!')

  }
}


stateFunc()