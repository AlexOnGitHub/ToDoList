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
        taskContent.appendChild(checkComplete());

        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = inputValue;

        taskContent.appendChild(titleTask);

        const iconTask = document.createElement("i");
        iconTask.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
        
        taskContent.appendChild(iconTask);  
        //task.innerHTML = content;
        task.appendChild(taskContent);
        list.appendChild(task);
    };

    btn.addEventListener("click", createTask);

    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far", "fa-check-square", "icon");
        i.addEventListener("click", completeTask);
        return i;
    }

    const completeTask = (event) => {
        const element = event.target;
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon");
        element.classList.toggle("far");
    }

})();