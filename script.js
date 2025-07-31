function addTask() {
    // Get and trim the value from the input field
    const taskText = taskInput.value.trim();

    // If task is empty, alert the user
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new <li> element and set its textContent
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a new "Remove" button and assign class
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Set onclick event to remove the task when clicked
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}
