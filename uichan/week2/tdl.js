const submitButton = document.getElementById('submit');
const allButton = document.getElementById('allClick');
const deleteButton = document.getElementById('delete');
const allList = document.getElementById('allList');
const inputItem = document.getElementById('inputItem');

function submitContent() {
    const inputValue = inputItem.value;
    const listItem = document.createElement('li');
    listItem.setAttribute('id', 'listItem');

    if (inputValue === '') {
        alert('내용을 입력하세요');
        return;
    }

    listItem.innerHTML = `<span id="list"><input class="check" type="checkbox" id="check"><span class="content">${inputValue}</span>
    <span id="btn"><button class="edit" onclick="editContent(this)">수정</button><button class="save" onclick="saveContent(this)">저장</button></span></span>`;
    allList.appendChild(listItem);

    inputItem.value = '';
}

function submitEnter(event) {
    if (event.key === 'Enter') {
        submitContent();
    }
}

submitButton.addEventListener('click', submitContent);
inputItem.addEventListener('keydown', submitEnter);

function allClick() {
    const checkBoxes = document.getElementsByClassName('check');
    const alreadyChecked = Array.from(checkBoxes).some((checkbox) => checkbox.checked);
    const allChecked = !alreadyChecked;

    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = allChecked;
    }
}

function deleteContent() {
    const selectedCheckBoxes = document.querySelectorAll('#allList input[type=checkbox]:checked');

    for (let i = 0; i < selectedCheckBoxes.length; i++) {
        const selectList = selectedCheckBoxes[i].parentNode.parentNode;
        selectList.parentNode.removeChild(selectList);
    }
}

function editContent(button) {
    const listItem = button.parentNode.parentNode;
    const content = listItem.querySelector('.content');
    const editButton = listItem.querySelector('.edit');
    const saveButton = listItem.querySelector('.save');

    content.contentEditable = true;
    content.focus();

    editButton.style.display = 'none';
    saveButton.style.display = 'inline-block';

    alert('수정가능');
}

function saveContent(button) {
    const listItem = button.parentNode.parentNode;
    const content = listItem.querySelector('.content');
    const editButton = listItem.querySelector('.edit');
    const saveButton = listItem.querySelector('.save');

    content.contentEditable = false;

    editButton.style.display = 'inline-block';
    saveButton.style.display = 'inline-block';

    alert('저장완료');
}

deleteButton.addEventListener('click', deleteContent);
