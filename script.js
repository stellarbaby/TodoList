"use strict";

const newTaskInput = document.getElementById("newTaskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);
newTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
    const taskText = newTaskInput.value;
  
    if (taskText !== "") {
      const listItem = document.createElement("li");
  
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
  
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => editTask(listItem, taskSpan));
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        listItem.remove();
      });
  
      listItem.appendChild(taskSpan);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
  
      taskList.appendChild(listItem);
      newTaskInput.value = "";
    }
  }
  
  function editTask(listItem, taskSpan) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = taskSpan.textContent;
  
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
      taskSpan.textContent = input.value;
      listItem.replaceChild(taskSpan, input);
      listItem.removeChild(saveButton);
    });
  
    listItem.replaceChild(input, taskSpan);
    listItem.appendChild(saveButton);
  }