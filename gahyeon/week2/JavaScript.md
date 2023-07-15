## JavaScript

---

#### 논리연산자

|| : or
&& : and
! : not

---

변수 선언
var

---

#### button

- name(중복 가능) or id(고유)
- type : submit(기본값), reset, button(버튼일때 지정)
- value

```
<button name="button">버튼입니다</button>
```

---

##### 함수 선언 호출

1. 기본

```
function 함수명(매개 변수1, 2, ...){  /// 함수선언
    실행문장;
}
함수명(인자1, 2, ...) /// 함수호출
```

```
function 함수명(매개 변수1, 2, ...){  /// 함수선언
    실행문장;
}
<button type="button" onclick="함수명(매개변수)">버튼</button> /// 함수호출
```

2. 함수

```
var 변수명 = function(매개변수1, 2, ...){ // 함수선언
실행문장;
}
변수명(인자1, 2, ...); // 함수호출

```

---

#### 조건문

1. if문

```
if (표현식) {;}
else if(){;}
else{;}
```

2. switch

```
switch (조건 값) {
    case 값1:
    실행문;
    break;

    case 값2:
    실행문;
    break;

    default:
    조건 값이 어떠한 case 절에도 해당하지 않을 때 실행하고자 하는 실행문;
    break;
    }
```

---

#### 반복문

1. do/while

```
do {실행문;}
while (표현식);
```

2. for

```
for (초기식; 조건식; 증감식) {실행문;}
```

---
