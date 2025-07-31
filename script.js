// Ensure all DOM elements are fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks from Local Storage or create an empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to save current tasks array to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from Local Storage and display them
    function loadTasks() {
        // Clear the current list
        taskList.innerHTML = '';

        // Create each task element
        tasks.forEach((taskText, index) => {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');

            // When remove button is clicked, remove the task
            removeBtn.onclick = () => {
                tasks.splice(index, 1); // Remove task from array
                saveTasks();            // Update Local Storage
                loadTasks();            // Refresh the displayed list
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Validate that the input is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        tasks.push(taskText);    // Add to tasks array
        saveTasks();             // Save to Local Storage
        loadTasks();             // Update DOM with new task
        taskInput.value = '';    // Clear input field
    }

    // Event listener for button click
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks on initial page load
    loadTasks();
});
