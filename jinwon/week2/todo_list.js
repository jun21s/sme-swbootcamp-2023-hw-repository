function list_Making() {
    var inputText = document.getElementById('to_Do').value;
    // 입력된 텍스트 값 가져오기
    
    if (inputText.trim()=== "") {
        return;
        }
    // 입력된 값 없으면 실행 X

    else{
        var listItem = `<ul id='todo_list'>` + `<input type='checkbox' id='checkbox'><input id='things' type='text' readOnly value="${to_Do.value}"><button class='click' onclick='alter()'>수정</button> <button class='click' onclick='save()'>저장</button>`;
    // 리스트 아이템 HTML 생성

    document.getElementById('list').innerHTML += listItem;
    // 리스트 생성

    document.getElementById("to_Do").value = ""; // 입력 필드 비우기

    }
    }
function alter() {
    const things = document.querySelectorAll('#things');
    const checkboxes = document.querySelectorAll('#checkbox');
    let i =0;
    for(i=0; i<things.length; i++){
        if(checkboxes[i].checked===true){
        things[i].readOnly=false;
        }
    }
    }
    // 수정기능 추가
    function save() {
        const things = document.querySelectorAll('#things');
        const checkboxes = document.querySelectorAll('#checkbox');
        let i =0;
        for(i=0; i<things.length; i++){
            if(checkboxes[i].checked===true){
                things[i].readOnly=true;
                checkboxes[i].checked=false;
            }
        }
    }
    // 저장기능 추가
    function deleted() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            
        checkboxes.forEach(function(checkbox) {
            checkbox.parentNode.remove();
        });
    }
    //선택삭제 기능 추가
    function unselectAll() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        
        checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
        });
    }
    // 선택해제 기능 추가

    function selectAll() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
    });
// 전체선택 기능 추가
}