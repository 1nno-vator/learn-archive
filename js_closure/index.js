// 전역변수를 사용하여 기억하기
// var count;

// var btn = document.getElementById('counter-btn');
// var counter = document.getElementById('counter');

// function addCount() {
//     counter.innerText = ++count;
// }

// btn.addEventListener('click', addCount);

// 클로저를 사용
var btn = document.getElementById('counter-btn');
var counter = document.getElementById('counter');

// 즉시실행함수(IIFE)는 선언되는 순간 즉시 실행되는 함수를 뜻한다.
// 함수는 실행되며 Lexical Enviroment를 생성한다.
// 클로저는 자신이 '내부함수에서 외부함수의 변수를 참조하며', '생성됐을 때의 환경을 기억'하는 함수이다. 아래의 경우
// * addCount는 선언과 동시에 실행된다.
// 1. 즉시실행함수(addCount)는 함수를 반환하고 바로 소멸한다. 반환된 함수는 '생성됐을 때의 환경을 기억'하며, '외부함수의 변수 count를 참조'하고 있는 클로저이다.
// 2. 변수 count는 클로저에 의해 참조되고 있으므로, 참조되는 동안은 사라지지않고 자신의 상태를 기억하며 외부에서 접근 할 수 없다.
// var addCount = (function() {
//     let count = 0; // 외부에서 이 count 변수에 접근할 수 있는가? X = 은닉화에 성공
//     return function() {
//         counter.innerText = ++count;
//     }
// })();
function addCount() {
    let count = 0;
    return function() {
        counter.innerText = ++count;
    }
}

// console.log(count); count에 접근 불가 (Reference Error)
btn.addEventListener('click', addCount());


// 함수형 프로그래밍에 사용
function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

const add3 = makeAdder(3);
const add10 = makeAdder(10);

console.log(add3(7)); // 3 + 7
console.log(add10(7)); // 10 + 7

// ---- 격리공간 ----
function makeCounter(cal) {
    let count = 0;
    return function() {
        count = cal(count);
        return count;
    }
}
// ---- 격리공간 ----

function add(x) {
    return ++x;
}

function subtract(x) {
    return --x;
}

const counter1 = makeCounter(add);
const counter2 = makeCounter(add);

// console.log('counter1');
// console.log(counter1());
// console.log(counter1());

// console.log('counter2');
// console.log(counter2());
// console.log(counter2());