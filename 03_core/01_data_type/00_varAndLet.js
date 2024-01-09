
// function test() {
//     //var의 스코프는 전역
//     for(var i = 0; i <= 3; i++ ){

//     }
//     console.log(i);
// }

test();

//let을 사용하는 경우
function test() {
    //let의 스코프는 for문까지
    for(let i = 0; i <= 3; i++ ){

    }
    console.log(i);
}

test();