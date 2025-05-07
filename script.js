document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if(taskText===""){
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.onclick = function () {
        li.remove();
    };

    li.appendChild(button);
    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';
}
