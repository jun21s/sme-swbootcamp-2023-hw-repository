document.addEventListener('DOMContentLoaded', () => {
    const todoInputBox = document.querySelector('#todo-input-box');
    const enter = document.querySelector('#enter');
    const todoList = document.querySelector('#todo-list');
    const selectAll = document.querySelector('#select-all');
    const deselectAll = document.querySelector('#deselect-all');
    const deleteSelect = document.querySelector('#delete-select');
    const deleteAll = document.querySelector('#delete-all');

    enter.addEventListener('click', (event) => {
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
                text.removeAttribute('readonly');
                corBtn.textContent = '수정';
            } else {
                text.setAttribute('contenteditable', 'true');
                text.focus(); // text 요소에 포커스 설정
                text.setAttribute('readonly', 'true'); // 읽기 전용 상태로 변경
                corBtn.textContent = '저장';
            }
        }

        checkbox.addEventListener('change',(event) => {
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

        selectAll.addEventListener('click', (event) => {
            const checkboxes = document.querySelectorAll('.checkbox');
            checkboxes.forEach((cb) => {
                cb.checked = true;
                cb.dispatchEvent(new Event('change'));
            })
        })

        // deselectAll.addEventListener('click',(event) => {
        //     checkbox.checked = false;
        //     text.style.textDecorationLine = "none";
        //     item.style.backgroundColor = "white";
        // })

        deselectAll.addEventListener('click', (event) => {
            const checkboxes = document.querySelectorAll('.checkbox');
            checkboxes.forEach((cb) => {
                cb.checked = false;
                cb.dispatchEvent(new Event('change'));
            })
        })

        deleteSelect.addEventListener('click', (event) => {
            const checkboxes = document.querySelectorAll('.checkbox:checked');
            checkboxes.forEach((cb) => {
                cb.parentNode.parentNode.removeChild(cb.parentNode);
            })
        })

        deleteAll.addEventListener('click',(event) => {
            todoList.innerHTML = '';
            selectAll.checked = false;
        })

        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(corBtn);
        item.appendChild(delBtn);

        todoList.appendChild(item);
        todoInputBox.value = "";
    })
})