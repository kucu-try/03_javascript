/* 01_property-value-shorthand(프로퍼티 값 단축 구문) */

var id = "p-0001";
var price = 30000;
var nation = "korea";

var product={
    id:id,
    price:price,
    nation:nation
}


console.log(product);


/* 
ES6에서 프로퍼티 값으로 변수를 사용하는 경우
변수의 이름으로 프로퍼티 키를 생성하게되어 key와 값을 생략할 수 있다.
프로퍼티 키는 변수 이름으로 자동 생성 된다.
*/

var product2 = { id, price};
console.log(product2);