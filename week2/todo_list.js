function deleted() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach(function(checkbox) {
    if(checkbox.checked==true){

      var listItem = checkbox.parentNode;
      listItem.parentNode.removeChild(listItem);
      
    }
  });


}

function selectAll() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
  });
}

function unselectAll() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
}



function listmaking() {
    // 입력한 할 일 가져오기
var to_do = document.getElementById("todolist").value;

  // 문자열에 공백을 제거한 후에 아무것도 입력되지 않았을때는 true가 되어 return값을 통해 함수 종료
    if (to_do.trim() === "") {
    return;
    }

    // 새로운 <li> 요소 생성
var newItem = document.createElement("text");


  // 체크박스 추가
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
newItem.appendChild(checkbox);

  // 할 일 받아오기
var textNode = document.createTextNode(to_do);
newItem.appendChild(textNode);

    // 목록에 추가
var list = document.getElementById("list");
list.appendChild(newItem);

  // 줄 바꿈 추가
var lineBreak = document.createElement("br");
newItem.appendChild(lineBreak);

    // 입력 필드 비우기
document.getElementById("todolist").value = "";



  }

