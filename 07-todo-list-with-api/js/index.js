
// Napisz aplikacje TodoList. Pod spodem lista wymagan

// 1. Stworz strone z lista todos i zaladuj elementy z API
// 2. Zrob nawigacje, dzieki ktorej bedziesz mogl przejsc do podstrony add
// 3. Na podstronie add, zrob obsluge dodawania elementow todo do API
// 4. Po poprawnym dodaniu do strony, przekieruj na podstrone glowna

// Zadania dodatkowe

// 5. Pod lista todo, dodaj przycisk 'remove todos', ktory spowoduje usuniecie wszystkich todos. Rzeczy do wykonania

//  - Dodaj do pliku server.js obsluge endpointa /todos z metoda HTTP REMOVE
//  - Endpoint bedzie mial za zadanie, wyczyscic tablice todos z pliku todos.json
//  - Jesli operacja sie powiedzie, to wyczysc liste z HTML

// 6. Ostyluj listę

// 7*. Dodaj ikonke X przy kazdym elemencie TODO. Nastepnie za pomoca document.addEventListener('click', handleRemoveTodo) i wlasciwosci event.target spraw, zeby usunac kazdy pojedynczy element. (pamietaj o przekazaniu ID na BE).



const searchButton = document.querySelector('#searchButton');
const todoList = document.querySelector('#todoList');
const todoDelete = document.querySelector('#todoDelete');


const renderTodo = (todoRender) => {
    todoList.innerHTML += `
      <li>
        <p>${todoRender.title} - <strong>${todoRender.author}</strong></p>
      </li>
    `
  }

fetch('http://localhost:5000/todos')
.then((response) => {

   return response.json();
})
.then( (data) => {

    console.log(data);
    data.todos.forEach((todo) => {
        renderTodo(todo);
    })
})
.catch ((error) => {
    console.log(error);
})


const handleDelete = (event) => {

    fetch('http://localhost:5000/todos', {
        method: 'DELETE'
    })
    .then( (data) => {
        todoList.innerHTML = '';
    })
    .catch ((error) => {
        console.log(error);
    })
}


const handleDeleteOne = (event) => {
    alert('ok');
}

todoDelete.addEventListener('click', handleDelete);




