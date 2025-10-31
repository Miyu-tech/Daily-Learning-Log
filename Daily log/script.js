const addButton = document.getElementById('addButton');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', function () {
    const taskTest = todoInput.value.trim();
    if (taskTest === '') return;
})