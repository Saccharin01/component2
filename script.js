const {BaseData,assembly,tagComponent} = require('./moduleAssembly')
const date = new Date();
let baseData = new BaseData(date.getDate(),date.getMonth()+1,date.getFullYear())

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