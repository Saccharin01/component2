const date = new Date()
console.log(date) // ? full on ROK
console.log(date.getDate()) // ? date
console.log(date.getDay()) // ? mon tues ... sun 
console.log(date.getFullYear()) // ? year
console.log(date.getHours()) // ? hour (24)
console.log(date.getMonth()) // ? month

console.log(typeof(date)) // ? full on ROK
console.log(typeof(date.getDate())) // ? date
console.log(typeof(date.getDay())) // ? mon tues ... sun 
console.log(typeof(date.getFullYear())) // ? year
console.log(typeof(date.getHours())) // ? hour (24)
console.log(typeof(date.getMonth())) // ? month

console.log(typeof(date))
console.log(Array.isArray(date))

// ! date 생성자 속에 setter, getter가 있는 것으로 판단됨
// ! type object 인 거는 생성자 함수에서 튀어나온 녀석이라서 (내장 매서드)
// ! 그런데 오브젝트 엔트리 키 벨류로 뽑아내지지 않네?
// ! 아마도 이 것도 setter랑 getter가 있는건가?


console.log(Object.keys(date))
console.log(Object.values(date))
console.log(Object.entries(date))





class BaseData{
  constructor(day,month,year){
    this.day = day
    this.month = month
    this.year = year
  }
  set day(value) {
    if(typeof(value)==='number'){
      this._day = value
    } else {
      return console.error('the type of Argu is not NUMBER')
    }

  }
  set month(value) {
    if(typeof(value)==='number'){
      this._month = value

    }else{
      return console.error('the type of Argu is not NUMBER')
    }
  }
  set year(value) {
    if(typeof(value)==='number'){
      this._year = value

    }else{
      return console.error('the type of Argu is not NUMBER')
    }
  }
}


let test = new BaseData("조우식", "공욱재", "조용히 해")
console.log(test)