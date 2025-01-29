function addTask() {
    const input = document.getElementById('tf-input');
    const inputValue = input.value;

    const task = document.createElement('li');
    task.textContent = inputValue;
    task.classList.add('list-item');
    task.id = 
    new Date().valueOf().toString() + 
    Math.random().toString(36).substring(2,7);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        deleteTask(task.id)
    })

    task.appendChild(deleteButton);

    const taskContainer = document.getElementById('task-container');

    taskContainer.appendChild(task);
    input.value = '';
}

function deleteTask(id) {
    const task = document.getElementById(id);
    task.remove();

} 