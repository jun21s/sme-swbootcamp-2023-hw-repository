const item = document.getElementById("bar");
const i_list = document.getElementById("list");

function add() {
    const new_item = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    
    label.textContent = item.value;
    checkbox.setAttribute('type', 'checkbox');

    i_list.appendChild(new_item);
    new_item.appendChild(checkbox);
    new_item.appendChild(label);

    item.value = "";
}

function checkAll() {
    const c_box = document.querySelectorAll("input[type = 'checkbox']");
    c_box.forEach(function(checkbox) {
        checkbox.checked = true;
    })
}

function unCheckAll() {
    const c_box = document.querySelectorAll("input[type = 'checkbox']");
    c_box.forEach(function(checkbox) {
        checkbox.checked = false;
    })
}

function Delete() {
    const c_box = document.querySelectorAll("input[type = 'checkbox']");
    for (let i = 0; i < c_box.length; i++){
        if (c_box[i].checked == true)
            c_box[i].parentElement.remove();
    }
}