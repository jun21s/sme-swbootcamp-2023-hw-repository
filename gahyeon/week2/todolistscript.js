const inputField = document.getElementById("inputField"); // 할 일 입력창
const toDoList = document.getElementById("toDoList"); // 할 일 리스트창
const addbtn = document.getElementById("addbtn"); // add 버튼

// 할 일 추가
addbtn.addEventListener("click", function addtodo() {
  if (!inputField.value) {
    alert("내용을 입력해 주세요!");
  } else {
    const li = document.createElement("li"); //부모 li

    const input = document.createElement("input"); // 체크 버튼
    input.type = "checkbox";

    const p = document.createElement("p"); // 할 일
    p.innerHTML = inputField.value; // 할 일 추가

    const fixbtn = document.createElement("button"); // 수정 버튼
    fixbtn.className = "fix";
    fixbtn.innerHTML = "수정";

    const delbtn = document.createElement("button"); // x 버튼
    delbtn.className = "Del";
    delbtn.innerHTML = "X";

    li.append(input, p, fixbtn, delbtn);
    document.querySelector("#toDoList").append(li);

    inputField.value = ""; // 입력창 초기화
  }
});

// ---------------------------------------------

// 전체 선택
function selectAll() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((input) => {
    input.checked = AllSelect.checked;
  });

  // const btnElement = document.getElementById(".AllSelect");
  // btnElement.value = "선택해제"; // value, innertext도 안됨..

  // 요소 선택 해제 시 전체선택 체크 해제되게
  // 요소 전체 선택 시 전체선택 체크 선택되게
}

// ---------------------------------------------
// 전체 삭제

const Delbtn = document.getElementById("Delbtn"); // del 버튼

Delbtn.addEventListener("click", () => {
  const all_list = document.querySelectorAll("li");

  alert("전체 삭제합니다");

  for (let i = 0; i < all_list.length; i++) {
    all_list[i].remove();
  }
});

// ---------------------------------------------
// 개별 삭제

const Del = document.querySelectorAll(".Del"); // del 버튼
const Del_list = Del.length;

for (var i = 0; i < Del_list; i++) {
  Del[i].addEventListener("click", function deltodo() {
    alert("이 목록만 삭제합니다");

    console.log(Del.parentElement);

    // const Del_par = event.parentElement; // 안됨
    // Del.remove(); // 안됨
    // Del_list.removeChild(Del[i].parentNode); // 안됨
  });
}

// ---------------------------------------------
// 수정

$(document).on("click", ".fix", function () {
  var returnValue = prompt("수정할 내용을 입력해주세요");
});

// ---------------------------------------------
// 저장 기능
// input readonly 속성 사용
