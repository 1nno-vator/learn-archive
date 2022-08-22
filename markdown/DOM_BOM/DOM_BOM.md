# DOM과 BOM (22.08.22)

### DOM (Document Object Model, 문서 객체 모델)

- HTML, XML 문서에 Javascript, Python등 프로그래밍 언어를 통해 접근할 수 있는 interface이다.
- DOM은 문서의 구조화된 표현(노드 트리 구조)을 제공하며 이를 통해 스크립팅 언어로 웹 페이지를 접근할 수 있다.

```html
<html>
  <head> </head>
  <body>
    <div>Hello, DOM!</div>
  </body>
</html>
```

위와 같은 HTML 문서는 아래와 같은 트리 구조를 가진 DOM으로 생성된다.

```
html
  - head
  - body
    - div
	- Hello, DOM!
```

- <b>DOM은 4가지 종류의 노드로 구성된다.</b>
  - Document Node: 트리 최상위에 존재하며 하위 요소들에 접근하기 위한 스타팅 포인트
  - Element Node: HTML 문서의 Tag들
  - Attribute Node: 태그 안에 name, value 등 속성을 가리키는 노드
  - Text Node: DOM 트리의 최종단  
    <br>
- <b>DOM은 HTML로부터 생성되나 항상 동일하지는 않다.</b>
  - 작성된 HTML 문서가 유효하지않을때 (head, body를 빼먹어도 DOM 트리엔 생성(교정)되어 나타난다
  - 자바스크립트에 의해 DOM이 수정될 때, DOM을 업데이트하지만 HTML 문서의 내용을 변경하진 않는다. (새로고침시 리셋)
    <br>
- <b>DOM은 브라우저에서 보이는 것이 아니다.</b>
  - 브라우저에서 보이는 것은 렌더 트리
  - 렌더 트리는 CSSOM과 DOM의 조합이다.
  - 렌더 트리는 display: none의 속성을 가진 요소는 포함하지않으나, DOM 트리엔 포함된다.
    <br>
- <b>DOM은 가상요소를 포함하지 않는다.</b>
  <br>
- <b>DOM을 사용하여 웹페이지(문서)에 접근 할 수 있는 대표적인 예시들</b>
  - document.getElementById, document.getElementsByClassName, document.querySelector 등

---

### BOM (Browser Object Model, 브라우저 객체 모델)

- BOM은 웹페이지 내용을 제외한 브라우저 창 내 모든 객체 요소를 말한다.
- <b>대표적으로 Window, Location, History, Screen</b> 객체가 있다.
