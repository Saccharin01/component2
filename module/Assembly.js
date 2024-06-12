<<<<<<< Updated upstream
const container = ()=>{
=======
const tagComponent = require('./TagComponent')


const Assembly = (tagNmae,textNode)=>{
>>>>>>> Stashed changes
  return`
  ${tagComponent(tagNmae,textNode)}
  ${tagComponent(tagNmae,textNode)}
  ${tagComponent(tagNmae,textNode)}
  `
}
module.exports = Assembly