document.addEventListener('DOMContentLoaded', () => {
    const todoInputBox = document.querySelector('#todo-input-box');
    const enter = document.querySelector('#enter');
    const todoList = document.querySelector('#todo-list');
    const selectAll = document.querySelector('#select-all');
    const deselectAll = document.querySelector('#deselect-all');
    const deleteSelect = document.querySelector('#delete-select');
    const deleteAll = document.querySelector('#delete-all');

    enter.addEventListener('click', () => {
        if (todoInputBox.value === "") {
            return;
        }

        const item = document.createElement('div');
        item.className='item';

        const checkbox = document.createElement('input');
        checkbox.className='checkbox';
        checkbox.setAttribute('type','checkbox');

        const text = document.createElement('span');
        text.textContent = todoInputBox.value;
        text.className='text';

        const corBtn = document.createElement('button');
        corBtn.textContent = '수정';
        corBtn.className='corBtn';

        const delBtn = document.createElement('button');
        delBtn.textContent = '삭제';
        delBtn.className='delBtn';

        delBtn.addEventListener('click',(event) => {
            event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode);
        })

        corBtn.onclick = function () {
            // 편집 가능한 상태
            if (text.getAttribute('contenteditable') === 'true') {
                text.setAttribute('contenteditable', 'false');
                // 편집 불가능 상태로 변경
                corBtn.textContent = '수정';
            } else {
                text.setAttribute('contenteditable', 'true');
                text.focus(); // text 요소에 포커스 설정
                corBtn.textContent = '저장';
            }
        }

        checkbox.addEventListener('change',() => {
            if (checkbox.checked) {
                text.style.textDecorationLine = "line-through";
                text.style.textDecorationColor = "rgb(173, 173, 173)";
                item.style.backgroundColor = "rgb(219, 226, 240)";
            } else {
                text.style.textDecorationLine = "none";
                item.style.backgroundColor = "white";
            }
        })

        // selectAll.addEventListener('click',(event) => {
        //     checkbox.checked = selectAll.click;
        //     text.style.textDecorationLine = "line-through";
        //     text.style.textDecorationColor = "rgb(173, 173, 173)";
        //     item.style.backgroundColor = "rgb(219, 226, 240)";
        // })

        selectAll.addEventListener('click', () => {
            const checkboxes = document.querySelectorAll('.checkbox');
            // 반복 수행
            checkboxes.forEach((cb) => {
                // 체크박스 요소를 나타내는 매개변수 cb 정의
                cb.checked = true;
                cb.dispatchEvent(new Event('change'));
                // 요소에 change 이벤트 발생
            })
        })

        // deselectAll.addEventListener('click',(event) => {
        //     checkbox.checked = false;
        //     text.style.textDecorationLine = "none";
        //     item.style.backgroundColor = "white";
        // })

        deselectAll.addEventListener('click', () => {
            const checkboxes = document.querySelectorAll('.checkbox');
            checkboxes.forEach((cb) => {
                cb.checked = false;
                cb.dispatchEvent(new Event('change'));
            })
        })

        deleteSelect.addEventListener('click', () => {
            const checkboxes = document.querySelectorAll('.checkbox:checked');
            checkboxes.forEach((cb) => {
                cb.parentNode.parentNode.removeChild(cb.parentNode);
            })
        })

        deleteAll.addEventListener('click',() => {
            todoList.innerHTML = '';
            selectAll.checked = false;
        })

        // 부모 노드(item)에 자식 노드() 추가
        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(corBtn);
        item.appendChild(delBtn);

        todoList.appendChild(item);
        todoInputBox.value = "";
    })
})