document.getElementById('newTaskButton').addEventListener('click', function() {
    const taskText = prompt('Enter a new task:');
    if (taskText) {
        addTask(taskText);
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = taskText;

    taskDiv.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this task?')) {
            taskDiv.remove();
            saveTasks();
        }
    });

    taskList.prepend(taskDiv);
    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = Array.from(taskList.children).map(taskDiv => taskDiv.innerText);
    document.cookie = 'tasks=' + JSON.stringify(tasks) + ';path=/';
}

function loadTasks() {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('tasks='));
    if (cookie) {
        const tasks = JSON.parse(cookie.split('=')[1]);
        tasks.forEach(taskText => addTask(taskText));
    }
}

window.onload = loadTasks;
