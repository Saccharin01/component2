const tagComponent = (tagName, textNode) =>{
  return `<${tagName}>${textNode}</${tagName}>`
}

const container = ()=>{
  return`
  ${tagComponent("header", "헤더 부분")}
  ${tagComponent("main", "메인 부분")}
  ${tagComponent("footer", "푸터 부분")}
  `
}