let todoList = [];
function saveinfo(todoList) {
    localStorage.setItem('List',JSON.stringify(todoList));
}

let objStr = localStorage.getItem('List');
if (objStr!=null) {
    todoList = JSON.parse(objStr);
}

displayItems();

function addList() {
    let inputElement = document.querySelector('#todo-input');
    let inputDateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = inputDateElement.value;
    let List = {
        item: todoItem,
        dueDate: todoDate,
    }
    todoList.push(List);
    saveinfo(todoList);
    inputElement.value = ''; 
    inputDateElement.value = ''; 
    displayItems();
}

function displayItems() {
    let containerElements = document.querySelector('.todo-container');

    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let {item, dueDate} = todoList[i];
        
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="delete-btn" onclick="todoList.splice(${i},1);
            saveinfo(todoList);;
            displayItems();">Delete</button>
        `;
        
    }
    containerElements.innerHTML = newHtml;
}