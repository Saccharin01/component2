// import { Assembly } from "./module/Assembly.js";
// import { BaseData } from "./module/NewDate.js";
// import { TagComponent } from "./module/TagComponent.js";
// export {Assembly, BaseData, TagComponent}

const BaseData = require('./module/BaseData.js')
const assembly = require('./module/Assembly.js')
const tagComponent = require('./module/TagComponent.js')


const test = new BaseData(1,2,3)
console.log(test)
console.log(tagComponent("h1","안녕하세요"))
console.log(assembly())
