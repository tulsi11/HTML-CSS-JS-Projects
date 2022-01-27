const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addtodo();
});
function addtodo() {
    const todotext = input.value;

    if (todotext) {
        const todoele = document.createElement("li");
        todoele.innerText = todotext;

        todoele.addEventListener('click', () => {
            todoele.classList.toggle('completed');
        });

        todoele.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoele.remove();
        });

        todos.appendChild(todoele);

        input.value = "";

    }
}