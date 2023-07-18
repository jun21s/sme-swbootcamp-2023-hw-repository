// input text 값을 받아오는 함수 생성
function enter() {
    let input = document.getElementById('todo');
    let sentence = input.value;
    
    // 빈칸이 아닐때 내용 출력
    if (sentence!==''){
        // 줄 마다 list 출력
        let listItem = document.createElement('div');
        listItem.setAttribute('readonly', 'true');
        // 체크박스 생성
        let checkbox = document.createElement('input');
        checkbox.type='checkbox';
        checkbox.onclick = function(){
            if (checkbox.checked) {
                listItem.style.textDecoration = "none";
            } else {
                listItem.style.textDecoration = "none";
            }
            };

        //수정 버튼 만들기
        let change = document.createElement('input');
        change.type = 'button';
        change.value = '수정';
        change.readOnly = true; // readonly 속성 추가
        change.onclick = function(){
            if (change.readOnly) {//input 버튼이 readonly 상태일 때 사용 가능
                change.readOnly = false;
                change.value='저장';
                label.contentEditable = true; // label의 내용을 건드릴 수 있게
                listItem.style.textDecoration = "underline";
                listItem.style.color = "red";
                label.focus();
            } else { //수정이 끝나고 난 뒤에
                change.readOnly = true;
                change.value='수정';
                label.contentEditable = false; //label의 내용을 건드릴 수 없게
                listItem.style.textDecoration = "none";
                listItem.style.color = "black";
            }
        };
        
        let label = document.createElement("label");
        label.innerText = sentence;
        
        // 클래스 부여
        checkbox.classList.add('list-checkbox');
        label.classList.add('list-label');
        label.classList.add('list-sentence');
        change.classList.add('list-button');
        listItem.classList.add('list-item');

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(change);

        let list = document.getElementById('todo_list');
        list.appendChild(listItem);
        
        //입력창 초기화
        input.value='';

    }
    
}
    
//전체 선택
function all_select(){
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(function(checkbox){
        checkbox.checked = true;
    });
}
// 선택 해제
function select_not() {
let checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach(function (checkbox) {
checkbox.checked = false;
checkbox.parentElement.style.textDecoration = "none";
});
}
//선택된거 삭제
function select_delete() {
let checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach(function (checkbox) {
if (checkbox.checked) {
let listItem = checkbox.parentElement;
listItem.parentElement.removeChild(listItem);
}
});
}