

/**
 * 
 *  dzień 1
 * 
 */


console.log(window);
console.log(document);
 

const heading = document.querySelector('#todoTitle');

heading.innerHTML = '<p>zmiana</p>';
heading.innerText = 'zm';


const myName = 'lukasz';
heading.innerHTML = `hello ${myName}`;

heading.classList.add('nowa-klasa');
heading.classList.remove('nowa-klasa');
heading.classList.toggle('nowa-klasa'); // jak jest klasa to ja usuwa a jak nie ma to ja dodaje














const addTodoForm = document.querySelector('#adTodoForm');
const todoList = document.querySelector('#todoList');
const addTodoInput = document.querySelector('#addTodoInput');

const handleSubmit = (event) => {

    event.preventDefault(); // powstrzymuje przeładowanie strony

    const inputValue = addTodoInput.value;

    todoList.innerHTML += `<li>  ${inputValue} </li>`;

    addTodoInput.value = '';

    localStorage.setItem('todos', JSON.stringify(todos));

}



const removeTodoInput = document.querySelector('#removeTodoList');

const handleRemoveSubmit = (event) => {

    todoList.innerHTML = '';

};



const todos = [
    {
        title: 'smieci'
    },
    {
        title: 'pozmywać'
    }
];

localStorage.setItem('todos', JSON.stringify(todos));

const renderTodos = () => {
    todos.forEach(todo =>{

        todoList.innerHTML += `<li>${todo.title}</li>`
    })
}

renderTodos();

removeTodoInput.addEventListener('click', handleRemoveSubmit);
addTodoForm.addEventListener('submit', handleSubmit);

// zrobic dodawanie i usuwanie z localstorage


// src,alt - do obrazków


/**
 * 
 *  dzień 2
 * 
 */


















