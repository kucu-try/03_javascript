
// number
/*
    숫자 타입
    자바의 경우 정수와 실수를 구분해 int, long float 등과 같은 다양한 숫자 타입을 제공한다.
    하지만 자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다.
*/

let integer = 10;
let double = 5.5;
let nagative = -10;
console.log(10 === 10.0);

console.log(10/4);

/* 
    숫자 타입은 추가적으로 세가지 특별한 값도 표현할 수 있다.
    infinty: 양의 무한대
    -infinity: 음의 무한대
    NaN : 산술 연산 불가능함
*/

console.log(10/0); //infinity
console.log(10/-0); //-infinity
console.log(1 * "문자열"); //infinity
