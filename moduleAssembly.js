// import { Assembly } from "./module/Assembly.js";
// import { BaseData } from "./module/NewDate.js";
// import { TagComponent } from "./module/TagComponent.js";
// export {Assembly, BaseData, TagComponent}

const BaseData = require('./module/NewDate.js')

const test = new BaseData()
console.log(test)