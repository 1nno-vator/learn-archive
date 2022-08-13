// //---------------
// console.log(a); // 아직 정의(대입)된 값은 없으나, 변수 자체는 존재한다.
// var a = 1;
// console.log(a); // 1
// //---------------
// console.log(typeof someFunc); // function
    
// someFunc(); // a (= 호이스팅되어 호출이 가능하다.)

// function someFunc() { // 호이스팅된다. 
//     var a = 0;
//     console.log('a');
// }
// //---------------
console.log(typeof someFunc); // undefined

someFunc(); // ReferenceError는 발생하지않으나, Type Error 발생

var someFunc = function() { // 선언부인 var someFunc만 호이스팅되고, 대입부는 호이스팅되지않는다.
    var a = 0;
    console.log('a');
}