// this 키워드란? 자신이 속한 객체를 가리키는 자기참조변수이다.
// this는 자신을 '호출'하는 방법에 따라 다른 값을 가리키게 된다.
// => this는 자신을 '호출'한 주체를 가리킨다.

var someone = {
    name: 'KMS',
    someFunction: function() {
        console.log(this);
    }
}

// case 1
someone.someFunction();
// someFunction 함수를 직접적으로 호출한 주체는 someone이 된다. 
// 정리코멘트: this는 someFunction을 직접적으로 호출한 주체인 someone이다.

// case 2
var myFunction = someone.someFunction;
myFunction();
// case 1과 같이 동일한 someFunction을 호출하고 있다. 
// 정리코멘트: this는 myFunction을 호출한 주체인 window 객체(=글로벌 객체, 전역객체)이다.

// case 3
document.getElementById('btn').addEventListener('click', someone.someFunction);
// 버튼에 someone.someFunction을 클릭이벤트로 달아주었다. = 이벤트로 달아주는 시점에는 '호출'이 이루어지지 않는다.
// 실제 클릭이벤트가 실행되어 함수가 '호출'되는 시점은 '버튼이 눌렸을 때'
// 정리코멘트: this는 someFunction(or myFunction)을 호출한 주체인 버튼이다.

// case 4 : bind
/*
    var bindedSomeFunction = myFunction.bind(someone);
    console.log('bindedSomeFunction()의 결과:')
    bindedSomeFunction();
    console.log('button을 클릭했을 때:')
    document.getElementById('btn').addEventListener('click', bindedSomeFunction);
*/
// bind는 호출한 방식에 상관없이 this를 고정시키는 함수를 말한다. (위 코드에서는 someone을 this로 고정)