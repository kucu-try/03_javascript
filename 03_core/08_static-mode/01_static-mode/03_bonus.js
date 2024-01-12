//암시적인 글로벌 변수 선언 금지
function Test(){
    id = "test";
    console.log(id);
}

Test();
console.log(id);

//-------------------------------------------------
// 2. 변수, 함수, 매개변수 삭제 금지;
var strictVar = 5;
delete strictVar;

// ------------------------------------------------
//3, 중복된 매개변수 이름 금지;
function strictParamExample(param1, param1){
    
//    console.log(param1); 마지막 매개변수로 초기화 됨
    // console.log(arguments);
}

// strictParamExample(1,2);

//------------------------------
//4. 엄격 모드에서는 this 사용이 금지
function strictThisExample(){
    'use strict';
    console.log(this); // undefined 나옴
}

// strictParamExample();

