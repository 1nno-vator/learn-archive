// var a = 1;
// function outer() {
//     var a = 50;

//     function inner() {
//         var a = 999;
//         var b = 999;
//         console.log(a); // a라는 변수가 2개인데, 누굴 콘솔에 남겨야하지?
//     }

//     inner();
// }
// console.log(a);

// outer();

// var a = 1;
// function outer() {
//     var b = 50;
// }
// console.log(a); // 1
// console.log(b); // ReferenceError: b is not defined

// function funcA() {
//     ...
// }

// function funcB() {
//     ...
// }

// function mFunction() {
//     funcA();
//     funcB();
// }