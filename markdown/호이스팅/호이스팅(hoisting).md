# 호이스팅 (22.08.13)
---

호이스팅은 '변수선언문', '함수선언문'이 스코프 내 최상단으로 끌어올려지는 것을 말한다.

1. 호이스팅 되는 것은 '선언부'뿐이며, '대입부'는 끌어올려지지 않는다.
    #### 
    ```javascript
    var a = 1;
    ```
    ####
    위와 같은 변수선언문은 인터프리터에 의해 아래와 같이 변환된다.
    ####
    ```javascript
    var a; // 선언부 (선언문)
    a = 1; // 대입부 (대입문)
    ```
    ####
    이중 호이스팅 되는 것은 선언부인 'var a' 부분이다.

    ```javascript
    console.log(a);
    var a = 1;
    console.log(a);
    ```
    
    #### 
    위와 같은 코드가 있다고 가정할 때 콘솔에 찍히는 것은 다음과 같다.
    ####
    ```javascript
    console.log(a); // undefined (ReferenceError가 아니다.)
    var a = 1;
    console.log(a); // 1
    ```
    ####
    실제로는 '선언부(var a)' 부분이 스코프의 최상단으로 올라왔기 때문에 우리 눈에는 보이지않지만
    실제로 동작하는 순서는 아래와 같을 것이다.
    ####
    ```javascript
    var a;
    console.log(a); // 아직 정의(대입)된 값은 없으나, 변수 자체는 존재한다.
    a = 1;
    console.log(a); // 1
    ```
    ####

2. 1과 같은 원리의 의하여 '함수표현식'은 호이스팅되지 않는다.
    #### 
    아래와 같은 '함수선언식'은 호이스팅 된다.
    ####
    ```javascript
    console.log(typeof someFunc); // function
    
    someFunc(); // a (= 호이스팅되어 호출이 가능하다.)

    function someFunc() { // 호이스팅된다. 
        var a = 0;
        console.log('a');
    }
    ```
    #### 
    반면 아래와 같은 '함수표현식'은 호이스팅되지 않는다.
    ####
    ```javascript
    console.log(typeof someFunc); // undefined

    someFunc(); // ReferenceError는 발생하지않으나, TypeError 발생
    
    // 선언부인 var someFunc만 호이스팅되고, 대입부는 호이스팅되지않는다.
    var someFunc = function() {     
        var a = 0;
        console.log('a');
    }
    ```
    ####
    위 코드에서 someFunc이 호출되는 시점에는 someFunc이 정의되어있지 않은 상태이므로 함수인지 아닌지 판단할 수 없다.
    때문에 someFunc is not a function이라는 TypeError를 볼 수 있다.

---

### 핵심개념: '선언부'는 호이스팅되나, '대입부'는 호이스팅되지 않는다.