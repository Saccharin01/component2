const tagComponent = require('./TagComponent')


const Assembly = (tagNmae,textNode)=>{
  return`
  ${tagComponent(tagNmae,textNode)}
  ${tagComponent(tagNmae,textNode)}
  ${tagComponent(tagNmae,textNode)}
  `
}
module.exports = Assembly