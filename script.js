// Wait for the page to fully load before running any JavaScript
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array from localStorage or as an empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Save current tasks array to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load and display tasks from Local Storage
    function loadTasks() {
        taskList.innerHTML = ''; // Clear any existing tasks

        // Loop through each saved task and render it
        tasks.forEach((taskText, index) => {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');

            // Handle task removal
            removeBtn.onclick = () => {
                tasks.splice(index, 1); // Remove from array
                saveTasks();            // Save updated array
                loadTasks();            // Refresh task list on page
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        tasks.push(taskText);   // Add new task to array
        saveTasks();            // Save updated tasks to Local Storage
        loadTasks();            // Re-render task list
        taskInput.value = '';   // Clear input field
    }

    // Event: Add task on button click
    addButton.addEventListener('click', addTask);

    // Event: Add task on Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks from localStorage when the page loads
    loadTasks();
});
