## CSS

---

<img src="/week1/margin_padding.png" width="350">

```
ol li
ol>li
ol, li
```

```
*
#id
.class
:
```

---

가상클래스 선택자

```
a:active{color:green;}
a:hover{color:yellow;}
```

---

font-size 의 단위

- px : 픽셀, 크기 고정 표시장치(모니터)에 따라서 상대적인 크기를 가짐
- em, rem : 사용자 브라우저 설정에 따라 변화.
- % : percent, 기본글꼴의 크기에 대하여 상대적인 값을 가짐

text-align

- left, right, center
- justify : 양쪽 균등 정렬

---

[눈누](https://noonnu.cc/) | [구글폰트](https://fonts.google.com/)

```
@font-face {
    font-family: 'SF_HambakSnow';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HambakSnow.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
	font-family: 'SF_HambakSnow';
}
```

---

display

- inline : 나란히 배치
- block : 한 줄 차지

position

- static : 기본 값
- relative : 자신을 기준으로
- absolute : 요소를 일반적인 문서 흐름에서 제거, 가장 가까운 위치 지정 부모 요소에 대해 상대적으로 배치
- fixed : 요소를 일반적인 문서 흐름에서 제거

---

###<b>flex</b>

.container {

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdvoXzY%2FbtqI57PxjJE%2F3hCy7IWh2Spbt246lCXFW1%2Fimg.png" width="250">

display:flex;
: 컨테이너 가로 배치

display:inling-flex;
: 컨테이너 세로 배치

flex-direction: row;
: 기본 값. 가로 방향 배치

flex-direction: column;
: 세로 방향 배치

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbDtiiT%2FbtqI6j3D4cH%2FcDCXWYDiMt7y7AlgkpKVp0%2Fimg.png" width="250">

justify-content: center;
: 메인축 방향 아이템 수평 모두 가운데 정렬

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdREZJs%2FbtqI7xNIn9U%2FhOpbXDJigVwOZKkKSxz0g0%2Fimg.png" width="250">

align-items: center;
:아이템 수직 가운데 정렬

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb26Yne%2FbtqI2jqeusQ%2F5Azx2y4kelgjclkDHsyo40%2Fimg.png" width="300">

align-content:center;
: 여러 아이템 수직 가운데 정렬

flex-wrap;
: 아이템 줄 바꿈

flex: 1 1 0;
}

---

###<b>grid</b>
.container {
display: grid;
}

.item:nth-child(1) {
/_ 1번 라인에서 2칸 _/
grid-column: 1 / span 2;
/_ 1번 라인에서 3칸 _/
grid-row: 1 / span 3;
}

---

float : 이미지, 텍스트 요소 배치

- none, left, right

---

object-fit : 이미지

- fill : 가득 맞춤
- contain : 가로세로비를 유지, 콘텐츠 박스에 크기를 맞춤 조절
- cover : 가로세로비를 유지, 콘텐츠 박스 가득 채움, 잘려나감
- none : 조절x
