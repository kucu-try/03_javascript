// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값 존재 여부
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.

//값이 없으면 falsy
//값이 있으면 trusy
//하지만!!
//boolean 타입으로 넣어서 값이 있으면 falsy 없으면 trusy

// let test1;
// console.log(!!test1);


let test = {  //이게 객체 타입!
    a: null,
    b: 1,
    fun(){
        console.log("sdfsd");
    }
}

// test 라는 객체의 프로퍼티에 b의 값이 존재해?
if(test?.b){ // ? trusiy , falsiy인지 확인 ?는 객체에만 쓸수 있다.
    console.log("true");
}else{
    console.log("false");
}

//console.log(test?.b); 테스트에 b가 있으면 b를 실행해라
// test라는 객체의 프로퍼티에 b에 (값)이 존재하는 경우 
console.log(test.b && "a");  //트루일 때만 a를 출력

console.log("============");
test.b ? console.log("true") : console.log("false");  //값이 포인트!

console.log("=========================");

test.fun();