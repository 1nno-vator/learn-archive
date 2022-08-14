# var, let, const (22.08.14)

let과 const 도입 이전, var는 재선언과 재할당이 가능하다는 편함이 존재하였으나 여러가지 문제를 초래할 가능성이 있었다.
```javascript
function main() {
    for (var i=1; i<=5; i++) {
        console.log(i);
    }
    console.log('for문 이후');
    console.log(i);
}

main();
```
기존 C, Java 등 블록단위의 스코프를 사용하는 경우 for문이 수행된 이후 i를 print하면 에러가 날 것이다.
그러나 var는 function-level scope를 가지고 있기 때문에 
```
1
2
3
4
5
for문 이후
6
```
이렇게 for문 이후에도 i 변수를 정상적으로 출력할 수 있는 문제가 있다.
이러한 성질을 이용하여 특정한 로직을 구현할 수도 있겠으나, 대부분의 경우 이러한 케이스는 예상치 못한 문제를 야기한다.

이 외에도 <b>변수 중복선언 가능성, 변수 선언 이전의 참조, 무분별한 전역변수 양산</b> 등의 문제를 야기한다.
이러한 배경으로 인하여 javascript에도 블록단위 스코프(Block Scope)를 가지는 let과 const가 탄생하게 된다.

## 각 변수 타입의 성질

let과 const는 ES6(ECMA2015) 이후 도입된 변수 타입으로 아래와 같은 성질을 가지고 있다.

### var
    - 변수 재선언 가능
    - 재할당 가능
    - Function-level Scope

#### let
    - 변수 재선언 불가능
    - 재할당 가능
    - Block Scope

#### const
    - 변수 재선언 불가능
    - 재할당 불가능
    - Block Scope

var와는 달리 let과 const는 블록단위 스코프를 가진다.
블록단위 스코프란, 말 그대로 {} 블록 내에서만 스코프를 가진다는 것이다.
```javascript
function main() {
    for (let i=1; i<=5; i++) { // let은 for문 블록 안에서만 살아있다.
        console.log(i);
    }
    console.log('for문 이후');
    console.log(i); // ReferenceError: i is not defined
}

main();
```

## let과 const의 호이스팅 + TDZ (Temporal Dead Zone, 일시적 사각지대)
그렇다면 let과 const는 호이스팅이 일어나지 않는가?
let과 const도 호이스팅이 발생한다.
변수는 <b>선언 - 초기화 - 할당</b>의 단계를 거치는데 var는 <b>선언과 동시에 초기화가 발생</b>하며 let과 const는 선언과 초기화 단계가 분리되어있다.
```javascript
// var
console.log(a); // undefined
var a = 1; // 호이스팅되어 스코프 최상단에 var a; 가 존재
console.log(a); // 1

// let (or const)
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 1; // 호이스팅되어 스코프 최상단에 let a; 는 존재하나, 아직 초기화되지 않았다.
console.log(a);
```
let과 const도 마찬가지로 호이스팅이 발생하지만, 초기화되지 않은 상태로 호이스팅되므로 값이 할당되기 전에 접근하려고 하면 ReferenceError가 발생한다.
그렇다면 초기화되기 전까지 let과 const는 어디에 있는걸까?

let과 const는 변수가 초기화되기 전엔 TDZ (Temporal Dead Zone, 일시적 사각지대)의 관리를 받는다.
이 TDZ 내에 있는 동안에 변수에 접근하려고하면 'Cannot access '...' before initialization'라는 에러를 발생시킨다.

즉, let과 const 또한 var와 같이 호이스팅이 발생한다.
허나 var는 선언과 (undefined로의)초기화가 동시에 이루어져 변수에 접근이 가능하지만 let과 const는 초기화 이전엔 TDZ의 관리를 받으며 이때 변수에 접근하려고하면 에러를 뱉는다는 것이다.
