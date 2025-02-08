document.getElementById('newTodoButton').addEventListener('click', function() {
    const todoText = prompt('Enter a new TO DO:');
    if (todoText) {
        addTodo(todoText);
    }
});

function addTodo(todoText) {
    const ftList = document.getElementById('ft_list');

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.innerText = todoText;

    todoDiv.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this TO DO?')) {
            todoDiv.remove();
            saveTodos();
        }
    });

    ftList.prepend(todoDiv);
    saveTodos();
}

function saveTodos() {
    const ftList = document.getElementById('ft_list');
    const todos = Array.from(ftList.children).map(todoDiv => todoDiv.innerText);
    document.cookie = 'todos=' + JSON.stringify(todos) + ';path=/;max-age=' + 60*60*24*365;
}

function loadTodos() {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('todos='));
    if (cookie) {
        const todos = JSON.parse(cookie.split('=')[1]);
        todos.forEach(todoText => addTodo(todoText));
    }
}

window.onload = loadTodos;
