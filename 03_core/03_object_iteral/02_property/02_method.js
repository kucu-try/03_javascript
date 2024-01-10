/* 
  자바스크립트의 함수는 객체이다.
  함수는 값으로 취급할 수 있고 프로퍼티 값으로 사용할 수 있다.
*/

let dog = {
    name : "뽀삐",
    eat : function(food){
      // console.log(`${name}(은)는 ${food}를 맛있게 먹어요`); 
      console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);
    }
    // eat : (food)=>{
    //   console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);
    // }
  }
  // dog.name = "백구";

  // dog.eat("고구마");  

  // dog.eat("김치");