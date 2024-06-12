const {BaseData,assembly,tagComponent} = require('./moduleAssembly')
const date = new Date();
let baseData = new BaseData(date.getDate(),date.getMonth()+1,date.getFullYear())
let baseData2 = new BaseData(date.getDate(),date.getMonth()+1,date.getFullYear())
let baseData3 = new BaseData(date.getDate(),date.getMonth()+1,date.getFullYear())

const fs = require('fs')
console.log(fs)

let jsonLike = {};

jsonLike.UserOne = baseData
jsonLike.UserTwo = baseData2
jsonLike.UserThree = baseData3
console.log(jsonLike)
console.log(jsonLike.UserTwo)

fs.writeFile("test.json",JSON.stringify(jsonLike,null,2),'utf-8',(err)=>{})
// console.log(baseData)
// console.dir(baseData)
// console.log(typeof(baseData))
// console.log(Object.values(baseData))
// console.log(Object.keys(baseData))
// console.log(Object.entries(baseData))

// console.log(baseData.day)
// console.log(typeof(baseData.day))
// console.log(typeof(baseData.day.split("일")[0]))

let something = "";


let stateFunc1 = ()=>{
  something += date.getDate()
  // console.log(something)
  // console.log(typeof(something))

  if(baseData.day.split("일")[0] === something){
    console.log('tracking!')
    something = ""
    return baseData.day
  } else{
    return "tracking process"
  }
}


// console.log(baseData.month)
// console.log(baseData.month.split('월')[0])
// console.log(typeof(baseData.month.split('월')[0]))

let stateFunc2 = ()=>{
  something += date.getMonth()+1
  console.log(something)

  if(baseData.month.split('월')[0] === something){
    something = ""
    return baseData.month

  }else{
    return "꽝이지롱!!!!!"
  }
}
let stateFunc3 = ()=>{
  something += date.getFullYear()
  if(baseData.year.split("년")[0]===something){
    something=""
    return baseData.year
  }else{
    return "꽝이지롱!!!!!"
  }
}


// stateFunc()
console.log(something)
console.log(stateFunc1())
console.log(stateFunc2())
console.log(stateFunc3())

tagComponent("h1",stateFunc1())
tagComponent("h1",stateFunc2())
tagComponent("h1",stateFunc3())