// Lab 2 - TypeScript (Custom Types))
// GitHub: https://github.com/alevy99/frontend_dev_typescript_lab2

// Exercise 1

// Array to hold the list of tasks
let strings: string[] = [];

// Add a task to the list
function addTask(task: string): number {
    strings.push(task);
    console.log(`Task added: ${task}`);
    return strings.length;
}

// List all tasks in the list
function listAllTasks(): void {
    console.log("All Tasks:");
    strings.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

// Delete a task from the list
function deleteTask(task: string): number {
    const index = strings.indexOf(task);
    if (index !== -1) {
        strings.splice(index, 1);
        console.log(`Task deleted: ${task}`);
    } else {
        console.log(`Task not found: ${task}`);
    }
    return strings.length;
}

function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Exercise 2
// Task interface 
interface Task {
    strings: string[]; // Property to hold the list of tasks
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
}

// TaskManager class that implements the Task interface
class TaskManager implements Task {
    strings: string[] = []; // Initialize the list of tasks

    // Method to add a task to the list
    addTask(task: string): number {
        this.strings.push(task);
        console.log(`Task added: ${task}`);
        return this.strings.length;
    }

    // Method to list all tasks in the list
    listAllTasks(): void {
        console.log("All Tasks:");      
        this.strings.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }

    // Method to delete a task from the list
    deleteTask(task: string): number {
        const index = this.strings.indexOf(task);
        if (index !== -1) {
            this.strings.splice(index, 1); // Remove the task from the list
            console.log(`Task deleted: ${task}`);
        } else {
            console.log(`Task not found: ${task}`);
        }   
        return this.strings.length;
    }
}

// Example usage of the TaskManager class
const taskManager = new TaskManager();
taskManager.addTask("Beat eggs with seasoning");
taskManager.addTask("Melt butter in pan");
taskManager.addTask("Pour and cook eggs");
taskManager.addTask("Fold and serve");
taskManager.listAllTasks();
taskManager.deleteTask("Melt butter in pan");
taskManager.listAllTasks();
