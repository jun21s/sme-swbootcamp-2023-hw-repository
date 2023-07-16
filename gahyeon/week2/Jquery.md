## Jquery

---

#### import

1. 웹 접속

```
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
```

2. 다운로드

```
<script src="jquery-3.5.1.min.js"></script>
```

---

#### 구조

기본형
: jQuery(선택자).함수

단축형
: $(선택자).함수();

---

<b>선택자</b>

"\*", ".class", "element", "#id"

"div:first-child", "div:nth-child(2)"

"ul > li"

"[name|=apple]"

<br/>

<b>함수</b>

.after() : 해당 요소 뒤에 내용 추가
.before()
.html()
.append() : 선택 대상 자식 객체 마지막에 html 삽입
.wrap() : 선택 요소의 부모요소 생성
.remove()
.empty()
.on()
.ready()
.load()

.click()
.mousemove()

.mouseenter() : 포인터가 선택자 안에 있을 때 호출
.mouseleave()
.mousedown() : 마우스버튼 눌린 상태일 때 호출
.mouseup()
.hover()

css스타일 변경
.addclass()
.removeclass()
.css()

---

ex)

```
$('#해당 id 값').val();
```

```
$('#해당 id 값').show();
```

```
$('해당 id 값').hide();
```

```
$('#해당 id 값').text('바꿀값');
```

```
$('#btn-posting-box').text('박스 닫기');
```

---
