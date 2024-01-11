/* node.js 스크립트의 최상위 레벨에서 this */


/* 
    최상위 scope에서 this 가 {}로 출력되는 이유
    common.js 모듈 시스템을 사용하는 node 의 문제이기 때문이다.
    node는 각 모듈이 자체의 독립된 스코프를 갖기 때문에 최상위 레벨의 코드 블록이 모듈 내에서 실행되어 this 가 빈 객체가 되는 것이다.
*/
console.log(this);

// 모듈이 독립된 환경에서 실행되는 것 확인하기
console.log(this === module.exports);

//일반함수
function testFunction(){
    //스코프가 분리되면서 this는 상위 객체를 바라보게 되고
    // global 을 참조하는 상태가 된다.
    console.log(this);
}

testFunction();

// 화살표 함수 (ex6)  
const test = () =>{
    // 화살표 함수는 this를 갖지 않기 때문에
    // 화살표 함수에서 호출하는 this 는 상위 스코프의 this를 참조하게 된다.
    // 이로인해 최상위 상태의 this를 호출하게 되는 것이고 this는 상위 스코프의
    // 객체를 참조하기 때문에 최상위 스코프의 상위가 존재하지 않아 this는 빈 객체가({}) 가 출력되는 것이다.
    console.log(this);
};
// 화살표 함수 호출
test();

// 브라우저의 상위 스코프 window
// node의 상위 스코프 global

//================================================== 함수와 메서드의 차이 ===============================

var func = function(){
    console.log(this);
}

const obj = {
    name : "a",
    method : func
};
// 클래스 외부의 묶음을 함수
console.log("====== 함수 호출=====");
func();
// 클래스 내부의 묶음을 메서드
console.log("====== 메서드 호출=====");
obj.method();

// ==============메서드 내부의 this=============
console.log("=======메서드 내부의 this 확인==========");
const innerThis = {
    methodA: function(){console.log(this)},
        inner :{
            methodB : function(){
                console.log(this);
            }
        }
}

innerThis.methodA();
innerThis.inner.methodB();

// ===================== Object Level Bind=================

class person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let john = new person("john", 30);
let risa = new person("risa", 40);

function getInfo(){
    return (`안녕하세요 ${this.name} 이에요
    저의 나이는 ${this.age} 입니다
    잘 부탁드려요~`);
}

//전역 공간에 선언된 name과 age 가 없기 때문에 undefined가 출력된다.
console.log(getInfo());

//this를 지정하는 것도 가능하다.
const boundjohn = getInfo.bind(john);
console.log(boundjohn());

const boundrisa = getInfo.bind(risa);
console.log(boundrisa());

const 한송카피 = {
    name: "한피",
    age: 20,
    getInfo : function(){
        console.log(`${this.name}의 나이는  ${this.age}`);
    }
}

한송카피.getInfo();

const copy = 한송카피.getInfo.bind(john);

copy();