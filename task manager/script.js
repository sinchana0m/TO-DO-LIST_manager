// Function to add a new category
function addCategory() {
    const categoryName = document.getElementById('category-name').value.trim();
    if (categoryName === "") {
        alert("Please enter a category name.");
        return;
    }

    const categoryContainer = document.getElementById('categories');

    // Check if category already exists
    if (document.getElementById(categoryName)) {
        alert("Category already exists!");
        return;
    }
    // Create category container
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    categoryDiv.setAttribute('id', categoryName);
    categoryDiv.innerHTML = `
        <h2>${categoryName}</h2>
        <div class="task-form">
            <input type="text" id="${categoryName}-task" placeholder="Enter Task">
            <button onclick="addTask('${categoryName}')">Add Task</button>
        </div>
        <div class="task-list" id="${categoryName}-tasks">
            <h3>Tasks:</h3>
            <ul></ul>
        </div>
        <button onclick="removeCategory('${categoryName}')">Remove Category</button>
    `;

    categoryContainer.appendChild(categoryDiv);
}

// Function to add a new task to a category
function addTask(categoryName) {
    const taskInput = document.getElementById(`${categoryName}-task`);
    const taskDescription = taskInput.value.trim();
    if (taskDescription === "") {
        alert("Please enter a task description.");
        return;
    }

    const taskList = document.getElementById(`${categoryName}-tasks`).getElementsByTagName('ul')[0];
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;

    // Add remove button to task item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        taskItem.remove();
    };
    taskItem.appendChild(removeButton);

    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear task input field after adding task
}
// Remove  categories
function removeCategory(categoryName) {
    const category = document.getElementById(categoryName);
    category.remove();
}
