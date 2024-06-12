const component = (age, job) => {
  let obj = {
    name: "조우식",
    age: age,
    job: job,
  };

  let innerFunc = () => {
    if (obj.age >= 20) {
      return "여름엔 역시 보드카가 최고지!"
    } else {
      return "여름엔 역시 요쿠르트가 최고지!"
    }
  };
  
  let anotherFunc = ()=>{
    if(obj.job.includes("개발자")){
      return "오호..."
    } else {
      return "어허"
    }

  }

  return `
  <h1>${obj.name}</h1>
  <h2>${innerFunc()}</h2>
  <h3>${anotherFunc()}</h3>
  `;
};
console.log(component(10,"프로게이머"))
console.log(component(20,"코더"))
console.log(component(30,"개발자"))
