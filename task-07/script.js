window.addEventListener('push', () => {
    const form = document.querySelector(".form");
    const input = document.querySelector(".input-todo");
    const done = document.querySelector(".todo-list");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoList = input.value;
        input.value ="";

        if (todoList.trim().length === 0) {
            alert("Enter text... ");
            return;
        } else {
        const done_work = document.createElement("div");
        done_work.classList.add("todo-item");
        done_work.innerText=todoList;
        done.appendChild(done_work);

        done_work.addEventListener('click', () => {
            done.removeChild(done_work);
        });
        }
    })
})