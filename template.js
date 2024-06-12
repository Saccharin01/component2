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




/**
 * todo new date()을 이용해서 날짜를 구할 것.
 * todo 해당 날짜를 함수에 적용할 것
 * * ===============
 * todo 오늘이(오전) 12일 이 맞다면 "B방식"
 * todo 오늘이(오후) 12일 이 아니라면 "A방식"
 * 
 * ! result
 * ? 밤 10시가 되면 수면 모드로 변하는 핸드폰
 * ? 상태 지정이 어려울 거 같은데...?
 */