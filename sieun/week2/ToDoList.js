document.getElementById('addButton').addEventListener('click', addListItem);
document.getElementById('inputList_text').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    addListItem();
  }
});

function addListItem() {
  var inputText = document.getElementById('inputList_text').value;
  if (inputText === '') {
    alert('해야할 일을 입력해 주세요!');
  } else {
    var listItemHTML = `
      <li class="listitem">
        <input type="checkbox" onclick="listSelected(this)" readonly>
        <span class="item-text">${inputText}</span>
        <button class="editbutton" onclick="editItemText(this.parentNode.querySelector('.item-text'))">수정</button>
        <button class="deletebutton" onclick="deleteItem(this.parentNode)">삭제</button>
      </li>
    `;
    document.getElementById('list').insertAdjacentHTML('beforeend', listItemHTML);
    document.getElementById('inputList_text').value = '';
  }
}

function listSelected(checkbox) {
  checkbox.parentNode.classList.toggle('selected');
}

function editItemText(itemText) {
  itemText.contentEditable = true;
  itemText.focus();
}

function deleteItem(listItem) {
  listItem.remove();
}


//bottom_buttons
function allchecked() {
  var listItems = document.querySelectorAll('#list li');
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    listItem.classList.add('selected');
    listItem.querySelector('input[type="checkbox"]').checked = true;
  }
}

function allunchecked() {
  var listItems = document.querySelectorAll('#list li');
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    listItem.classList.remove('selected');
    listItem.querySelector('input[type="checkbox"]').checked = false;
  }
}

function deletechecked() {
  var selectedItems = document.querySelectorAll('#list li.selected');
  for (var i = 0; i < selectedItems.length; i++) {
    var selectedItem = selectedItems[i];
    selectedItem.remove();
  }
}

function deleteall() {
  var confirmation = confirm("전체 삭제 하시겠습니까?");
  if (confirmation) {
    var list = document.getElementById('list');
    list.innerHTML = '';
  }
}
