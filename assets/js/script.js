import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

//Inmediately invoked function expression IIFE
( () => {
    const btn = document.querySelector("[data-form-btn]");

    const createTask = (evento) => {
        evento.preventDefault();

        const input = document.querySelector("[data-form-input]");
        const inputValue = input.value;

        const list = document.querySelector("[data-list]")
        const task = document.createElement("li");
        task.classList.add("card");

        input.value = "";

        const taskContent = document.createElement("div");
        
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = inputValue;

        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);

        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    };

    btn.addEventListener("click", createTask);
})();