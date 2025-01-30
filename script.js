let editingTaskId = null;

function addTask() {
    const input = document.getElementById('tf-input');
    const addButton = document.getElementById('add-task-btn');
    const inputLabel = document.getElementById('input-label');
    const inputValue = input.value.trim() ;
    if (!inputValue) return;

    if (editingTaskId) {
      const task = document.getElementById(editingTaskId);
      if (task) {
          task.querySelector('span').textContent = inputValue;
      }
      editingTaskId = null;
      addButton.textContent = 'Add Task';
      inputLabel.textContent = 'Enter a task';
  } else {
    const task = document.createElement('li');
    // task.textContent = inputValue;
    task.classList.add('list-item');
    task.id = 
    new Date().valueOf().toString() + 
    Math.random().toString(36).substring(2,7);

    const span = document.createElement('span');
    span.textContent = inputValue;
    task.appendChild(span);

      // Edit Button
      const editButton = document.createElement('button');
      editButton.innerText = 'Edit';
      editButton.classList.add('edit-button');
      task.appendChild(editButton);
      editButton.addEventListener('click', (e) => editing(e.target.parentElement));

      // Delete Button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', function () {
          deleteTask(task.id);
      });
      task.appendChild(deleteButton);

    const taskContainer = document.getElementById('task-container');
    taskContainer.appendChild(task);
    input.value = '';
}
}

function deleteTask(id) {
    const task = document.getElementById(id);
  if (task)  task.remove();
} 

function editing(taskElement) {
    const input = document.getElementById('tf-input');
    const addButton = document.getElementById('add-task-btn');
    const inputLabel = document.getElementById('input-label');
    const span = taskElement.querySelector('span');
    if (span) {
      input.value = span.textContent;
      editingTaskId = taskElement.id;
      addButton.textContent = 'Edit';
      inputLabel.textContent = 'Edit a task';
      input.focus();

    }
  }
  
  const form = document.getElementById('task-form');
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      addTask();
  });