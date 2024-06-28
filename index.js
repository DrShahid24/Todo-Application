#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
// Print Wellcome message.
console.log(chalk.green("\n\t Wellcome to Code With Dr.Shahid - Todo-List Application\n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do.",
                choices: ["Add Task", "Delete Task", "Updated Task", "View Task", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "View Task") {
            await viewTask();
        }
        else if (option.choice === "Updated Task") {
            await updateTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// function to add new Task to the Todo-List.
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter Your New task:"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added in Todo List successfully.`);
};
// function to view the all Todo-List.
let viewTask = () => {
    console.log(" \n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// function to delete task.
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index number of the task you want to delete:",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo-List.`);
};
// function to update task.
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index number of the task you watn to update."
        },
        {
            name: "new_Task",
            type: "input",
            message: "Now Enter the new Task name:"
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_Task;
    console.log(`\n Task at index number ${update_task_index.index - 1} updated successfully [for view updated list check option "view Todo-List"]`);
};
main();
