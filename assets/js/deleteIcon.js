const deleteIcon = () => {
    const iconTrash = document.createElement("i");
    iconTrash.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    iconTrash.addEventListener("click", deleteTask);

    return iconTrash;
}

const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
};

export default deleteIcon;