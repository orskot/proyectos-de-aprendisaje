const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.Value;
        todo.Value = '';
        todos.push(todoText);
        todos.push 
        for(let i = 0; i < todos.length; i++) {}
    }
}