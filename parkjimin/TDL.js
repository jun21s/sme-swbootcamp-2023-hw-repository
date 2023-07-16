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
        // 수정기능 넣기

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

        selectAll.addEventListener('click',(event) => {
            checkbox.checked = selectAll.click;
            text.style.textDecorationLine = "line-through";
            text.style.textDecorationColor = "rgb(173, 173, 173)";
            item.style.backgroundColor = "rgb(219, 226, 240)";
        })

        deselectAll.addEventListener('click',(event) => {
            checkbox.checked = false;
            text.style.textDecorationLine = "none";
            item.style.backgroundColor = "white";
        })

        // 선택삭제 안됨
        // function deleteSelect() {
        //     const lists = document.getElementsByClassName('checkbox');
        //     for (let i=0; i<lists.length; i++) {
        //         if (lists[i].checked) {
        //             lists[i].parentElement.parentElement.remove();
        //         }
        //     }
        // }

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