// 할 일 추가 함수
function addTodo() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim(); //공백 제거 했을 때 입력값이 없으면 todoList에 포함되지 않게한다.


    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var taskItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;

        

        //수정 버튼
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = enableEdit;

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(editButton);
        taskList.appendChild(taskItem);

        taskInput.value = "";
    } else {
        alert("할 일을 입력하세요.");
    }
}

// 할 일 수정 함수
function enableEdit(event) {
    var taskTextSpan = event.target.previousSibling;
    var taskTextInput = document.createElement("input");
    taskTextInput.type = "text";
    taskTextInput.value = taskTextSpan.textContent;

    // readOnly 속성을 false로 설정하여 수정 가능한 상태로 변경
    taskTextInput.readOnly = false;

    // 기존의 span 요소를 input 요소로 교체
    taskTextSpan.parentNode.replaceChild(taskTextInput, taskTextSpan);

    // input 요소의 blur 이벤트를 사용하여 수정 내용을 반영한다
    taskTextInput.addEventListener("blur", function() {
        var updatedText = taskTextInput.value.trim();
        if (updatedText !== "") {
            // 수정된 텍스트를 나타내는 새로운 span 요소 생성
            var newTaskTextSpan = document.createElement("span");
            newTaskTextSpan.textContent = updatedText;

            // input 요소를 새로운 span 요소로 교체
            taskTextInput.parentNode.replaceChild(newTaskTextSpan, taskTextInput);
        } else {
            // 수정된 텍스트가 비어있는 경우 경고창 표시
            alert("할 일을 입력하세요.");
            taskTextInput.focus();
        }
    });

    // Enter 키를 누르면 수정 완료 
    taskTextInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            taskTextInput.blur();
        }
    });

    // 입력창에 포커스를 설정하여 Edit 버튼을 누른 뒤 사용자가 바로 수정 기능을 사용할 수 있도록 함
    taskTextInput.focus();
}


// 선택된 항목 삭제 함수
function deleteSelected() {
    var taskList = document.getElementById("taskList");
    var taskItems = taskList.getElementsByTagName("li");

    for (var i = taskItems.length - 1; i >= 0; i--) {
        var checkbox = taskItems[i].getElementsByTagName("input")[0];
        if (checkbox.checked) {
            taskList.removeChild(taskItems[i]);
        }
    }
}

// 모든 항목 선택 함수
function selectAll() {
    var taskList = document.getElementById("taskList");
    var checkboxes = taskList.getElementsByTagName("input");

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
}

// 모든 항목 선택 해제 함수
function deselectAll() {
    var taskList = document.getElementById("taskList");
    var checkboxes = taskList.getElementsByTagName("input");

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}
