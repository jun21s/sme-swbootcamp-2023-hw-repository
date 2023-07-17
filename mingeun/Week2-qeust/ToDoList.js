// <!-- 변수 정의 -->
const add_button = document.getElementById('add_button');
const list = document.getElementById('list');


// <!-- 이벤트 생성  -->
// 플러스 버튼을 누를 때의 이벤트, 엔터키를 keydown 했을 때 이벤트 생성
add_button.addEventListener('click', clickButton);
label.addEventListener('keydown', clickEnterKey);


//  <!-- 버튼을 누르면 html 속성들을 추가 시키기 -->
function clickButton() {
  const toDoList = document.createElement('li');
  toDoList.innerHTML = `<span><input type="checkbox" id="checkbox"><label for="checkbox"></label>` + `<input type="text" id="tdl" class="tdl" readOnly value="${label.value}"></input></span>` + `<span><input type="button" id="revise_button" value="수정" onclick="reviseText()"><input type="button" id="save_button" value="완료" onclick="saveText()"></span>` + `<span><input type="button" id="revise_ok_button" value="ok" onclick="reviseOk()"></span>`;

  // 만약에 아무것도 안친 상태라면 알림 주고 치지 못하게 하기
  if(label.value === '') {
    alert('할 일을 추가해주세요!');
  }
  
  //뭐라도 쳤다면 그대로 값 입력
  else{
    list.appendChild(toDoList);
    label.value=' ';
    }
}


// <!-- 엔터키를 누르면 html 속성들을 추가시키기 -->

function clickEnterKey() {
  const label = document.getElementById("label");
  const toDoList = document.createElement('li');
  toDoList.innerHTML = `<span><input type="checkbox" id="checkbox"><label for="checkbox"></label>` + `<input type="text" id="tdl" class="tdl" readOnly value="${label.value}"></input></span>` + `<span><input type="button" id="revise_button" value="수정" onclick="reviseText()"><input type="button" id="save_button" value="완료" onclick="saveText()"></span>`+`<span><input type="button" id="revise_ok_button" value="ok" onclick="reviseOk()"></span>`;
  
  // keycode 즉 엔터키를 keydown 했을 때를 if문으로~
  if(window.event.keyCode == 13) {
    if(label.value === '') {
      alert('할 일을 입력하세요');
    }
    else{
      list.appendChild(toDoList);
      label.value=' ';
    }
  }
}

//전체 선택
//querySelector()가 한 개의 요소를 반환했다면, querySelectorAll()은 주어진 CSS 선택자와 일치하는 모든 요소를 반환한다. 이때, 반환 타입은 리스트 타입이다. 따라서 인덱스를 통해 조작할 수 있다.
function allCheck() {
  const checkbox = document.querySelectorAll('#checkbox');
  for(i= 0; i <checkbox.length; i++) {
    checkbox[i].checked = true;
  }
}

//전체 해제시키기
function allUncheck() {
  const checkbox = document.querySelectorAll('#checkbox');
  for(i= 0; i <checkbox.length; i++) {
    checkbox[i].checked = false;
  }
}


// <!--선택 삭제를 누르면 체크박스 선택 삭제-->
function checkedDelete() {
const checkbox = document.querySelectorAll('#checkbox');
for (i =0; i <checkbox.length; i++) {
  if (checkbox[i].checked===true) {
    checkbox[i].parentElement.parentElement.remove();} 
}
}

// 수정버튼 누르면 readonly기능 풀리게하기, 수정확인 버튼 나오게하기
function reviseText() {
const tdl = document.querySelectorAll('.tdl');
const checkbox = document.querySelectorAll('#checkbox');
let i=0;
for (i =0; i <tdl.length; i++){
  if(checkbox[i].checked===true){
    tdl[i].readOnly=false;
    document.getElementById("revise_ok_button").style.visibility="visible";
  }
}
}

// 수정을  다 한 뒤 ok버튼을 누르면 readonly기능 넣기
function reviseOk() {
const tdl = document.querySelectorAll('.tdl');
const checkbox = document.querySelectorAll('#checkbox');
const result= confirm("이대로 수정하시겠습니까?")
let i=0;
for (i =0; i <tdl.length; i++){
  if(checkbox[i].checked===true){
    if(result===true){
    tdl[i].readOnly=true;
    checkbox[i].checked = false;
    document.getElementById("revise_ok_button").style.visibility="hidden";
    alert('수정되었습니다.☺️')
    }
  }
}
}


// 완료버튼 누르면 텍스트들에 줄 긋기 
function saveText() {
const tdl = document.querySelectorAll('.tdl');
const checkbox = document.querySelectorAll('#checkbox');
let i=0;
for (i =0; i <tdl.length; i++){
  if(checkbox[i].checked===true){
    tdl[i].style.textDecoration = "line-through";
    tdl[i].style.color = "gray";
    checkbox[i].checked = false;
    alert('알찬 하루를 위해 오늘도 수고하셨어요☺️')
  }
}
}