document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);

            // Clear input field
            taskInput.value = '';

            // Add event listener to mark task as completed
            taskItem.addEventListener('click', function() {
                taskItem.classList.toggle('completed');
            });

            // Add delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            taskItem.appendChild(deleteButton);

            // Add event listener to delete task
            deleteButton.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent li click event from firing
                taskItem.remove();
            });
        }
    });
});
