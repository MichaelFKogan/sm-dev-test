document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.className = 'list-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'complete';

        const divText = document.createElement('div');
        divText.className = 'list-text';
        divText.textContent = taskText;

        const deleteButton = document.createElement('div');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(divText);
        li.appendChild(deleteButton);

        document.getElementById('todo-list').appendChild(li);

        taskInput.value = ''; // Clear the input field
    }
});

// Add event listeners to existing delete buttons
document.querySelectorAll('.delete').forEach(function(button) {
    button.addEventListener('click', function() {
        this.parentElement.remove();
    });
});
