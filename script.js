// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select the "Add Task" button
    const addButton = document.getElementById('add-task-btn');

    // Select the input field for new tasks
    const taskInput = document.getElementById('task-input');

    // Select the unordered list where tasks will be displayed
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user and return
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // When the remove button is clicked, delete the task
        removeBtn.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeBtn);

        // Append the new task to the task list
        taskList.appendChild(listItem);

        // Clear the input field for the next task
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
